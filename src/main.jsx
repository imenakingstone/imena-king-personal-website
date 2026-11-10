import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Github,
  Instagram, Youtube, Mail, MapPin, Code2, Camera, Newspaper,
  Coffee, ShoppingBag, Sparkles, Play, ExternalLink
} from 'lucide-react';
import './styles.css';
import MediaKit from './MediaKit.jsx';

const projects = [
  { number: '01', title: 'Rwanda Today', type: 'Digital publishing platform', description: 'A digital newspaper concept focused on bringing clear, accessible news and stories to readers in Rwanda.', icon: Newspaper, tags: ['React', 'Node.js', 'MongoDB'], status: 'In development' },
  { number: '02', title: 'Legacy Coffee', type: 'Business website concept', description: 'A culturally rooted coffee experience for showcasing Rwandan coffee, products and customer orders.', icon: Coffee, tags: ['React', 'E-commerce', 'Design'], status: 'Planning' },
  { number: '03', title: 'Mechanical Store', type: 'Learning project', description: 'A practical shopping experience for browsing vehicle spare parts and understanding online ordering flows.', icon: ShoppingBag, tags: ['React Hooks', 'CSS', 'JavaScript'], status: 'Learning project' },
  { number: '04', title: 'Digital Media & Design', type: 'Editorial and creator work', description: 'Visual storytelling, entertainment coverage and digital content built around the Rwandan creative scene.', icon: Camera, tags: ['Storytelling', 'Social media', 'Design'], status: 'Ongoing' }
];

const skills = ['HTML & CSS', 'JavaScript', 'React', 'React Hooks', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Git & GitHub', 'Responsive design'];

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Journey', '#journey'], ['Media kit', '#media'], ['Contact', '#contact']];

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Imena King home"><span className="brand-mark">IK</span><span>IMENA KING<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-pulse" /> BASED IN KIGALI, RWANDA <span className="eyebrow-line" /></div>
            <h1>Ideas into<br /><span className="gold-text">digital reality.</span></h1>
            <p className="hero-intro">I'm Imena King — a curious builder, digital creator and storyteller exploring the space where technology meets creativity.</p>
            <div className="hero-actions"><a className="button button-gold" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#about">More about me <ArrowDownRight size={17} /></a></div>
            <div className="hero-meta"><span>WEB DEVELOPMENT</span><i /> <span>DIGITAL MEDIA</span><i /> <span>CREATIVE IDEAS</span></div>
          </div>
          <div className="hero-art">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-card">
              <div className="art-card-top"><span>PERSONAL SPACE / 001</span><Sparkles size={16} /></div>
              <div className="monogram">IK<span>.</span></div>
              <div className="art-card-bottom"><span>IMENA KING</span><span>KGL · RW</span></div>
            </div>
            <div className="floating-note note-top"><Code2 size={16} /><span>Building with purpose</span></div>
            <div className="floating-note note-bottom"><span className="note-dot" /> Always learning. Always creating.</div>
            <span className="hero-index">01 — INTRODUCTION</span>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
        </section>

        <section className="intro-strip"><div className="section-wrap strip-inner"><span>CURIOUS BY NATURE</span><span className="strip-star">✳</span><span>BUILT THROUGH PRACTICE</span><span className="strip-star">✳</span><span>ROOTED IN RWANDA</span><span className="strip-star">✳</span><span>OPEN TO WHAT'S NEXT</span></div></section>

        <section className="content-section section-wrap" id="about">
          <Reveal><div className="section-kicker">01 / A LITTLE ABOUT ME</div></Reveal>
          <div className="about-grid">
            <Reveal className="about-heading"><h2>Curiosity is<br />my <span className="gold-text">starting point.</span></h2><div className="big-index">01</div></Reveal>
            <Reveal className="about-body" delay={0.12}><p className="lead">I enjoy learning how ideas become useful things — from a simple interface to a complete digital platform.</p><p>My interests move between web development, digital media and creative communication. I learn by building, experimenting, asking questions and improving one project at a time.</p><p>I'm based in Kigali, Rwanda, and I'm interested in using technology and storytelling to create work that connects with people.</p><a className="inline-link" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a></Reveal>
          </div>
        </section>

        <section className="projects-section" id="projects"><div className="section-wrap">
          <Reveal><div className="section-kicker">02 / SELECTED WORK & IDEAS</div><div className="section-heading-row"><h2>Things I'm<br /><span className="gold-text">building.</span></h2><p>A selection of projects, experiments and ideas. Some are in development; others are part of my learning journey.</p></div></Reveal>
          <div className="project-list">{projects.map((project, index) => { const Icon = project.icon; return <Reveal key={project.number} delay={index * 0.06}><article className="project-row"><div className="project-number">{project.number}</div><div className="project-icon"><Icon size={22} strokeWidth={1.5} /></div><div className="project-main"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-side"><span className="project-status">{project.status}</span><ArrowUpRight size={21} /></div></article></Reveal>; })}</div>
        </div></section>

        <section className="content-section section-wrap" id="skills">
          <Reveal><div className="section-kicker">03 / TOOLS & TECHNOLOGIES</div><div className="section-heading-row skills-heading"><h2>Learning by<br /><span className="gold-text">doing.</span></h2><p>Tools and technologies I'm exploring through hands-on practice. This list reflects my learning journey, not a claim of professional certification.</p></div></Reveal>
          <div className="skills-grid">{skills.map((skill, index) => <Reveal key={skill} delay={index * 0.025}><div className="skill-item"><span className="skill-index">0{index + 1}</span><span>{skill}</span><ArrowUpRight size={15} /></div></Reveal>)}</div>
        </section>

        <section className="journey-section" id="journey"><div className="section-wrap journey-grid"><Reveal><div className="section-kicker">04 / THE JOURNEY</div><h2>Progress over<br /><span className="gold-text">perfection.</span></h2><p className="journey-intro">A work in progress, shaped by curiosity, consistency and the willingness to learn something new.</p></Reveal><div className="timeline"><Reveal><div className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">THE FOUNDATION</span><h3>Learning the building blocks</h3><p>Exploring the fundamentals of the web, programming logic and how websites are put together.</p></div></Reveal><Reveal delay={0.1}><div className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">BUILDING THROUGH PRACTICE</span><h3>Turning lessons into projects</h3><p>Practising with React, databases and backend concepts by working on practical project ideas.</p></div></Reveal><Reveal delay={0.2}><div className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">WHAT COMES NEXT</span><h3>Creating useful digital experiences</h3><p>Developing stronger products, improving my craft and connecting technology with creative work.</p></div></Reveal></div></div></section>

        <section className="content-section section-wrap interests-section"><Reveal><div className="section-kicker">05 / BEYOND THE SCREEN</div><h2>More than<br /><span className="gold-text">just code.</span></h2><div className="interest-cards"><div><Camera /><h3>Digital storytelling</h3><p>Finding engaging ways to share stories, ideas and moments.</p></div><div><Newspaper /><h3>Media & culture</h3><p>Following the people, creativity and conversations shaping Rwanda.</p></div><div><Sparkles /><h3>Creative technology</h3><p>Exploring tools that make it easier to bring ideas to life.</p></div></div></Reveal></section>

        <MediaKit />

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><Reveal><div className="section-kicker">06 / START A CONVERSATION</div><h2>Have something<br />in <span className="gold-text">mind?</span></h2><p>I'm open to conversations, ideas, collaborations and opportunities to learn and build.</p><a className="button button-gold" href="mailto:hello@imenaking.com">Get in touch <ArrowUpRight size={17} /></a><span className="contact-note">Replace this placeholder email with your preferred contact address before launch.</span></Reveal></div></section>
      </main>

      <footer className="footer"><div className="section-wrap footer-top"><a className="brand" href="#home"><span className="brand-mark">IK</span><span>IMENA KING<span className="brand-dot">.</span></span></a><span className="footer-location"><MapPin size={14} /> KIGALI, RWANDA</span><div className="social-links"><a href="https://github.com/imenakingstone" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube /></a><a href="mailto:hello@imenaking.com" aria-label="Email"><Mail /></a></div></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} IMENA KING. MADE WITH CURIOSITY.</span><a href="#home">BACK TO TOP ↑</a><span>DESIGNED TO KEEP EVOLVING.</span></div></footer>
    </div>
  );
}

if (window.location.pathname.startsWith('/admin')) {
  import('./admin.jsx');
} else {
  createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
}
