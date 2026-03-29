import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import CertModal from '../components/CertModal';
import PdfModal from '../components/PdfModal';

import avatarImg from '/image/avatar.jpg';
import avatar2Img from '/image/avatar2.jpg';
import locationIcon from '/image/location.png';
import emailIcon from '/image/email.png';
import telephoneIcon from '/image/telephone.png';

const skills = [
  {
    category: 'Software Development',
    icon: 'code',
    items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'React', 'NextJS', 'NestJS', 'Flask', 'TailwindCSS', 'HTML5', 'CSS3', 'Git', 'Linux'],
  },
  {
    category: 'AI & Machine Learning',
    icon: 'psychology',
    items: ['TensorFlow', 'Scikit-learn', 'LangChain', 'OpenAI', 'LLama', 'Sentence Transformers', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    category: 'Cloud & Databases',
    icon: 'cloud',
    items: ['AWS Amplify', 'DynamoDB', 'S3', 'Lambda', 'Bedrock', 'EC2', 'Docker', 'PostgreSQL', 'MySQL', 'MongoDB', 'ChromaDB'],
  },
  {
    category: 'Testing & Tools',
    icon: 'build',
    items: ['Jest', 'PyTest', 'Postman', 'Pydantic', 'Agile / Scrum', 'Trello'],
  },
];

const experience = [
  {
    role: 'AI Engineer',
    company: 'AI Accelerator Hub — Algonquin College',
    location: 'Ottawa, Ontario',
    period: 'Jan 2026 – Apr 2026',
    highlights: [
      'Developed PDF report generator with Python libraries and YAML-based styling.',
      'Built CloudWatch logging with structured JSON logs, metrics, and error tracking.',
      'Implemented S3 storage manager with encryption, versioning, and secure access.',
      'Used AWS services: Amplify, DynamoDB, Lambda, and S3 for workflows.',
      'Integrated logging and storage modules across team projects following security best practices.',
    ],
  },
  {
    role: 'Full-Stack Web Developer',
    company: 'iTravel Holidays',
    location: 'United Kingdom (Remote)',
    period: 'Apr 2023 – Aug 2025',
    highlights: [
      'Developed full-stack web applications using modern component-based architecture.',
      'Implemented REST API integrations reducing data retrieval time and improving responsiveness.',
      'Integrated CRM module and deployed dynamic CMS for automated document generation.',
      'Boosted search impressions from 2,000 to 200,000 by resolving critical sitemap issues.',
      'Corrected over 1 million hotel listings, improving data accuracy and search results.',
    ],
  },
];

const education = [
  {
    degree: 'Postgraduate Certificate in AI Software Development',
    school: 'Algonquin College, Ottawa, Ontario',
    period: 'Sep 2025 – Present',
  },
  {
    degree: 'BSc Mathematics & Computer Science',
    school: 'Technical University of Mombasa, Kenya',
    period: 'Sep 2018 – Jul 2023',
  },
];

const projects = [
  {
    title: 'AI-Powered Interview Evaluator',
    tags: ['Python', 'LangChain', 'ChromaDB', 'Sentence Transformers'],
    description: 'End-to-end LLM pipeline for evaluating technical interview transcripts using multi-model scoring with semantic embeddings and keyword matching.',
  },
  {
    title: 'AWS PDF Report Generator',
    tags: ['Python', 'AWS Lambda', 'S3', 'YAML'],
    description: 'Serverless PDF generation service with YAML-based styling, CloudWatch logging, and S3 storage with encryption and versioning.',
  },
  {
    title: 'iTravel Holidays Platform',
    tags: ['React', 'PHP', 'REST API', 'CMS'],
    description: 'Full-stack travel platform with CRM integration, dynamic CMS, and SEO optimization that boosted impressions from 2K to 200K.',
  },
  {
    title: 'CloudWatch Logging Module',
    tags: ['Python', 'AWS CloudWatch', 'JSON'],
    description: 'Structured logging system with JSON logs, metrics tracking, and error monitoring integrated across multiple team projects.',
  },
  {
    title: 'Portfolio Website',
    tags: ['React', 'Vite', 'SCSS'],
    description: 'This responsive portfolio site built with React, Vite, and SCSS featuring glassmorphism design and Formspree contact integration.',
  },
  {
    title: 'Hotel Data Pipeline',
    tags: ['Python', 'PostgreSQL', 'Data Processing'],
    description: 'Data correction pipeline that processed and fixed over 1 million hotel listings, improving search accuracy and business decisions.',
  },
];

const certifications = [
  { name: 'Amazon Bedrock AgentCore', issuer: 'AWS', icon: 'cloud', file: '/certificates/Amazon Bedrock AgentCore.pdf' },
  { name: 'Amazon SageMaker AI', issuer: 'AWS', icon: 'psychology', file: '/certificates/Amazon SageMaker AI.pdf' },
  { name: 'SageMaker JumpStart Foundations', issuer: 'AWS', icon: 'psychology', file: '/certificates/Amazon SageMaker Jumpstart Foundations.pdf' },
  { name: 'AWS Lambda Foundations', issuer: 'AWS', icon: 'cloud', file: '/certificates/AWS Lambda Foundations.pdf' },
  { name: 'Agentic AI Essentials', issuer: 'AWS Partner', icon: 'smart_toy', file: '/certificates/AWS Partner - Agentic AI Essentials.pdf' },
  { name: 'Securing Generative AI on AWS', issuer: 'AWS Security', icon: 'security', file: '/certificates/AWS Security - Securing Generative AI on AWS.pdf' },
  { name: 'Introduction to Agentic AI on AWS', issuer: 'AWS', icon: 'smart_toy', file: '/certificates/Introduction to Agentic AI on AWS.pdf' },
  { name: 'Introduction to Amazon EC2', issuer: 'AWS', icon: 'cloud', file: '/certificates/Introduction to Amazon EC2.pdf' },
  { name: 'Introduction to Generative AI', issuer: 'AWS', icon: 'psychology', file: '/certificates/Introduction to Generative.pdf' },
  { name: 'Getting into the Serverless Mindset', issuer: 'AWS', icon: 'cloud', file: '/certificates/Getting into the Serverless Mindset.pdf' },
  { name: 'Security Groups & NACLs', issuer: 'AWS', icon: 'security', file: '/certificates/Differences Between Security Groups and NACLs.pdf' },
  { name: 'Protecting Instances with Security Groups', issuer: 'AWS', icon: 'security', file: '/certificates/Protecting Your Instance withSecurity Groups.pdf' },
  { name: 'Security, Compliance & Governance for AI', issuer: 'AWS', icon: 'security', file: '/certificates/Security, Compliance, and Governace for AI Solutions.pdf' },
  { name: 'AWS Cloud Technical Essentials', issuer: 'Coursera', icon: 'cloud', file: '/certificates/Coursera VTPFRNBB85CP.pdf' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', icon: 'psychology', file: '/certificates/1755864228053.jpg' },
  { name: 'Cyber Security Awareness', issuer: 'Udemy', icon: 'security', file: '/certificates/UC-6c47174f-6761-4957-98ec-20fb58c092a1.pdf' },
  { name: 'Introduction to Kiro Powers', issuer: 'AWS', icon: 'build', file: '/certificates/Introduction to Kiro powers.pdf' },
  { name: 'Kiro Getting Started', issuer: 'AWS', icon: 'build', file: '/certificates/Kiro Getting Started.pdf' },
  { name: 'Spec-Driven Development with Kiro', issuer: 'AWS', icon: 'build', file: '/certificates/Spec-Driven Development with Kiro.pdf' },
];

export default function HomePage() {
  const [formStatus, setFormStatus] = useState('idle');
  const [activeCert, setActiveCert] = useState(null);
  const [showCV, setShowCV] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xpqopgag', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormStatus('sent');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-image">
          <img src={avatarImg} alt="Jane Odhiambo" className="avatar" />
        </div>
        <div className="hero-content">
          <span className="hero-tag">AI Engineer & Full-stack Developer</span>
          <h1>Hello, I'm Jane Odhiambo</h1>
          <p>
            AI Engineering student and full-stack developer with 3+ years of experience
            building intelligent applications and scalable web solutions. Based in Ottawa, Canada.
          </p>
          <div className="hero-actions">
            <a href="mailto:janejunell56@gmail.com">
              <button type="button" className="btn-primary">Say Hello!</button>
            </a>
            <a href="#portfolio">
              <button type="button" className="btn-outline">View Work</button>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <i className="material-icons stat-icon">work_history</i>
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <i className="material-icons stat-icon">rocket_launch</i>
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <i className="material-icons stat-icon">database</i>
              <span className="stat-number">1M+</span>
              <span className="stat-label">Records Processed</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-card">
          <div className="about-image">
            <img src={avatar2Img} alt="Jane Odhiambo" className="about-avatar" />
            <SocialLinks id="about-socials" />
          </div>
          <div className="about-content">
            <span className="section-tag">About Me</span>
            <h2>AI Engineer & Full-stack Developer</h2>
            <p>
              I'm an AI Engineering student at Algonquin College with over 3 years of experience
              in AI and software development. I specialize in building intelligent systems using
              Python, LangChain, and AWS, alongside full-stack web applications with React, NextJS,
              and Node.
            </p>
            <p>
              I'm passionate about leveraging AI and emerging technologies to develop impactful
              solutions. From boosting search impressions by 100x to building LLM-powered evaluation
              systems, I thrive on solving complex problems at scale.
            </p>
            <div className="about-actions">
              <a href="#experience">
                <button type="button" className="btn-primary">My Experience</button>
              </a>
              <button type="button" className="btn-outline" onClick={() => setShowCV(true)}>
                <i className="material-icons">description</i>
                View CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <span className="section-tag">What I Work With</span>
          <h2>Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <div className="skill-group-header">
                <i className="material-icons">{group.icon}</i>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience-section">
        <div className="section-header">
          <span className="section-tag">Career</span>
          <h2>Work Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.role + job.company}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <span className="timeline-company">{job.company}</span>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <span className="timeline-location">{job.location}</span>
                <ul>
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education-section">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2>Academic Background</h2>
        </div>
        <div className="education-grid">
          {education.map((edu) => (
            <div className="education-card" key={edu.degree}>
              <i className="material-icons edu-icon">school</i>
              <div>
                <h3>{edu.degree}</h3>
                <span className="edu-school">{edu.school}</span>
                <span className="edu-period">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio-section">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2>Portfolio</h2>
          <p>Key projects showcasing my skills in AI, cloud, and full-stack development.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="certs-section">
        <div className="section-header">
          <span className="section-tag">Credentials</span>
          <h2>Certifications</h2>
          <p>{certifications.length} verified certificates in cloud, AI, security, and developer tools.</p>
        </div>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <button
              className="cert-card"
              key={cert.name}
              type="button"
              onClick={() => setActiveCert(cert)}
            >
              <i className="material-icons cert-icon">{cert.icon}</i>
              <div>
                <h3>{cert.name}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
              <i className="material-icons cert-view">visibility</i>
            </button>
          ))}
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="volunteer-section">
        <div className="section-header">
          <span className="section-tag">Giving Back</span>
          <h2>Volunteer Experience</h2>
        </div>
        <div className="volunteer-card">
          <div className="volunteer-header">
            <div>
              <h3>Frontend Mentor</h3>
              <span className="timeline-company">She Code Africa</span>
            </div>
            <span className="timeline-period">Aug 2025 – Present</span>
          </div>
          <ul>
            <li>Mentoring aspiring frontend developers on building responsive and accessible web applications.</li>
            <li>Conducting CV reviews and career development discussions to prepare mentees for tech opportunities.</li>
            <li>Promoting inclusivity by supporting women in technology through active community engagement.</li>
            <li>Strengthening leadership and communication skills while contributing to the growth of emerging developers.</li>
          </ul>
        </div>
      </section>

      {/* Collaborate */}
      <section id="collaborate" className="collab-section">
        <div className="collab-content">
          <span className="section-tag dark">Let's Work Together</span>
          <h2>Have a project in mind?</h2>
          <p>I'd love to hear about it. Let's discuss how we can bring your ideas to life.</p>
          <a href="#contact">
            <button type="button" className="btn-primary">Get In Touch &rarr;</button>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-layout">
          <div className="contact-info-side">
            <span className="section-tag">Get In Touch</span>
            <h2>Contact Me</h2>
            <p>Have a question or want to work together? Send me a message and I'll get back to you.</p>
            <div className="contact-details">
              <div className="contact-card">
                <img src={locationIcon} alt="" />
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Ottawa, Ontario, Canada</span>
                </div>
              </div>
              <div className="contact-card">
                <img src={emailIcon} alt="" />
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">janejunell56@gmail.com</span>
                </div>
              </div>
              <div className="contact-card">
                <img src={telephoneIcon} alt="" />
                <div>
                  <span className="contact-label">Call</span>
                  <span className="contact-value">+1 (343) 558-2138</span>
                </div>
              </div>
            </div>
          </div>

          {formStatus === 'sent' ? (
            <div className="contact-form form-success">
              <i className="material-icons success-icon">check_circle</i>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
              <button
                type="button"
                className="btn-outline"
                onClick={() => setFormStatus('idle')}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message..." required />
              </div>
              <button type="submit" className="btn-primary" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                <i className="material-icons">{formStatus === 'sending' ? 'hourglass_empty' : 'send'}</i>
              </button>
              {formStatus === 'error' && (
                <p className="form-error">Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {activeCert && <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />}
      {showCV && <PdfModal title="Jane Odhiambo — CV" file="/doc/Jane Odhiambo CV.pdf" onClose={() => setShowCV(false)} />}

      <Footer />
    </>
  );
}
