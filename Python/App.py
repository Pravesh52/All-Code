import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

# ---------------- PAGE CONFIG ----------------
st.set_page_config(
    page_title="UIDAI Aadhaar Analytics Portal",
    layout="wide"
)

# ---------------- LOAD DATA ----------------
@st.cache_data
def load_data():
    enrol = pd.read_csv("enrolment.csv")
    demo = pd.read_csv("demographic.csv")
    bio = pd.read_csv("biometric.csv")
    return enrol, demo, bio

enrol_df, demo_df, bio_df = load_data()

# ---------------- HEADER ----------------
st.markdown("""
<style>
.big-title {
    font-size:40px;
    font-weight:700;
    color:#0d47a1;
}
.sub {
    color:gray;
}
</style>
""", unsafe_allow_html=True)

st.markdown('<div class="big-title">UIDAI Aadhaar National Analytics Portal</div>', unsafe_allow_html=True)
st.markdown('<div class="sub">Integrated Enrolment, Demographic & Biometric Intelligence System</div>', unsafe_allow_html=True)

st.divider()

# ---------------- KPI CARDS ----------------
col1, col2, col3, col4 = st.columns(4)

total_enrol = len(enrol_df)
total_demo = len(demo_df)
total_bio = bio_df["bio_age_17_"].sum()
child_bio = bio_df["bio_age_5_17"].sum()

col1.metric("Total Enrolment Records", f"{total_enrol:,}")
col2.metric("Demographic Records", f"{total_demo:,}")
col3.metric("Biometric Auth (17+)", f"{int(total_bio):,}")
col4.metric("Biometric Auth (5–17)", f"{int(child_bio):,}")

st.divider()

# ---------------- SIDEBAR FILTER ----------------
st.sidebar.title("🔍 Filters")
state_list = sorted(bio_df["state"].dropna().unique())
selected_state = st.sidebar.selectbox("Select State", ["All"] + state_list)

if selected_state != "All":
    bio_df = bio_df[bio_df["state"] == selected_state]

# ---------------- BIOMETRIC ANALYSIS ----------------
st.subheader("📊 Biometric Usage Analysis")

bio_group = bio_df.groupby("state")[["bio_age_5_17", "bio_age_17_"]].sum().head(10)

fig1, ax1 = plt.subplots()
bio_group.plot(kind="bar", ax=ax1)
ax1.set_ylabel("Number of Authentications")
ax1.set_title("Top States by Biometric Usage")

st.pyplot(fig1)

# ---------------- AGE DISTRIBUTION ----------------
st.subheader("👥 Age-wise Biometric Dependency")

fig2, ax2 = plt.subplots()
ax2.pie(
    [child_bio, total_bio],
    labels=["Age 5–17", "Age 17+"],
    autopct="%1.1f%%",
    startangle=90
)
ax2.axis("equal")

st.pyplot(fig2)

# ---------------- RISK DETECTION ----------------
st.subheader("🚨 High Risk State Identification")

risk_df = bio_df.groupby("state")["bio_age_17_"].sum().reset_index()
risk_df["Risk Level"] = risk_df["bio_age_17_"].apply(
    lambda x: "🔴 High" if x > 1_000_000 else "🟠 Medium" if x > 500_000 else "🟢 Low"
)

st.dataframe(risk_df.sort_values("bio_age_17_", ascending=False))

# ---------------- POLICY INSIGHTS ----------------
st.subheader("📌 Policy & Technical Insights")

st.markdown("""
- 🔴 **High biometric load states** require server & retry optimization  
- 👶 **Children (5–17)** should follow assisted or hybrid authentication  
- 🌍 **Rural under-utilization** suggests awareness & mobile enrolment units  
- ⚙️ **District-level load balancing** can improve Aadhaar reliability  
""")

# ---------------- FOOTER ----------------
st.divider()
st.markdown(
    "<center>Data-driven Aadhaar governance using Enrolment, Demographic & Biometric Analytics</center>",
    unsafe_allow_html=True
)
