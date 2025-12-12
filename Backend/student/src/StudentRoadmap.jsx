import React, { useState } from 'react';
import { CheckCircle, Youtube, ExternalLink, BookOpen, Code, Brain, Award } from 'lucide-react';

export default function StudentRoadmap() {
  const [activeYear, setActiveYear] = useState('1st Year');

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  const yearContent = {
    '1st Year': {
      cgpa: '6.5+ CGPA',
      subtitle: 'Foundation & Domain Exploration',
      difficulty: "Hard and Complex (It's OK to Feel this)",
      topics: [
        {
          title: 'Programming Language (Python or C)',
          duration: '3-4 months',
          description: 'Not just pass but understand deeply. Master fundamentals, syntax, and problem-solving approach.',
          resources: ['YouTube tutorials', 'Online courses', 'Offline classes']
        },
        {
          title: 'Domain Exploration',
          duration: 'Ongoing throughout year',
          description: 'Explore different domains: Web Development, Data Analytics, Data Science, Cybersecurity, Blockchain. Focus on AI, Generative AI, Agentic AI if interested in AI/ML track.',
          resources: ['Research online', 'Join communities', 'Attend webinars']
        },
        {
          title: 'Competitive Programming Basics',
          duration: '2-3 months (after programming basics)',
          description: 'Start with basic problem-solving on platforms like HackerRank, CodeChef, LeetCode (Easy problems).',
          resources: ['HackerRank', 'CodeChef', 'LeetCode Easy']
        },
        {
          title: 'Networking & Community',
          duration: 'Ongoing',
          description: 'Join groups, LinkedIn, and Twitter. Start building your professional network early.',
          resources: ['LinkedIn', 'Twitter/X', 'Tech communities']
        }
      ],
      keyActivities: [
        'Maintain 6.5+ CGPA (Use YouTube, Courses, Offline resources)',
        'Master one programming language (Python recommended for AI/ML)',
        'Figure out your domain interest',
        'Join tech groups and communities',
        'Start building LinkedIn and Twitter presence'
      ]
    },
    '2nd Year': {
      cgpa: '6.5+ CGPA',
      subtitle: 'Core Skills & Project Building',
      topics: [
        {
          title: 'Data Structures & Algorithms (DSA) ⭐⭐⭐',
          duration: '6-8 months',
          description: 'Master fundamental DSA concepts. This is crucial for placements and interviews.',
          resources: ['Love Babbar DSA', 'Apna College', 'LeetCode practice']
        },
        {
          title: 'Core CS Subjects',
          duration: 'Throughout academic year',
          description: 'DBMS, OS, Computer Networks, OOPs - Focus on concepts that appear in interviews.',
          resources: ['Gate Smashers', 'Knowledge Gate', 'College lectures']
        },
        {
          title: 'Domain Fundamentals',
          duration: '4-6 months',
          description: 'Deep dive into your chosen domain. Build strong fundamentals in your area of interest.',
          resources: ['Domain-specific courses', 'Documentation', 'Practice projects']
        },
        {
          title: 'Mini Projects',
          duration: '2-3 months per project',
          description: 'Build 2-3 mini projects to apply your learning. Focus on understanding rather than just completion.',
          resources: ['GitHub', 'Project ideas online', 'Peer collaboration']
        },
        {
          title: 'Use AI in Learning',
          duration: 'Ongoing',
          description: 'Leverage ChatGPT, Claude, and other AI tools to enhance your learning process.',
          resources: ['ChatGPT', 'Claude', 'GitHub Copilot']
        }
      ],
      keyActivities: [
        'Complete DSA fundamentals and solve 200+ problems',
        'Build 2-3 mini projects in your domain',
        'Understand core CS subjects deeply',
        'Participate in coding competitions regularly',
        'Use AI tools for faster learning'
      ]
    },
    '3rd Year': {
      cgpa: '7+ CGPA',
      subtitle: 'Advanced Skills & Complex Projects',
      topics: [
        {
          title: 'Advanced DSA (Medium-Hard)',
          duration: '6-8 months',
          description: 'Tackle medium to hard problems. Focus on optimization and advanced concepts.',
          resources: ['LeetCode Medium/Hard', 'Codeforces', 'InterviewBit']
        },
        {
          title: 'Complex Projects',
          duration: '3-4 months per project',
          description: 'Build 1-2 complex, production-ready projects. Deploy them and showcase on GitHub.',
          resources: ['GitHub', 'Vercel/Netlify', 'AWS/Azure']
        },
        {
          title: 'Core Subjects Mastery',
          duration: 'Throughout year',
          description: 'Revise and master all core CS subjects. Focus on interview-oriented topics.',
          resources: ['InterviewBit', 'GeeksforGeeks', 'Previous interview questions']
        },
        {
          title: 'Aptitude & Soft Skills',
          duration: '2-3 months',
          description: 'Prepare for aptitude tests and improve communication skills for interviews.',
          resources: ['IndiaBix', 'Communication courses', 'Mock interviews']
        }
      ],
      keyActivities: [
        'Solve 400+ DSA problems (total)',
        'Build 1-2 advanced projects with deployment',
        'Master all core CS subjects',
        'Practice aptitude and logical reasoning',
        'Develop soft skills and communication'
      ]
    },
    '4th Year': {
      cgpa: '7+ CGPA',
      subtitle: 'Placement Preparation & Opportunities',
      topics: [
        {
          title: 'Company-wise Preparation',
          duration: 'Ongoing',
          description: 'Research target companies. Solve their previous year questions. Understand their hiring patterns.',
          resources: ['Company career pages', 'GeeksforGeeks company prep', 'InterviewBit']
        },
        {
          title: 'Mock Interviews',
          duration: '2-3 months before placements',
          description: 'Practice mock interviews extensively. Get feedback and improve.',
          resources: ['Pramp', 'Peer practice', 'College placement cell']
        },
        {
          title: 'Competitive Programming (Maintain)',
          duration: 'Ongoing (2-3 hours/week)',
          description: 'Keep your problem-solving skills sharp with regular practice.',
          resources: ['LeetCode', 'Codeforces', 'CodeChef']
        },
        {
          title: 'Networking & Referrals',
          duration: 'Ongoing',
          description: 'Leverage your network for referrals. Connect with alumni and professionals.',
          resources: ['LinkedIn', 'Alumni networks', 'Company events']
        }
      ],
      keyActivities: [
        'Complete 600+ DSA problems (total)',
        'Practice 50+ mock interviews',
        'Get resume reviewed by seniors/professionals',
        'Apply through referrals whenever possible',
        'Stay calm and confident during placements'
      ]
    }
  };

  const resources = [
    {
      icon: <Code size={32} />,
      title: 'React',
      description: 'Learn React from scratch with ThapaTechnical',
      link: 'https://www.youtube.com/@ThapaTechnical'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'JavaScript',
      description: 'Master JavaScript fundamentals',
      link: 'https://youtu.be/pN6jk0uUrD8?si=qRgbac1JNSbCScuT'
    },
    {
      icon: <Brain size={32} />,
      title: 'Generative AI',
      description: 'Complete Generative AI course',
      link: 'https://youtu.be/d4yCWBGFCEs?si=SgmzinMP84TRZwxl'
    },
    {
      icon: <Award size={32} />,
      title: 'DSA - Love Babbar',
      description: 'Data Structures & Algorithms by Love Babbar',
      link: 'https://youtu.be/0TEvaAiqo8Y?si=oHmqW3BoOy--KdlY'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'DSA - Apna College',
      description: 'Data Structures & Algorithms by Apna College',
      link: 'https://youtu.be/-DzowlcaUmE?si=ozzvmHkbZiOH_NiH'
    },
    {
      icon: <Code size={32} />,
      title: 'Java & OOPs',
      description: 'Java, OOPs, and DSA by Kunal Kushwaha',
      link: 'https://youtu.be/46T2wD3IuhM?si=qHTXQc6G6lwUAhCr'
    },
    {
      icon: <Award size={32} />,
      title: 'Competitive Programming',
      description: 'Competitive Programming by Priyansh Agarwal',
      link: 'https://youtu.be/n-Xkbqcfi9w?si=HBXY5BQuMAG4XSlr'
    }
  ];

  const currentContent = yearContent[activeYear];

  return (
    <div className="roadmap-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="main-title">Student Roadmap - 4 Years</h1>
          <p className="author">by Pravesh Tiwari</p>
          <p className="subtitle">A Comprehensive 4-Year Journey from Foundation to Placement</p>
        </div>
      </header>

      {/* Year Tabs */}
      <nav className="tabs-nav">
        <div className="container">
          <div className="tabs">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`tab ${activeYear === year ? 'active' : ''}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Year Header */}
        <section className="year-header">
          <div className="year-header-content">
            <h2 className="year-title">{activeYear} - {currentContent.subtitle}</h2>
            <span className="cgpa-badge">{currentContent.cgpa}</span>
          </div>
          {currentContent.difficulty && (
            <p className="difficulty">{currentContent.difficulty}</p>
          )}
        </section>

        {/* Topics */}
        <section className="topics-section">
          <h3 className="section-title">Topics & Timeline</h3>
          <div className="topics-list">
            {currentContent.topics.map((topic, index) => (
              <div key={index} className="topic-item">
                <div className="topic-header">
                  <h4 className="topic-title">{topic.title}</h4>
                  <span className="topic-duration">{topic.duration}</span>
                </div>
                <p className="topic-description">{topic.description}</p>
                <div className="resources">
                  <span className="resources-label">Resources:</span>
                  {topic.resources.map((resource, idx) => (
                    <span key={idx} className="resource-tag">{resource}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Activities */}
        <section className="activities-section">
          <h3 className="section-title">Key Activities</h3>
          <div className="activities-list">
            {currentContent.keyActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <CheckCircle className="check-icon" size={24} />
                <p>{activity}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="resources-section">
          <h3 className="section-title">🎓 Free Learning Resources</h3>
          <p className="resources-subtitle">Learn everything for free from these recommended YouTube channels and courses</p>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <div className="resource-icon">{resource.icon}</div>
                <div className="resource-content">
                  <h4 className="resource-title">{resource.title}</h4>
                  <p className="resource-description">{resource.description}</p>
                  <div className="resource-link">
                    <Youtube size={16} />
                    <span>Watch on YouTube</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="tip-box">
            <p><strong>💡 Tip:</strong> Subscribe to these channels and turn on notifications to never miss new content!</p>
          </div>
        </section>

        {/* Important Reminder */}
        <section className="reminder-section">
          <h3 className="reminder-title">⚠️ Important Reminder</h3>
          <p>
            <strong>All four years:</strong> Take care of yourself. Stay away from drugs, bad influences, and toxic friends. 
            Your mental and physical health is paramount to your success.
          </p>
        </section>
        <br></br>
        <br></br>

        <section className="connect-me">
  <h3 className="section-title">📞 Connect with Me</h3>
  <div className="connect-grid">
    <a href="https://www.linkedin.com/in/pravesh-tiwari-6a262b30b/" target="_blank" rel="noopener noreferrer" className="connect-card">
      <div className="connect-icon">💼</div>
      <div className="connect-info">
        <h4>LinkedIn</h4>
        <p>Pravesh Tiwari</p>
      </div>
    </a>

    <a href="mailto:Pravesht252@gmail.com" className="connect-card">
      <div className="connect-icon">📧</div>
      <div className="connect-info">
        <h4>Email</h4>
        <p>Pravesht252@gmail.com</p>
      </div>
    </a>

    <a href="tel:+918319661649" className="connect-card">
      <div className="connect-icon">📱</div>
      <div className="connect-info">
        <h4>Mobile</h4>
        <p>+91 83196 61649</p>
      </div>
    </a>

    <a href="https://x.com/Pravesh08532165" target="_blank" rel="noopener noreferrer" className="connect-card">
      <div className="connect-icon">🐦</div>
      <div className="connect-info">
        <h4>Twitter</h4>
        <p>@Pravesh08532165</p>
      </div>
    </a>

    <a href="https://www.instagram.com/_i_pravesh/" target="_blank" rel="noopener noreferrer" className="connect-card">
      <div className="connect-icon">📸</div>
      <div className="connect-info">
        <h4>Instagram</h4>
        <p>@_i_pravesh</p>
      </div>
    </a>

    <a href="https://github.com/Pravesh52" target="_blank" rel="noopener noreferrer" className="connect-card">
      <div className="connect-icon">🐱</div>
      <div className="connect-info">
        <h4>Github</h4>
        <p>@Pravesh52</p>
      </div>
    </a>

  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Made with ❤️ by Pravesh Tiwari</p>
        </div>
      </footer>
    </div>
  );
}