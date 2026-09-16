 "use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  ExternalLink,
  FolderKanban,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  X
} from "lucide-react";

const projects = [
  { name: "S.S. Lootah Trading", url: "https://sslootahtrading.com/", type: "Corporate Website" },
  { name: "Grandeur UAE", url: "https://grandeuruae.ae/", type: "Corporate Website" },
  { name: "BM Brokers", url: "https://bmbrokers.ae/en", type: "Business Website" },
  { name: "GMS PLC", url: "https://www.gmsplc.com/", type: "Corporate Website" },
  { name: "Veneto Clinic", url: "https://veneto-clinic.com/", type: "Healthcare Website" },
  { name: "Med Boosting", url: "https://medboosting.com/", type: "Healthcare Website" },
  { name: "Alavon Contracting", url: "https://alavoncontracting.com/", type: "Corporate Website" },
  { name: "K2M Pro", url: "https://k2mpro.com/", type: "Business Website" },
  { name: "Evolve Tax", url: "https://evolvetax.co.uk/", type: "Professional Services" },
  { name: "Amarantica", url: "https://amarantica.com/", type: "Hospitality / Lifestyle" },
  { name: "Amarancho", url: "https://amarancho.com/", type: "Hospitality / Lifestyle" },
  { name: "West Asia Service", url: "https://westasiaservice.ae/", type: "Corporate Website" },
  { name: "West Asia PS", url: "https://westasiaps.ae/", type: "Corporate Website" },
  { name: "Tutor Bugs", url: "https://www.tutorbugs.com/", type: "Education Platform" },
  { name: "Greenstorm Energy", url: "https://greenstorm.energy/", type: "Energy Website" },
  { name: "Delight Engineering", url: "https://www.delightengineering.ae/", type: "Engineering Website" },
  { name: "Alpago Properties", url: "https://www.alpagoproperties.com/", type: "Real Estate Website" },
  { name: "The Tower Plaza Hotel", url: "https://www.thetowerplazahotel.com/", type: "Hospitality Website" }
];

const capabilities = [
  "Project planning & lifecycle management",
  "Agile, Waterfall & Hybrid delivery",
  "Stakeholder & client communication",
  "Team coordination & resource planning",
  "Risk, scope & timeline management",
  "UAT, QA coordination & deployment",
  "Requirements & project documentation",
  "Process improvement & reporting"
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function Portfolio() {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 9);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            UA<span>.</span>
          </a>

          <div className={`nav-links ${open ? "open" : ""}`}>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
            <a href="#work" onClick={() => setOpen(false)}>Work</a>
            <a href="#expertise" onClick={() => setOpen(false)}>Expertise</a>
            <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Let&apos;s talk <ArrowUpRight size={15}/></a>
          </div>

          <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <Reveal><p className="eyebrow">PROJECT TEAM LEAD / KARACHI</p></Reveal>
            <Reveal><h1>I turn complex projects into <em>clear delivery.</em></h1></Reveal>
            <Reveal><p className="hero-text">
              I&apos;m Usman Ahmed — a project management professional working across digital products,
              teams, clients and delivery from initiation through deployment.
            </p></Reveal>
            <Reveal>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">View selected work <ArrowDownRight size={17}/></a>
                <a className="text-link" href="mailto:usmanahmedjafri2304@gmail.com">Get in touch <ArrowUpRight size={16}/></a>
              </div>
            </Reveal>
          </div>

          <Reveal className="portrait-wrap">
            <div className="portrait-frame">
              <Image src="/usman-ahmed.jpg" alt="Usman Ahmed" fill priority sizes="(max-width: 900px) 80vw, 43vw" className="portrait"/>
              <div className="portrait-label"><span>01</span><span>USMAN AHMED</span></div>
            </div>
          </Reveal>
        </div>

        <div className="hero-bottom container">
          <div><span>02+</span><small>Years progressive experience</small></div>
          <div><span>50+</span><small>Projects delivered</small></div>
          <div><span>02</span><small>Project management roles</small></div>
          <div><span>02</span><small>Computer science + PM degrees</small></div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container two-col">
          <Reveal><p className="section-number">01 / ABOUT</p></Reveal>
          <Reveal>
            <div>
              <h2>Project management with a <em>technical foundation.</em></h2>
              <p className="large-copy">
                My background combines Computer Science with a Master&apos;s in Project Management.
                That gives me a practical understanding of both the product and the process behind digital delivery.
              </p>
              <p className="body-copy">
                I work with cross-functional teams, clients and stakeholders to keep requirements,
                timelines, risks, testing and delivery moving in the same direction.
              </p>
              <div className="education-row">
                <div><b>MS</b><span>Project Management<br/>Bahria University · 2025</span></div>
                <div><b>BS</b><span>Computer Science<br/>MAJU · 2023</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="section experience">
        <div className="container">
          <div className="section-head">
            <Reveal><p className="section-number">02 / EXPERIENCE</p></Reveal>
            <Reveal><p className="section-note">Digital Graphiks · Apr 2024 — Present</p></Reveal>
          </div>

          <div className="timeline">
            <Reveal><article className="timeline-item current">
              <div className="timeline-date">SEP 2025 — PRESENT</div>
              <div><h3>Project Team Lead</h3><p>Leading cross-functional teams across project planning, execution, monitoring, UAT and deployment. Managing stakeholder communication, risks, dependencies and delivery against scope, timelines and quality expectations.</p></div>
              <span className="role-index">03</span>
            </article></Reveal>

            <Reveal><article className="timeline-item">
              <div className="timeline-date">APR 2025 — AUG 2025</div>
              <div><h3>Project Coordinator</h3><p>Coordinated project activities, scheduling, resource allocation, client reviews, documentation, sprint tracking and backlog management while keeping internal teams aligned with client requirements.</p></div>
              <span className="role-index">02</span>
            </article></Reveal>

            <Reveal><article className="timeline-item">
              <div className="timeline-date">APR 2024 — MAR 2025</div>
              <div><h3>Junior Project Coordinator</h3><p>Supported requirements gathering, project planning, documentation, task tracking, UAT and coordination between development, QA and business teams.</p></div>
              <span className="role-index">01</span>
            </article></Reveal>
          </div>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="container">
          <div className="section-head work-head">
            <Reveal><div><p className="section-number">03 / SELECTED WORK</p><h2>Projects I&apos;ve <em>helped deliver.</em></h2></div></Reveal>
            <Reveal><p className="section-note">A selection from 50+ delivered projects.</p></Reveal>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project, i) => (
              <Reveal key={project.name}>
                <a className="project-card" href={project.url} target="_blank" rel="noreferrer">
                  <div className="project-top"><span>{String(i + 1).padStart(2, "0")}</span><ExternalLink size={17}/></div>
                  <div className="project-icon"><FolderKanban size={25}/></div>
                  <div className="project-bottom">
                    <p>{project.type}</p>
                    <h3>{project.name}</h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="center-action">
            <button className="button button-outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show less" : "View all selected projects"} <ChevronRight size={17}/>
            </button>
          </div>
        </div>
      </section>

      <section id="expertise" className="section expertise">
        <div className="container two-col">
          <Reveal><p className="section-number">04 / EXPERTISE</p></Reveal>
          <Reveal>
            <div>
              <h2>How I <em>work.</em></h2>
              <div className="capability-list">
                {capabilities.map((item, i) => (
                  <div key={item}><span>{String(i + 1).padStart(2, "0")}</span><p>{item}</p><Check size={16}/></div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section credentials">
        <div className="container credentials-grid">
          <Reveal><div><p className="section-number">05 / CERTIFICATIONS</p><h2>Built on <em>continuous learning.</em></h2></div></Reveal>
          <Reveal><div className="cert-list">
            <p>Foundation of Project Management <span>Coursera · 2023</span></p>
            <p>Agile Project Management with Jira Cloud <span>PMI / LinkedIn Learning · 2023</span></p>
            <p>Project Initiation: Starting a Successful Project <span>Coursera · 2024</span></p>
            <p>Hybrid Project Management: Agile & Predictive Methods <span>LinkedIn Learning · 2025</span></p>
          </div></Reveal>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-inner">
          <Reveal><p className="section-number">06 / CONTACT</p></Reveal>
          <Reveal><h2>Have a project<br/>in <em>mind?</em></h2></Reveal>
          <Reveal><a className="contact-email" href="mailto:usmanahmedjafri2304@gmail.com">usmanahmedjafri2304@gmail.com <ArrowUpRight/></a></Reveal>
          <Reveal><div className="contact-meta"><span><MapPin size={15}/> Karachi, Pakistan</span><span><BriefcaseBusiness size={15}/> Project Team Lead</span></div></Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Usman Ahmed</span>
          <span>Project management · Digital delivery</span>
          <a href="#top">Back to top <ArrowUpRight size={14}/></a>
        </div>
      </footer>
    </main>
  );
}