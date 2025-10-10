import React, { useState, useEffect } from 'react';
import './App.css';
import { Upload, FileText, LogOut, User, BookOpen, GraduationCap, Users } from 'lucide-react';

const MOCK_USERS = {
  'admin@gec.edu': { password: 'admin123', role: 'admin', name: 'Admin User' },
  'teacher@gec.edu': { password: 'teacher123', role: 'teacher', name: 'Dr. Sharma' },
  'student@gec.edu': { password: 'student123', role: 'student', name: 'Rahul Kumar', semester: '5', branch: 'CSE', section: 'A' }
};

const BRANCHES = ['CSE', 'ECE', 'ME', 'CE', 'EE'];
const SEMESTERS = ['1', '2', '3', '4', '5', '6', '7', '8'];
const SECTIONS = ['A', 'B', 'C'];

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const sampleNotes = [
      { id: 1, title: 'Data Structures - Unit 1', semester: '5', branch: 'CSE', section: 'A', subject: 'Data Structures', uploadedBy: 'Dr. Sharma', date: '2025-10-01', fileUrl: '#' },
      { id: 2, title: 'DBMS Notes - Complete', semester: '5', branch: 'CSE', section: 'A', subject: 'DBMS', uploadedBy: 'Dr. Verma', date: '2025-10-05', fileUrl: '#' },
      { id: 3, title: 'Operating System - Process Management', semester: '5', branch: 'CSE', section: 'B', subject: 'OS', uploadedBy: 'Dr. Sharma', date: '2025-10-08', fileUrl: '#' },
    ];
    setNotes(sampleNotes);
  }, []);

  const handleLogin = () => {
    setError('');
    const user = MOCK_USERS[loginForm.email];
    if (user && user.password === loginForm.password) {
      setCurrentUser({ ...user, email: loginForm.email });
      setLoginForm({ email: '', password: '' });
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => setCurrentUser(null);

  if (!currentUser) {
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <div className="logo-circle">
              <GraduationCap color="white" size={40} />
            </div>
            <h1 className="college-title">GEC Jabalpur</h1>
            <p className="college-subtitle">Global Engineering College</p>
            <p className="portal-subtitle">Notes Management Portal</p>
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="form-input"
              placeholder="your.email@gec.edu"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button onClick={handleLogin} className="btn-login">Login</button>

          <div className="demo-credentials">
            <p className="demo-title">Demo Credentials</p>
            <div className="demo-list">
              <p>👤 Admin: admin@gec.edu / admin123</p>
              <p>👨‍🏫 Teacher: teacher@gec.edu / teacher123</p>
              <p>👨‍🎓 Student: student@gec.edu / student123</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header user={currentUser} onLogout={handleLogout} />
      <main className="main-content">
        <div className="container">
          {currentUser.role === 'admin' && <AdminDashboard notes={notes} />}
          {currentUser.role === 'teacher' && <TeacherDashboard user={currentUser} notes={notes} setNotes={setNotes} />}
          {currentUser.role === 'student' && <StudentDashboard user={currentUser} notes={notes} />}
        </div>
      </main>
    </>
  );
};

const Header = ({ user, onLogout }) => (
  <header className="app-header">
    <div className="header-container">
      <div className="header-logo">
        <div className="header-logo-circle">
          <GraduationCap color="white" size={28} />
        </div>
        <div>
          <h1 className="header-title">Global Engineering College</h1>
          <p className="header-subtitle">Jabalpur</p>
        </div>
      </div>
      <div className="header-user">
        <div className="user-info">
          <p className="user-name">{user.name}</p>
          <p className="user-role">{user.role}</p>
        </div>
        <button onClick={onLogout} className="btn-logout">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </div>
  </header>
);

const AdminDashboard = ({ notes }) => (
  <>
    <h2 className="dashboard-title">Admin Dashboard</h2>
    <div className="stats-grid">
      <StatCard title="Total Notes" value={notes.length} color="blue" />
      <StatCard title="Students" value="450" color="green" />
      <StatCard title="Teachers" value="35" color="purple" />
      <StatCard title="Branches" value={BRANCHES.length} color="orange" />
    </div>
    <div className="card">
      <h3 className="card-title">All Notes</h3>
      <NotesTable notes={notes} showAll={true} />
    </div>
  </>
);

const StatCard = ({ title, value, color }) => (
  <div className="stat-card">
    <div className="stat-content">
      <div>
        <p className="stat-label">{title}</p>
        <p className="stat-value">{value}</p>
      </div>
      <div className={`stat-icon ${color}`}></div>
    </div>
  </div>
);

const TeacherDashboard = ({ user, notes, setNotes }) => {
  const [uploadForm, setUploadForm] = useState({
    title: '', semester: '5', branch: 'CSE', section: 'A', subject: '', file: null
  });

  const handleUpload = () => {
    if (!uploadForm.title || !uploadForm.subject) {
      alert('Please fill all required fields');
      return;
    }

    const newNote = {
      id: notes.length + 1,
      title: uploadForm.title,
      semester: uploadForm.semester,
      branch: uploadForm.branch,
      section: uploadForm.section,
      subject: uploadForm.subject,
      uploadedBy: user.name,
      date: new Date().toISOString().split('T')[0],
      fileUrl: '#'
    };
    setNotes([newNote, ...notes]);
    setUploadForm({ title: '', semester: '5', branch: 'CSE', section: 'A', subject: '', file: null });
    alert('Notes uploaded successfully!');
  };

  const myNotes = notes.filter(note => note.uploadedBy === user.name);

  return (
    <>
      <h2 className="dashboard-title">Teacher Dashboard</h2>
      <div className="grid-2">
        <div className="card">
          <div className="upload-header">
            <Upload size={24} color="#2563eb" />
            <h3 className="card-title">Upload Notes</h3>
          </div>

          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              value={uploadForm.title}
              onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <select className="select-input" value={uploadForm.semester} onChange={(e) => setUploadForm({ ...uploadForm, semester: e.target.value })}>
              {SEMESTERS.map(s => <option key={s}>{s}</option>)}
            </select>
            <select className="select-input" value={uploadForm.branch} onChange={(e) => setUploadForm({ ...uploadForm, branch: e.target.value })}>
              {BRANCHES.map(b => <option key={b}>{b}</option>)}
            </select>
            <select className="select-input" value={uploadForm.section} onChange={(e) => setUploadForm({ ...uploadForm, section: e.target.value })}>
              {SECTIONS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              type="text"
              value={uploadForm.subject}
              onChange={(e) => setUploadForm({ ...uploadForm, subject: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Upload File</label>
            <input
              type="file"
              onChange={(e) => setUploadForm({ ...uploadForm, file: e.target.files[0] })}
              className="file-input"
            />
            <p className="file-hint">Supported: PDF, DOC, DOCX, PPT, PPTX</p>
          </div>

          <button onClick={handleUpload} className="btn-upload">Upload Notes</button>
        </div>

        <div className="card">
          <h3 className="card-title">My Uploads ({myNotes.length})</h3>
          <div className="notes-list">
            {myNotes.map(note => (
              <div key={note.id} className="note-item">
                <h4 className="note-title">{note.title}</h4>
                <p className="note-details">{note.branch} - Sem {note.semester} - Sec {note.section}</p>
                <p className="note-date">{note.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const StudentDashboard = ({ user, notes }) => {
  const filteredNotes = notes.filter(
    note => note.semester === user.semester && note.branch === user.branch && note.section === user.section
  );

  return (
    <>
      <h2 className="dashboard-title">Student Dashboard</h2>
      <div className="card">
        <h3 className="card-title">Available Notes ({filteredNotes.length})</h3>
        {filteredNotes.length > 0 ? <NotesTable notes={filteredNotes} showAll={false} /> : <p>No notes available.</p>}
      </div>
    </>
  );
};

const NotesTable = ({ notes, showAll }) => (
  <div className="table-container">
    <table className="notes-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Subject</th>
          {showAll && <th>Branch</th>}
          {showAll && <th>Sem</th>}
          {showAll && <th>Section</th>}
          <th>Uploaded By</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {notes.map(note => (
          <tr key={note.id}>
            <td>{note.title}</td>
            <td>{note.subject}</td>
            {showAll && <td>{note.branch}</td>}
            {showAll && <td>{note.semester}</td>}
            {showAll && <td>{note.section}</td>}
            <td>{note.uploadedBy}</td>
            <td>{note.date}</td>
            <td><button className="btn-download">Download</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default App;
