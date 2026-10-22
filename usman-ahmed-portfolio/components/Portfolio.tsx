"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  ExternalLink,
  FileCheck2,
  FolderKanban,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Sparkles,
  Users,
  Workflow,
  X
} from "lucide-react";

// Featured Case Studies directly from CV with Real Logos
interface CaseStudy {
  id: string;
  name: string;
  title: string;
  url: string;
  clientType: string;
  role: string;
  team: string;
  logo: string;
  fallbackLetter: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
  highlights?: string[];
}

const featuredProjects: CaseStudy[] = [
  {
    id: "gms",
    name: "GMS PLC",
    title: "Corporate Website Redesign, Custom CMS & Career Portal",
    url: "https://www.gmsplc.com/",
    clientType: "Publicly Listed Enterprise",
    role: "Project Manager (Project Team Lead)",
    team: "10 members (Dev, Design, QA)",
    logo: "/logos/gms.png",
    fallbackLetter: "GMS",
    bullets: [
      "Led complete website redesign and development, from initial requirement gathering to live deployment.",
      "Delivered a user-friendly custom CMS so the client's internal team can manage and publish content independently.",
      "Engineered two-way LinkedIn integration and an interactive career portal connected to LinkedIn.",
      "Managed requirements, resource allocation, sprint timelines, and scope creep; ran UAT using Agile methodology."
    ],
    metrics: [
      { label: "Investor Inquiries", value: "+64%" },
      { label: "Session Duration", value: "+52%" },
      { label: "Conversions", value: "+39%" }
    ]
  },
  {
    id: "sslootah",
    name: "S.S. Lootah Trading",
    title: "UAE E-Commerce Platform with NetSuite ERP Integration",
    url: "https://sslootahtrading.com/",
    clientType: "UAE-Based Trading Conglomerate",
    role: "Project Manager (Project Team Lead)",
    team: "12 members (Dev, Design, QA)",
    logo: "/logos/sslootah.png",
    fallbackLetter: "SSL",
    bullets: [
      "Led end-to-end delivery of a comprehensive, high-scale e-commerce platform.",
      "Delivered runtime NetSuite integration that automatically syncs products, prices, and stock levels in real time.",
      "Built a custom admin panel controlling all other store operations, order pipelines, and inventory workflows.",
      "Coordinated development, QA, and client stakeholders; managed rigorous UAT before launch."
    ],
    highlights: ["Runtime NetSuite Sync", "Custom Operations Console", "Zero-Downtime Go-Live"]
  },
  {
    id: "securitypact",
    name: "Security Pact",
    title: "Website Redesign & Internal PM / HR Business Suite",
    url: "https://securitypact.net/",
    clientType: "Cybersecurity & Technology Firm",
    role: "Project Manager (Project Team Lead)",
    team: "15 members (Dev, Design, QA)",
    logo: "/logos/securitypact.png",
    fallbackLetter: "SP",
    bullets: [
      "Led complete corporate website redesign and web platform development.",
      "Delivered an internal business solution with a Project Management module and an HR module built around client workflows.",
      "Managed requirement analysis, workflow mapping, cross-team coordination, and UAT across engineering and operations."
    ],
    highlights: ["Custom PM Module", "HR Workflow Automation", "Cross-Team Coordination"]
  },
  {
    id: "tutorbugs",
    name: "TutorBugs",
    title: "Learning Management System (LMS) with Video Infrastructure",
    url: "https://www.tutorbugs.com/",
    clientType: "EdTech & Online Tutoring",
    role: "Project Manager (Project Team Lead)",
    team: "8 members (Dev, Design, QA)",
    logo: "/logos/tutorbugs.png",
    fallbackLetter: "TB",
    bullets: [
      "Delivered a complete LMS platform for online tutoring, scheduling, and student cohort management.",
      "Integrated Zoom API for live tutoring sessions and automated call recording.",
      "Integrated Vimeo video pipeline so recordings are fetched and played back smoothly inside the student portal.",
      "Managed scope, sprint milestones, cross-browser compatibility, and final UAT."
    ],
    highlights: ["Zoom Live Session API", "Automated Vimeo Playback", "End-to-End LMS"]
  },
  {
    id: "alpago",
    name: "Alpago Properties",
    title: "Ultra-Luxury Real Estate Web Experience with Custom CMS",
    url: "https://www.alpagoproperties.com/",
    clientType: "Ultra-Luxury Real Estate Developer",
    role: "Team Lead",
    team: "8 members (Dev, Design, QA)",
    logo: "/logos/alpago.png",
    fallbackLetter: "AP",
    bullets: [
      "Led the team delivering a custom-developed luxury real estate website with high-performance animations and CMS.",
      "Built a property management feature so the client can add, edit, and publish premier listings independently.",
      "Tracked tasks and deadlines, coordinated QA regression testing, and supported UAT through to public launch."
    ],
    metrics: [
      { label: "Faster Navigation", value: "80%" },
      { label: "Higher Engagement", value: "+40%" },
      { label: "Daily Property Views", value: "50+" }
    ]
  },
  {
    id: "grandeur",
    name: "Grandeur UAE",
    title: "Interior Furniture E-Commerce with Inventory Management",
    url: "https://grandeuruae.ae/",
    clientType: "Interior Furniture & Luxury Decor",
    role: "Project Coordinator",
    team: "9 members",
    logo: "/logos/grandeur.png",
    fallbackLetter: "GD",
    bullets: [
      "Coordinated delivery of a complete e-commerce platform with built-in multi-warehouse inventory management.",
      "Delivered stock tracking and product management in one unified administrative control panel.",
      "Handled coordination between development, QA, and client stakeholders, and supported UAT."
    ],
    highlights: ["Stock Synchronization", "Unified Admin Panel", "E-Commerce Checkout"]
  }
];

// Additional Delivered Projects
interface CompactProject {
  name: string;
  url: string;
  category: "Corporate" | "E-Commerce" | "Healthcare" | "Real Estate" | "Hospitality" | "Energy" | "Engineering";
  logo: string;
  fallback: string;
}

const additionalProjects: CompactProject[] = [
  { name: "Mayas Brand Studio", url: "https://mayasbrandstudio.com/", category: "E-Commerce", logo: "/logos/mayas.png", fallback: "MB" },
  { name: "Kaane Tobacco", url: "https://www.kaanetobacco.com/", category: "Corporate", logo: "/logos/kaane.png", fallback: "KT" },
  { name: "Ora Tobacco", url: "https://www.oratobacco.com/", category: "Corporate", logo: "/logos/ora.jpg", fallback: "OT" },
  { name: "Technosteel Construction UAE", url: "https://technosteelconstruction-uae.com/", category: "Engineering", logo: "/logos/technosteel.png", fallback: "TC" },
  { name: "Fast Marine Boat", url: "https://fastmarineboat.com/", category: "Corporate", logo: "/logos/fastmarine.png", fallback: "FM" },
  { name: "Yaqn Legal & Advisory (KSA)", url: "https://yaqn.sa/", category: "Corporate", logo: "/logos/yaqn.png", fallback: "YQ" },
  { name: "AWM Logistics & Warehousing", url: "https://awm.ae/", category: "Corporate", logo: "/logos/awm.png", fallback: "AW" },
  { name: "Al Taiera Group", url: "https://altaieragroup.com/", category: "Corporate", logo: "/logos/altaiera.jpg", fallback: "AT" },
  { name: "Setco Bio", url: "https://setcobio.com/", category: "Healthcare", logo: "/logos/setcobio.png", fallback: "SB" },
  { name: "BM Brokers", url: "https://bmbrokers.ae/en", category: "Corporate", logo: "/logos/bmbrokers.svg", fallback: "BM" },
  { name: "Veneto Clinic", url: "https://veneto-clinic.com/", category: "Healthcare", logo: "/logos/veneto.png", fallback: "VC" },
  { name: "Med Boosting", url: "https://medboosting.com/", category: "Healthcare", logo: "/logos/medboosting.png", fallback: "MB" },
  { name: "The Tower Plaza Hotel", url: "https://thetowerplazahotel.com/", category: "Hospitality", logo: "/logos/thetowerplaza.png", fallback: "TP" },
  { name: "Evolve Tax UK", url: "https://evolvetax.co.uk/", category: "Corporate", logo: "/logos/evolvetax.png", fallback: "ET" },
  { name: "Greenstorm Energy", url: "https://greenstorm.energy/", category: "Energy", logo: "/logos/greenstorm.png", fallback: "GE" },
  { name: "Amarantica", url: "https://amarantica.com/", category: "Hospitality", logo: "/logos/amarantica.png", fallback: "AM" },
  { name: "Amarancho", url: "https://amarancho.com/", category: "Hospitality", logo: "/logos/amarancho.png", fallback: "AR" },
  { name: "Delight Engineering", url: "https://delightengineering.ae/", category: "Corporate", logo: "/logos/delight.png", fallback: "DE" },
  { name: "Alavon Contracting", url: "https://alavoncontracting.com/", category: "Corporate", logo: "/logos/alavon.png", fallback: "AC" },
  { name: "West Asia Service", url: "https://westasiaservice.ae/", category: "Corporate", logo: "/logos/westasia.png", fallback: "WA" },
  { name: "K2M Pro", url: "https://k2mpro.com/", category: "Corporate", logo: "/logos/k2mpro.svg", fallback: "K2" }
];

// Delivery Process Phases (Framer VESPER style)
const processPhases = [
  {
    step: "01",
    phase: "Discovery & Alignment",
    title: "Requirement Gathering & Charter",
    desc: "Aligning stakeholder expectations, mapping business goals, defining scope boundaries, and establishing the Project Charter. Using AI tools (Claude, ChatGPT) to accelerate SRS documentation.",
    deliverables: ["Project Charter", "SRS & User Stories", "Stakeholder Alignment", "AI Documentation"]
  },
  {
    step: "02",
    phase: "Direction & Planning",
    title: "Agile Sprints & Resource Mapping",
    desc: "Structuring the Work Breakdown Structure (WBS), configuring Jira/Asana boards, establishing the RACI Matrix, setting milestone timelines, and maintaining proactive Risk Registers.",
    deliverables: ["Sprint Backlogs", "RACI Matrix", "Risk Register", "Resource Allocation"]
  },
  {
    step: "03",
    phase: "Build & Governance",
    title: "Cross-Functional Sprint Execution",
    desc: "Leading daily standups with 20 cross-functional members across development, UI/UX, and QA. Controlling scope creep, conducting design reviews, and providing transparent weekly status reports.",
    deliverables: ["Daily Standups", "Defect Tracking", "Weekly Status Reports", "Scope Creep Control"]
  },
  {
    step: "04",
    phase: "Launch & Retention",
    title: "Rigorous UAT, Go-Live & AMC",
    desc: "Facilitating end-to-end User Acceptance Testing (UAT) before every release, securing stakeholder sign-offs, executing zero-downtime go-live, and supporting long-term AMC retention.",
    deliverables: ["UAT Facilitation", "Formal Sign-offs", "Production Rollout", "AMC Support"]
  }
];

// Smart Logo Component with graceful fallback
function ProjectLogo({
  src,
  alt,
  fallback
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div className="project-logo-box">
      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={38}
          height={38}
          className="project-logo-img"
          onError={() => setError(true)}
          unoptimized
        />
      ) : (
        <span className="project-fallback-logo">{fallback}</span>
      )}
    </div>
  );
}

// Animated Rolling Number Counter with Smooth Easing
function AnimatedCounter({
  target,
  duration = 1800,
  delay = 0,
  padZero = false,
}: {
  target: number;
  duration?: number;
  delay?: number;
  padZero?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;
    const currentRef = ref.current;
    if (!currentRef) return;

    if (typeof IntersectionObserver === "undefined") {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrameId: number;
    const timeoutId = setTimeout(() => {
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeOutExpo deceleration curve
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.round(ease * target);

        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, target, duration, delay]);

  const displayVal = padZero && count < 10 ? `0${count}` : `${count}`;

  return (
    <span ref={ref} className="tabular-counter">
      {displayVal}
    </span>
  );
}

// Mobile Swiper Container with Left/Right Arrows and Progress Dots
function MobileSwipeContainer({
  children,
  className = "",
  itemCount,
  label = "Items",
}: {
  children: React.ReactNode;
  className?: string;
  itemCount: number;
  label?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(itemCount > 1);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);

    const firstChild = el.firstElementChild as HTMLElement;
    if (firstChild) {
      const cardWidth = firstChild.offsetWidth + 14;
      const index = Math.min(
        Math.max(0, Math.round(scrollLeft / cardWidth)),
        itemCount - 1
      );
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [itemCount]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const firstChild = el.firstElementChild as HTMLElement;
    const scrollAmount = firstChild ? firstChild.offsetWidth + 14 : 320;
    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mobile-swipe-wrapper">
      <div className="mobile-swipe-header">
        <div className="mobile-swipe-hint">
          <span>Swipe cards</span>
          <span className="swipe-badge">
            {activeIndex + 1} / {itemCount}
          </span>
        </div>
        <div className="mobile-swipe-arrows">
          <button
            type="button"
            className="mobile-swipe-btn"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label={`Previous ${label}`}
            title="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            className="mobile-swipe-btn"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label={`Next ${label}`}
            title="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className={`mobile-swipe-track ${className}`}>
        {children}
      </div>

      {itemCount > 1 && (
        <div className="mobile-swipe-dots">
          {Array.from({ length: Math.min(itemCount, 8) }).map((_, i) => (
            <span
              key={i}
              className={`mobile-swipe-dot ${i === activeIndex ? "active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copied, setCopied] = useState(false);
  const [showAllCompact, setShowAllCompact] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("usmanahmedjafri2304@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const categories = ["All", "Corporate", "E-Commerce", "Healthcare", "Hospitality", "Engineering", "Energy"];

  const filteredCompactProjects = additionalProjects.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const visibleCompact = showAllCompact
    ? filteredCompactProjects
    : filteredCompactProjects.slice(0, 9);

  const marqueeRow1 = additionalProjects.slice(0, 11);
  const marqueeRow2 = additionalProjects.slice(11);

  return (
    <main>
      {/* Background Ambient Lighting (VESPER Style) */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-grid" />
      </div>

      {/* Navigation Bar */}
      <header className="nav-wrap">
        <div className="container">
          <nav className="nav">
            <a href="#top" className="brand-link" onClick={() => setNavOpen(false)}>
              <div className="brand-logo-icon">
                <Image
                  src="/ua-nexus-clean.svg"
                  alt="Usman Ahmed Monogram"
                  width={30}
                  height={30}
                  unoptimized
                />
              </div>
              <div className="brand-text">
                <span className="brand-name">USMAN AHMED</span>
                <span className="brand-role">Project Team Lead</span>
              </div>
            </a>

            <div className="nav-center">
              <div className="status-pill">
                <span className="status-dot" />
                <span>Available for PM & Team Lead Roles</span>
              </div>

              <div className="nav-links">
                <a href="#projects">Selected Work</a>
                <a href="#process">Process</a>
                <a href="#experience">Experience</a>
                <a href="#competencies">Expertise</a>
                <a href="#credentials">Education</a>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <a href="#contact" className="nav-cta">
                <span>Let&apos;s talk</span>
                <ArrowUpRight size={14} />
              </a>

              <button
                className="menu-toggle"
                onClick={() => setNavOpen(!navOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {navOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {navOpen && (
          <div className="mobile-menu-drawer">
            <div className="status-pill" style={{ marginBottom: "10px", width: "fit-content" }}>
              <span className="status-dot" />
              <span>Available for PM & Team Lead Roles</span>
            </div>
            <a href="#projects" onClick={() => setNavOpen(false)}>Selected Work</a>
            <a href="#process" onClick={() => setNavOpen(false)}>Delivery Process</a>
            <a href="#experience" onClick={() => setNavOpen(false)}>Experience</a>
            <a href="#competencies" onClick={() => setNavOpen(false)}>Core Competencies</a>
            <a href="#credentials" onClick={() => setNavOpen(false)}>Education & Certifications</a>
            <a href="#contact" onClick={() => setNavOpen(false)} style={{ color: "var(--accent)" }}>
              Contact & Inquiry →
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="top" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-pill">
                <Sparkles size={13} />
                <span>PROJECT MANAGER & TEAM LEAD · KARACHI, PK</span>
              </div>

              <h1>
                Turning complex projects into <span className="gradient-text">flawless digital delivery.</span>
              </h1>

              <p className="hero-description">
                Project Manager and Team Lead with 2+ years of experience delivering <strong>60+ web,
                e-commerce, and enterprise software projects</strong> for clients across the UAE, Saudi Arabia,
                the UK, and Pakistan with an <strong>80% on-time delivery rate</strong>. Leading cross-functional
                teams of 20 engineers, designers, and QA specialists.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary">
                  <span>Explore Selected Work</span>
                  <ArrowDownRight size={16} />
                </a>

                <a href="#contact" className="btn-secondary">
                  <span>Get in Touch</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://linkedin.com/in/usmanahmed1603"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon-link"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                <button
                  onClick={copyEmail}
                  className="btn-icon-link"
                  aria-label="Copy Email Address"
                  title="Copy Email"
                >
                  {copied ? <Check size={18} color="#34d399" /> : <Mail size={18} />}
                </button>
              </div>
            </div>

            {/* Hero Profile Card */}
            <a
              href="https://digitalgraphiks.ae/about-us#:~:text=What%20Our%20Happy%20Employees%20Say"
              target="_blank"
              rel="noreferrer"
              className="portrait-card"
              title="Featured on Digital Graphiks: What Our Happy Employees Say"
            >
              <div className="portrait-image-wrapper">
                <Image
                  src="/usman-ahmed.jpg"
                  alt="Usman Ahmed - Project Team Lead"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="portrait-image"
                />
                <div className="portrait-gradient-overlay" />
                <div className="portrait-click-hint">
                  <span>DG Spotlight</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>

              <div className="portrait-meta">
                <div className="portrait-badge">
                  <span className="status-dot" />
                  <span>Featured: What Our Happy Employees Say</span>
                  <ExternalLink size={12} style={{ marginLeft: "4px" }} />
                </div>

                <div className="portrait-info-row">
                  <div>
                    <h3 className="portrait-info-title">Usman Ahmed</h3>
                    <p className="portrait-info-subtitle">Project Team Lead · Click to view story</p>
                  </div>
                  <span style={{ fontSize: "11px", color: "var(--accent-light)", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "3px" }}>
                    Read Feature <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Key Metrics Strip (Bento) */}
          <MobileSwipeContainer className="metrics-strip" itemCount={4} label="Key Stats">
            <div className="metric-bento-card">
              <div className="metric-value">
                <AnimatedCounter target={60} delay={0} />
                <span className="accent">+</span>
              </div>
              <div className="metric-label">Delivered Projects</div>
              <div className="metric-desc">Web, e-commerce, and enterprise software across UAE, KSA, UK & PK</div>
            </div>

            <div className="metric-bento-card">
              <div className="metric-value">
                <AnimatedCounter target={80} delay={120} />
                <span className="accent">%</span>
              </div>
              <div className="metric-label">On-Time Delivery Rate</div>
              <div className="metric-desc">Controlled scope changes, structured sprints & proactive risk tracking</div>
            </div>

            <div className="metric-bento-card">
              <div className="metric-value">
                <AnimatedCounter target={20} delay={240} />
                <span className="accent">+</span>
              </div>
              <div className="metric-label">Cross-Functional Team Size</div>
              <div className="metric-desc">Guiding development, UI/UX design, QA and business stakeholders</div>
            </div>

            <div className="metric-bento-card">
              <div className="metric-value">
                <AnimatedCounter target={2} delay={360} padZero={true} />
                <span className="accent">+</span>
              </div>
              <div className="metric-label">Years Leadership</div>
              <div className="metric-desc">Combining Computer Science foundation with MS in Project Management</div>
            </div>
          </MobileSwipeContainer>
        </div>
      </section>

      {/* Delivery Process Section (Framer VESPER Stepper) */}
      <section id="process" className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Delivery Framework</span>
            <h2 className="section-title">
              From requirement to <em>flawless go-live.</em>
            </h2>
            <p className="section-subtitle">
              A structured lifecycle combining Agile speed, predictive governance, and AI-assisted workflows to ensure every project ships on time and within scope.
            </p>
          </div>

          <MobileSwipeContainer className="process-grid" itemCount={processPhases.length} label="Phases">
            {processPhases.map((phase) => (
              <div key={phase.step} className="process-card">
                <span className="process-watermark">{phase.step}</span>

                <div>
                  <div className="process-top">
                    <span className="process-step-pill">PHASE {phase.step}</span>
                  </div>

                  <h3 className="process-title">{phase.title}</h3>
                  <p className="process-desc">{phase.desc}</p>
                </div>

                <div className="process-deliverables">
                  {phase.deliverables.map((item) => (
                    <span key={item} className="process-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </MobileSwipeContainer>
        </div>
      </section>

      {/* Selected Featured Projects (With Real Logos & CV Data) */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Selected Case Studies</span>
            <h2 className="section-title">
              High-impact projects I&apos;ve <em>led & delivered.</em>
            </h2>
            <p className="section-subtitle">
              Detailed case studies from 60+ delivered projects across the UAE, UK, Saudi Arabia, and Pakistan featuring real client logos, technical metrics, and outcomes.
            </p>
          </div>

          <MobileSwipeContainer className="case-studies-grid" itemCount={featuredProjects.length} label="Case Studies">
            {featuredProjects.map((project) => (
              <article key={project.id} className="case-study-card">
                <div>
                  <div className="case-top">
                    <div className="logo-badge-container">
                      <ProjectLogo
                        src={project.logo}
                        alt={`${project.name} Logo`}
                        fallback={project.fallbackLetter}
                      />
                      <div className="case-meta">
                        <span className="case-client-type">{project.clientType}</span>
                        <h3 className="case-title">{project.name}</h3>
                      </div>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="case-external-btn"
                      aria-label={`Visit ${project.name} live website`}
                      title="Open Live Website"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <p style={{ fontSize: "14px", color: "#e2e8f0", fontWeight: 500, marginBottom: "14px" }}>
                    {project.title}
                  </p>

                  <div className="case-tags-bar">
                    <span className="role-pill">
                      <BriefcaseBusiness size={12} />
                      {project.role}
                    </span>
                    <span className="team-pill">
                      <Users size={12} />
                      {project.team}
                    </span>
                  </div>

                  <ul className="case-bullets">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes / Results Box */}
                <div className="case-results-box">
                  <div className="case-results-label">Impact & Deliverables</div>
                  <div className="metrics-pills-row">
                    {project.metrics?.map((m) => (
                      <span key={m.label} className="impact-pill">
                        <CheckCircle2 size={12} />
                        {m.value} {m.label}
                      </span>
                    ))}
                    {project.highlights?.map((h) => (
                      <span key={h} className="highlight-pill">
                        <Check size={12} />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </MobileSwipeContainer>

          {/* More Delivered Projects Directory */}
          <div className="more-projects-box">
            <div className="more-head-row">
              <div>
                <h3 className="more-title">More Delivered Client Projects</h3>
                <p style={{ fontSize: "13px", color: "var(--text-sub)", marginTop: "4px" }}>
                  Selected platforms from my 60+ portfolio across diverse business domains.
                </p>
              </div>

              <div className="filters-row">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop View: Interactive Grid with Filters & Toggle */}
            <div className="desktop-projects-directory">
              <div className="compact-projects-grid">
                {visibleCompact.map((proj) => (
                  <a
                    key={proj.name}
                    href={proj.url}
                    target="_blank"
                    rel="noreferrer"
                    className="compact-project-card"
                  >
                    <div className="compact-logo">
                      <Image
                        src={proj.logo}
                        alt={proj.name}
                        width={28}
                        height={28}
                        className="compact-logo-img"
                        unoptimized
                      />
                    </div>
                    <div className="compact-info">
                      <div className="compact-category">{proj.category}</div>
                      <div className="compact-name">{proj.name}</div>
                    </div>
                    <ArrowUpRight size={16} className="compact-arrow" />
                  </a>
                ))}
              </div>

              <div className="toggle-all-wrap">
                <button
                  onClick={() => setShowAllCompact(!showAllCompact)}
                  className="btn-secondary"
                  style={{ fontSize: "12px", padding: "10px 20px" }}
                >
                  <span>{showAllCompact ? "Show Less" : "View All Delivered Projects"}</span>
                  <ChevronDown
                    size={15}
                    style={{
                      transform: showAllCompact ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease"
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Mobile View: Two-Row Auto-Moving Infinite Logo Marquee */}
            <div className="mobile-marquee-directory">
              <div className="mobile-marquee-track-wrap">
                {/* Row 1: Scrolling Left */}
                <div className="mobile-marquee-track row-left">
                  {[...marqueeRow1, ...marqueeRow1].map((proj, idx) => (
                    <a
                      key={`r1-${proj.name}-${idx}`}
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mobile-marquee-card"
                      title={proj.name}
                    >
                      <div className="mobile-marquee-logo">
                        <Image
                          src={proj.logo}
                          alt={proj.name}
                          width={24}
                          height={24}
                          className="mobile-marquee-img"
                          unoptimized
                        />
                      </div>
                      <div className="mobile-marquee-info">
                        <span className="mobile-marquee-name">{proj.name}</span>
                        <span className="mobile-marquee-category">{proj.category}</span>
                      </div>
                      <ArrowUpRight size={13} className="mobile-marquee-arrow" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mobile-marquee-track-wrap">
                {/* Row 2: Scrolling Right */}
                <div className="mobile-marquee-track row-right">
                  {[...marqueeRow2, ...marqueeRow2].map((proj, idx) => (
                    <a
                      key={`r2-${proj.name}-${idx}`}
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mobile-marquee-card"
                      title={proj.name}
                    >
                      <div className="mobile-marquee-logo">
                        <Image
                          src={proj.logo}
                          alt={proj.name}
                          width={24}
                          height={24}
                          className="mobile-marquee-img"
                          unoptimized
                        />
                      </div>
                      <div className="mobile-marquee-info">
                        <span className="mobile-marquee-name">{proj.name}</span>
                        <span className="mobile-marquee-category">{proj.category}</span>
                      </div>
                      <ArrowUpRight size={13} className="mobile-marquee-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Career History</span>
            <h2 className="section-title">
              Professional <em>experience.</em>
            </h2>
            <p className="section-subtitle">
              Progressive trajectory leading engineering, design, and quality teams within high-growth digital agency environments.
            </p>
          </div>

          <div className="company-lead-banner">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Building2 size={20} color="var(--accent)" />
                <h3 className="company-title">Digital Graphiks, Karachi</h3>
              </div>
              <p className="company-desc">
                Digital agency delivering web, e-commerce, software, and AI solutions, with offices in the USA, UK, and UAE; 200+ in-house team and 1,000+ projects delivered.
              </p>
            </div>
            <div className="company-stats-pill">
              <span>Apr 2024 — Present</span>
              <span>·</span>
              <span>Karachi, PK</span>
            </div>
          </div>

          <div className="timeline-track">
            {/* Role 1: Project Team Lead */}
            <div className="timeline-entry current">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Project Team Lead</h3>
                  <p style={{ fontSize: "13px", color: "var(--accent-light)", marginTop: "4px" }}>
                    Digital Graphiks · Cross-Functional Delivery Leadership
                  </p>
                </div>
                <span className="timeline-period-badge">SEP 2025 — PRESENT</span>
              </div>

              <ul className="timeline-bullets">
                <li>
                  Lead cross-functional teams of 20 members, including development, UI/UX design, and QA, and have delivered 60+ web and software projects for clients in the UAE, Saudi Arabia, the UK, and Pakistan.
                </li>
                <li>
                  Maintain an 80% on-time delivery rate by managing scope changes, client feedback cycles, and risks through regular tracking and follow-ups.
                </li>
                <li>
                  Manage the full project lifecycle from initiation to deployment using Agile methodology.
                </li>
                <li>
                  Oversee design and QA workflows: review design deliverables with clients, ensure test coverage, and track defects through to resolution.
                </li>
                <li>
                  Run regular client and stakeholder meetings, and facilitate UAT before every release.
                </li>
                <li>
                  Use AI tools (Claude, ChatGPT) to speed up SRS and requirement documentation, user stories, weekly status reports, and minutes of meeting.
                </li>
                <li>
                  Maintain project plans, status reports, and requirement documents, and recommend workflow improvements.
                </li>
                <li>
                  Support long-term client retention through AMC (Annual Maintenance Contract) engagements after go-live.
                </li>
              </ul>
            </div>

            {/* Role 2: Project Coordinator */}
            <div className="timeline-entry">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Project Coordinator</h3>
                  <p style={{ fontSize: "13px", color: "var(--text-sub)", marginTop: "4px" }}>
                    Digital Graphiks · Agile Operations & Client Sync
                  </p>
                </div>
                <span className="timeline-period-badge">APR 2025 — AUG 2025</span>
              </div>

              <ul className="timeline-bullets">
                <li>
                  Coordinated project activities between internal development teams and client requirements.
                </li>
                <li>
                  Supported planning, scheduling, resource allocation, sprint tracking, and backlog management in Jira.
                </li>
                <li>
                  Held regular client review meetings and maintained SRS, project plans, and status reports.
                </li>
              </ul>
            </div>

            {/* Role 3: Junior Project Coordinator */}
            <div className="timeline-entry">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Junior Project Coordinator</h3>
                  <p style={{ fontSize: "13px", color: "var(--text-sub)", marginTop: "4px" }}>
                    Digital Graphiks · Requirements & QA Support
                  </p>
                </div>
                <span className="timeline-period-badge">APR 2024 — MAR 2025</span>
              </div>

              <ul className="timeline-bullets">
                <li>
                  Prepared weekly status reports and project documentation for management and client reviews.
                </li>
                <li>
                  Supported requirement gathering and coordination between development, QA, and business teams.
                </li>
                <li>
                  Tracked task status in project management tools and assisted in UAT validation prior to release.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Bento Grid */}
      <section id="competencies" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Competencies & Tool Stack</span>
            <h2 className="section-title">
              Built on <em>proven governance & tools.</em>
            </h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning modern project management methodologies, AI-accelerated workflows, and technical fundamentals.
            </p>
          </div>

          <MobileSwipeContainer className="competencies-bento" itemCount={7} label="Competencies">
            {/* Box 1: PM Leadership */}
            <div className="bento-box">
              <div className="bento-header">
                <div className="bento-icon">
                  <FolderKanban size={20} />
                </div>
                <h3 className="bento-title">Project Management</h3>
              </div>
              <div className="bento-tags">
                <span className="skill-tag">Lifecycle Management</span>
                <span className="skill-tag">Scope & Risk Control</span>
                <span className="skill-tag">Resource Allocation</span>
                <span className="skill-tag">Timeline Management</span>
                <span className="skill-tag">UAT Facilitation</span>
                <span className="skill-tag">AMC Retention</span>
                <span className="skill-tag">Stakeholder Sync</span>
              </div>
            </div>

            {/* Box 2: Methodologies */}
            <div className="bento-box">
              <div className="bento-header">
                <div className="bento-icon">
                  <Workflow size={20} />
                </div>
                <h3 className="bento-title">Methodologies</h3>
              </div>
              <div className="bento-tags">
                <span className="skill-tag">Agile (Scrum & Kanban)</span>
                <span className="skill-tag">Waterfall</span>
                <span className="skill-tag">Hybrid Delivery</span>
                <span className="skill-tag">Sprint Planning</span>
                <span className="skill-tag">Backlog Refinement</span>
                <span className="skill-tag">Sprint Retrospectives</span>
              </div>
            </div>

            {/* Box 3: AI & Modern Productivity */}
            <div className="bento-box">
              <div className="bento-header">
                <div className="bento-icon">
                  <Sparkles size={20} />
                </div>
                <h3 className="bento-title">AI & Productivity</h3>
              </div>
              <div className="bento-tags">
                <span className="skill-tag ai-tag">Claude AI</span>
                <span className="skill-tag ai-tag">ChatGPT</span>
                <span className="skill-tag ai-tag">AI-Assisted SRS Writing</span>
                <span className="skill-tag ai-tag">User Story Generation</span>
                <span className="skill-tag ai-tag">Automated Meeting Minutes</span>
                <span className="skill-tag ai-tag">Weekly Status Synthesis</span>
              </div>
            </div>

            {/* Box 4: Tools & Platforms (Span 2) */}
            <div className="bento-box span-2">
              <div className="bento-header">
                <div className="bento-icon">
                  <Layers size={20} />
                </div>
                <h3 className="bento-title">Tools & Ecosystem</h3>
              </div>
              <div className="bento-tags">
                <span className="skill-tag">Jira Cloud</span>
                <span className="skill-tag">Asana</span>
                <span className="skill-tag">MS Project</span>
                <span className="skill-tag">Primavera P6</span>
                <span className="skill-tag">MS Office Suite</span>
                <span className="skill-tag">Confluence</span>
                <span className="skill-tag">Slack</span>
                <span className="skill-tag">Trello</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">GitHub</span>
              </div>
            </div>

            {/* Box 5: Documentation & Governance */}
            <div className="bento-box">
              <div className="bento-header">
                <div className="bento-icon">
                  <FileCheck2 size={20} />
                </div>
                <h3 className="bento-title">Documentation</h3>
              </div>
              <div className="bento-tags">
                <span className="skill-tag">Project Charter</span>
                <span className="skill-tag">Software Req. (SRS)</span>
                <span className="skill-tag">Project Plans (WBS)</span>
                <span className="skill-tag">Risk Registers</span>
                <span className="skill-tag">RACI Matrix</span>
                <span className="skill-tag">Status Reports</span>
                <span className="skill-tag">Release Sign-offs</span>
              </div>
            </div>

            {/* Box 6: Technical Foundation */}
            <div className="bento-box">
              <div className="bento-header">
                <div className="bento-icon">
                  <Code2 size={20} />
                </div>
                <h3 className="bento-title">Technical Foundation</h3>
              </div>
              <div className="bento-tags">
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">SQL & Relational DBs</span>
                <span className="skill-tag">HTML5 & CSS3</span>
                <span className="skill-tag">REST API Integrations</span>
                <span className="skill-tag">CMS Architecture</span>
                <span className="skill-tag">ERP & NetSuite Sync</span>
              </div>
            </div>

            {/* Box 7: Languages (Span 2) */}
            <div className="bento-box span-2">
              <div className="bento-header">
                <div className="bento-icon">
                  <BookOpen size={20} />
                </div>
                <h3 className="bento-title">Communication & Languages</h3>
              </div>
              <div className="bento-tags">
                <span className="skill-tag" style={{ color: "#fff", background: "rgba(99, 142, 255, 0.15)" }}>
                  English (Fluent / Professional Working)
                </span>
                <span className="skill-tag" style={{ color: "#fff", background: "rgba(99, 142, 255, 0.15)" }}>
                  Urdu (Native / Bilingual)
                </span>
                <span className="skill-tag">Stakeholder Pitching</span>
                <span className="skill-tag">Conflict Resolution</span>
                <span className="skill-tag">Executive Presentation</span>
              </div>
            </div>
          </MobileSwipeContainer>
        </div>
      </section>

      {/* Education & Certifications Section */}
      {/* Education & Certifications Section (Redesigned Bento Architecture) */}
      <section id="credentials" className="section credentials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Academic & Credentials</span>
            <h2 className="section-title">
              Education & <em>certifications.</em>
            </h2>
            <p className="section-subtitle">
              Grounding practical project leadership with dual Computer Science and advanced Project Management master&apos;s foundations.
            </p>
          </div>

          {/* Dual Academic Hero Bento Cards */}
          <MobileSwipeContainer className="academic-degrees-grid" itemCount={2} label="Degrees">
            {/* Degree 1: MS Project Management */}
            <div className="degree-hero-card">
              <span className="degree-watermark">MS</span>
              <div>
                <div className="degree-top-meta">
                  <div className="degree-type-pill">
                    <GraduationCap size={14} />
                    <span>POSTGRADUATE DEGREE</span>
                  </div>
                  <span className="degree-period">COMPLETED · JAN 2025</span>
                </div>

                <h3 className="degree-title">Master of Science in Project Management (MS PM)</h3>
                
                <div className="degree-institution">
                  <Building2 size={15} color="var(--accent)" />
                  <span>Bahria University, Karachi Campus</span>
                </div>

                <p className="degree-desc">
                  Advanced specialization in enterprise software delivery, Agile sprint governance, scope and risk registers, stakeholder alignment, and RACI matrices.
                </p>
              </div>

              <div className="degree-skills-row">
                <span className="degree-skill-pill">Agile &amp; Hybrid Lifecycle</span>
                <span className="degree-skill-pill">Scope &amp; Risk Governance</span>
                <span className="degree-skill-pill">WBS &amp; Resource Allocation</span>
                <span className="degree-skill-pill">UAT &amp; Stakeholder Management</span>
              </div>
            </div>

            {/* Degree 2: BS Computer Science */}
            <div className="degree-hero-card">
              <span className="degree-watermark">BS</span>
              <div>
                <div className="degree-top-meta">
                  <div className="degree-type-pill">
                    <Code2 size={14} />
                    <span>UNDERGRADUATE DEGREE</span>
                  </div>
                  <span className="degree-period">COMPLETED · JUN 2023</span>
                </div>

                <h3 className="degree-title">Bachelor of Science in Computer Science (BS CS)</h3>
                
                <div className="degree-institution">
                  <Building2 size={15} color="var(--accent)" />
                  <span>Mohammad Ali Jinnah University (MAJU), Karachi</span>
                </div>

                <p className="degree-desc">
                  Core engineering foundation spanning software engineering, database management, web systems architecture, algorithms, and API integrations.
                </p>
              </div>

              <div className="degree-skills-row">
                <span className="degree-skill-pill">Software Architecture</span>
                <span className="degree-skill-pill">SQL &amp; Relational DBs</span>
                <span className="degree-skill-pill">PHP, HTML5 &amp; CSS3</span>
                <span className="degree-skill-pill">API &amp; System Integration</span>
              </div>
            </div>
          </MobileSwipeContainer>

          {/* Certifications Sub-Header */}
          <div className="certs-sub-header">
            <h3 className="certs-sub-title">
              <Award size={20} color="var(--accent)" />
              <span>Professional Industry Certifications</span>
            </h3>
            <span className="certs-verified-badge">
              <CheckCircle2 size={13} />
              <span>Verified Industry Credentials</span>
            </span>
          </div>

          {/* 4-Card Certification Grid */}
          <MobileSwipeContainer className="cert-grid-v2" itemCount={4} label="Certifications">
            {/* Cert 1 */}
            <div className="cert-card-v2">
              <div className="cert-v2-top">
                <span className="cert-issuer-badge">LinkedIn Learning</span>
                <span className="cert-year">APR 2025</span>
              </div>

              <div>
                <h4 className="cert-v2-title">Hybrid Project Management: Agile &amp; Predictive Methods</h4>
                <p className="cert-v2-issuer">Agile Scrum + Waterfall Predictive Synthesis</p>
              </div>

              <div className="cert-v2-footer">
                <span>Credential Verification</span>
                <span className="cert-status-check">
                  <Check size={12} />
                  <span>Verified</span>
                </span>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="cert-card-v2">
              <div className="cert-v2-top">
                <span className="cert-issuer-badge">Coursera</span>
                <span className="cert-year">2024</span>
              </div>

              <div>
                <h4 className="cert-v2-title">Project Initiation: Starting a Successful Project</h4>
                <p className="cert-v2-issuer">Project Charter, Stakeholders &amp; Feasibility</p>
              </div>

              <div className="cert-v2-footer">
                <span>Credential Verification</span>
                <span className="cert-status-check">
                  <Check size={12} />
                  <span>Verified</span>
                </span>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="cert-card-v2">
              <div className="cert-v2-top">
                <span className="cert-issuer-badge">PMI / LinkedIn</span>
                <span className="cert-year">2023</span>
              </div>

              <div>
                <h4 className="cert-v2-title">Agile Project Management with Jira Cloud</h4>
                <p className="cert-v2-issuer">Backlog Management &amp; Sprint Workflows</p>
              </div>

              <div className="cert-v2-footer">
                <span>PMI Professional PDUs</span>
                <span className="cert-status-check">
                  <Check size={12} />
                  <span>Verified</span>
                </span>
              </div>
            </div>

            {/* Cert 4 */}
            <div className="cert-card-v2">
              <div className="cert-v2-top">
                <span className="cert-issuer-badge">Coursera</span>
                <span className="cert-year">2023</span>
              </div>

              <div>
                <h4 className="cert-v2-title">Foundations of Project Management</h4>
                <p className="cert-v2-issuer">Project Lifecycle, WBS &amp; Governance</p>
              </div>

              <div className="cert-v2-footer">
                <span>Professional Certificate</span>
                <span className="cert-status-check">
                  <Check size={12} />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          </MobileSwipeContainer>
        </div>
      </section>

      {/* Closing CTA Banner (Vesper Style Cinematic Finale) */}
      <section id="contact" className="closing-cta">
        <div className="cta-glow-orb" />

        <div className="container">
          <div className="closing-inner">
            <span className="closing-tag">
              <span className="status-dot" />
              <span>Let&apos;s Connect & Deliver</span>
            </span>

            <h2 className="closing-title">
              Ready to ship something <span className="accent">extraordinary?</span>
            </h2>

            <p className="closing-desc">
              Whether you need end-to-end digital delivery leadership, Agile team coordination, or a consultation on turning complex product scopes into live solutions — my inbox is open.
            </p>

            <div className="contact-options-row">
              <button onClick={copyEmail} className="email-copy-pill">
                <span>usmanahmedjafri2304@gmail.com</span>
                {copied ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
              </button>

              <a
                href="mailto:usmanahmedjafri2304@gmail.com"
                className="btn-primary"
              >
                <span>Send Direct Email</span>
                <Mail size={16} />
              </a>

              <a
                href="https://linkedin.com/in/usmanahmed1603"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <span>Connect on LinkedIn</span>
                <Linkedin size={16} />
              </a>
            </div>

            <div className="meta-contacts-list">
              <span className="meta-item">
                <MapPin size={15} color="var(--accent)" /> Karachi, Sindh, Pakistan
              </span>
              <span className="meta-item">
                <Phone size={15} color="var(--accent)" /> +92 335 3493148
              </span>
              <span className="meta-item">
                <BriefcaseBusiness size={15} color="var(--accent)" /> Project Team Lead @ Digital Graphiks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span>USMAN AHMED</span>
              <span style={{ color: "var(--text-dim)", marginLeft: "8px", fontWeight: 400 }}>
                · Project Team Lead & Agile Delivery
              </span>
            </div>

            <div>
              <span>© {new Date().getFullYear()} Usman Ahmed. All rights reserved.</span>
            </div>

            <a href="#top" className="footer-back-top">
              <span>Back to top</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
