import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./App.css";

export default function App() {
  const [bio, setBio] = useState([]);
  const [demo, setDemo] = useState([]);
  const [enrol, setEnrol] = useState([]);

  useEffect(() => {
    loadCSV("/biometric.csv", setBio);
    loadCSV("/demographic.csv", setDemo);
    loadCSV("/enrolment.csv", setEnrol);
  }, []);

  const loadCSV = (path, setter) => {
    Papa.parse(path, {
      download: true,
      header: true,
      complete: res => setter(res.data)
    });
  };

  const totalBio = bio.reduce((a, b) => a + (+b.bio_age_17_ || 0), 0);
  const totalEnrol = enrol.length;
  const totalDemo = demo.length;

  return (
    <div>
      <header>UIDAI Aadhaar National Analytics Portal</header>

      {/* KPI CARDS */}
      <section className="cards">
        <div className="card">Biometric Transactions<br /><b>{totalBio.toLocaleString()}</b></div>
        <div className="card">Enrolment Records<br /><b>{totalEnrol}</b></div>
        <div className="card">Demographic Entries<br /><b>{totalDemo}</b></div>
      </section>

      {/* BIOMETRIC CHART */}
      <section className="block">
        <h3>Biometric Dependency by Age Group</h3>
        <Pie data={{
          labels: ["Age 5–17", "Age 17+"],
          datasets: [{
            data: [
              bio.reduce((a, b) => a + (+b.bio_age_5_17 || 0), 0),
              totalBio
            ]
          }]
        }} />
      </section>

      {/* ENROLMENT CHART */}
      <section className="block">
        <h3>State-wise Enrolment Distribution</h3>
        <Bar data={{
          labels: enrol.slice(0, 10).map(e => e.state),
          datasets: [{
            label: "Enrolments",
            data: enrol.slice(0, 10).map(() => 1)
          }]
        }} />
      </section>

      <footer>
        Data-driven governance using Aadhaar analytics
      </footer>
    </div>
  );
}
