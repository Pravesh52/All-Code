import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import glob

# ================= PAGE CONFIG =================
st.set_page_config(
    page_title="UIDAI Aadhaar Analytics | Government of India",
    layout="wide"
)

# ================= LOAD DATA =================
@st.cache_data
def load_multiple_csv(folder_path):
    files = glob.glob(folder_path + "/*.csv")
    df_list = [pd.read_csv(file) for file in files]
    return pd.concat(df_list, ignore_index=True)

enrol_df = load_multiple_csv("data/enrolment")
demo_df = load_multiple_csv("data/demographic")
bio_df = load_multiple_csv("data/biometric")

# ================= GOVERNMENT HEADER =================
st.markdown("""
<style>
.gov-header {
    background:#0b3c5d;
    padding:25px;
    border-radius:10px;
    color:white;
}
.gov-title {
    font-size:34px;
    font-weight:700;
}
.gov-sub {
    font-size:14px;
    color:#dce6f1;
}
.section {
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 3px 8px rgba(0,0,0,0.08);
    margin-bottom:25px;
}
</style>
""", unsafe_allow_html=True)

st.markdown("""
<div class="gov-header">
<div class="gov-title">UIDAI Aadhaar National Analytics Dashboard</div>
<div class="gov-sub">
Ministry of Electronics & Information Technology, Government of India<br>
Integrated Enrolment, Demographic & Biometric Intelligence System
</div>
</div>
""", unsafe_allow_html=True)

st.write("")

# ================= KPI DASHBOARD =================
st.markdown("<div class='section'>", unsafe_allow_html=True)
st.subheader("📌 National Aadhaar Overview")

c1, c2, c3, c4 = st.columns(4)

c1.metric("Total Enrolment Records", f"{len(enrol_df):,}")
c2.metric("Demographic Records", f"{len(demo_df):,}")
c3.metric("Biometric Auth (Age 17+)", f"{int(bio_df['bio_age_17_'].sum()):,}")
c4.metric("Biometric Auth (Age 5–17)", f"{int(bio_df['bio_age_5_17'].sum()):,}")

st.markdown("</div>", unsafe_allow_html=True)

# ================= SIDEBAR =================
st.sidebar.title("📊 Control Panel")
states = sorted(bio_df["state"].dropna().unique())
selected_state = st.sidebar.selectbox("Select State / UT", ["All India"] + states)

filtered_df = bio_df.copy()
if selected_state != "All India":
    filtered_df = bio_df[bio_df["state"] == selected_state]

# ================= STATEWISE BAR CHART =================
st.markdown("<div class='section'>", unsafe_allow_html=True)
st.subheader("📊 State-wise Aadhaar Biometric Authentication Load")

state_bio = (
    filtered_df.groupby("state")[["bio_age_5_17", "bio_age_17_"]]
    .sum()
    .sort_values("bio_age_17_", ascending=False)
    .head(10)
)

fig1, ax1 = plt.subplots(figsize=(11,5))
state_bio.plot(kind="bar", ax=ax1)
ax1.set_xlabel("State / UT")
ax1.set_ylabel("Authentication Volume")
ax1.set_title("Top States by Aadhaar Biometric Usage")

st.pyplot(fig1)
st.markdown("</div>", unsafe_allow_html=True)

# ================= AGE DISTRIBUTION PIE =================
st.markdown("<div class='section'>", unsafe_allow_html=True)
st.subheader("👥 Age-based Dependency on Biometric Authentication")

fig2, ax2 = plt.subplots(figsize=(6,6))
ax2.pie(
    [filtered_df["bio_age_5_17"].sum(), filtered_df["bio_age_17_"].sum()],
    labels=["Children (5–17)", "Adults (17+)"],
    autopct="%1.1f%%",
    startangle=90
)
ax2.axis("equal")

st.pyplot(fig2)
st.markdown("</div>", unsafe_allow_html=True)

# ================= RISK ANALYTICS =================
st.markdown("<div class='section'>", unsafe_allow_html=True)
st.subheader("🚨 Infrastructure Load Risk Assessment")

risk_df = filtered_df.groupby("state")["bio_age_17_"].sum().reset_index()
risk_df["Risk Category"] = risk_df["bio_age_17_"].apply(
    lambda x: "High Load" if x > 1_000_000 else "Medium Load" if x > 500_000 else "Normal Load"
)

st.dataframe(
    risk_df.sort_values("bio_age_17_", ascending=False),
    use_container_width=True
)
st.markdown("</div>", unsafe_allow_html=True)

# ================= POLICY DASHBOARD =================
st.markdown("<div class='section'>", unsafe_allow_html=True)
st.subheader("🏛️ Governance Insights")

st.markdown("""
• States marked **High Load** require biometric server scaling and redundancy  
• High child authentication indicates need for **assisted Aadhaar services**  
• Uneven state distribution highlights **digital divide**  
• Analytics can guide **resource allocation & Aadhaar infrastructure planning**
""")
st.markdown("</div>", unsafe_allow_html=True)

# ================= FOOTER =================
st.markdown("""
<hr>
<center>
<b>UIDAI Hackathon Project</b><br>
Data-driven Aadhaar Governance | Government of India
</center>
""", unsafe_allow_html=True)
