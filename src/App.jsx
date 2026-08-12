import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Braces,
  Check,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react'
import { projects, skillGroups } from './data'
import { projectVisuals } from './components/ProjectVisuals'

const githubUrl = 'https://github.com/JamieWamz'
const linkedinUrl = 'https://linkedin.com/in/Mundia-Wamuyuwa'
const email = 'wamuyuwamundia@gmail.com'
const phone = '+260772289096'
const portraitUrl = `${import.meta.env.BASE_URL}mundia-portrait.png`

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

function ExternalLink({ href, children, className = '', label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={className}>
      {children}
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Work', '#work'],
    ['Expertise', '#expertise'],
    ['About', '#about'],
  ]

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#top" className="wordmark" aria-label="Back to top">
          <span className="wordmark-mark">MW</span>
          <span className="hidden sm:block">Mundia Wamuyuwa</span>
        </a>

        <div className="hidden items-center md:flex">
          {links.map(([label, href]) => (
            <a className="nav-link" href={href} key={href}>{label}</a>
          ))}
        </div>

        <a className="nav-cta hidden md:flex" href="#connect">
          <span className="status-dot" />
          Available
          <ArrowUpRight />
        </a>

        <button className="menu-button md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mobile-menu"
          >
            {[...links, ['Connect', '#connect']].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight /></a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-orb hero-orb-blue" />
      <div className="hero-orb hero-orb-amber" />

      <div className="hero-grid">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.09 }} className="hero-copy">
          <motion.div variants={reveal} className="availability">
            <span className="status-dot" />
            Available for ambitious builds
          </motion.div>

          <motion.p variants={reveal} className="eyebrow">Computer Science · Software Engineering</motion.p>
          <motion.h1 variants={reveal} className="hero-title">
            Mundia<br />Wamuyuwa<span>.</span>
          </motion.h1>
          <motion.p variants={reveal} className="hero-description">
            I design, build, and deploy useful software—turning complex problems into products that feel clear, fast, and human.
          </motion.p>

          <motion.div variants={reveal} className="hero-actions">
            <a href="#work" className="button-primary group">
              Explore work
              <ArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <ExternalLink href={githubUrl} className="button-secondary" label="Visit Mundia's GitHub profile">
              <Github /> GitHub <ArrowUpRight />
            </ExternalLink>
          </motion.div>

          <motion.div variants={reveal} className="hero-meta">
            <span>Lusaka, Zambia</span>
            <span>Clean code · Real impact</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="portrait-column"
        >
          <div className="portrait-shell group">
            <div className="portrait-glow" />
            <img src={portraitUrl} alt="Mundia Wamuyuwa" className="portrait-image" />
            <div className="portrait-overlay" />
            <div className="portrait-caption">
              <div className="glass-tag"><Sparkles /><span>Builder at heart</span></div>
              <span>Portrait / 2026</span>
            </div>
          </div>

          <div className="code-float">
            <div><Braces /><span>currently</span></div>
            <p><span>const</span> focus = &quot;software that ships&quot;;</p>
          </div>

          <div className="production-tag"><Check /> Production-minded</div>
        </motion.div>
      </div>

      <a href="#work" aria-label="Scroll to selected work" className="scroll-cue">
        Scroll <span className="scroll-line" />
      </a>
    </section>
  )
}

function Marquee() {
  const items = ['React', 'TypeScript', 'Python', 'Node.js', 'Go', 'PostgreSQL', 'Playwright', 'Docker']
  return (
    <div className="marquee-wrap" aria-label="Technology stack">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}><Asterisk />{item}</span>
        ))}
      </div>
    </div>
  )
}

function SectionIntro({ kicker, title, body }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="section-intro"
    >
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {body && <p className="section-body">{body}</p>}
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  const Visual = projectVisuals[project.slug]

  return (
    <motion.article
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className={`project-card group ${project.featured ? 'project-featured' : ''}`}
    >
      <div className={project.featured ? 'project-layout project-layout-featured' : 'project-layout'}>
        <div className="project-copy">
          <div className="project-meta">
            <span>Project / {project.number}</span>
            <span>{project.type}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-list">
            {project.stack.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}
          </div>
          <div className="project-actions">
            {project.live && (
              <ExternalLink href={project.live} className="project-link" label={`Open live ${project.title} project`}>
                Live project <ArrowUpRight />
              </ExternalLink>
            )}
            <ExternalLink href={project.github} className="project-link project-link-muted" label={`View ${project.title} source on GitHub`}>
              <Github /> Source <ArrowUpRight />
            </ExternalLink>
          </div>
        </div>
        <div className="project-preview"><Visual /></div>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section id="work" className="section-shell">
      <SectionIntro
        kicker="01 / Selected work"
        title={<>Built to solve.<br /><span>Made to last.</span></>}
        body="A selection of systems and tools where thoughtful product decisions meet dependable engineering."
      />
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
      </div>
      <div className="section-action">
        <ExternalLink href={githubUrl} className="button-secondary" label="See all repositories on GitHub">
          <Github /> View all repositories <ArrowUpRight />
        </ExternalLink>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="section-shell">
      <SectionIntro
        kicker="02 / Toolkit"
        title={<>The right tool.<br /><span>Used with intent.</span></>}
        body="From interface craft to backend architecture, I work across the stack and stay close to the details that make software reliable."
      />
      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: groupIndex * 0.08 }}
            className="skill-group"
            key={group.label}
          >
            <div className="skill-heading">
              <span>0{groupIndex + 1} / {group.label}</span>
              <Asterisk />
            </div>
            <div className="skill-list">
              {group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="about-panel">
        <div className="about-grid" />
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="about-layout">
          <div className="about-label">
            <p className="section-kicker">03 / About</p>
            <div className="about-icon"><Braces /></div>
          </div>
          <div>
            <h2>I care about the space between <span>“it works”</span> and “it feels effortless.”</h2>
            <div className="about-copy">
              <p>I’m Mundia, a Computer Science major focused on building practical software with clean architecture, thoughtful interfaces, and measurable real-world value.</p>
              <p>I enjoy moving from a rough idea to a deployed product—asking better questions, keeping the codebase clear, and sweating the small details users notice.</p>
            </div>
            <div className="principles"><span>Curiosity over ego</span><span>Clarity over cleverness</span><span>Ship, learn, improve</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Connect() {
  return (
    <section id="connect" className="connect-section">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="connect-panel">
        <div className="connect-orb" />
        <p className="section-kicker">04 / Connect</p>
        <h2>Have a problem worth <span>solving?</span></h2>
        <p className="connect-copy">I’m always open to thoughtful conversations, ambitious products, and engineering work that creates meaningful impact.</p>

        <div className="connect-actions">
          <ExternalLink href={linkedinUrl} className="button-primary" label="Connect with Mundia on LinkedIn">
            <Linkedin /> Connect on LinkedIn <ArrowUpRight />
          </ExternalLink>
          <ExternalLink href={githubUrl} className="button-secondary" label="Follow Mundia on GitHub">
            <Github /> Follow on GitHub
          </ExternalLink>
        </div>

        <div className="contact-list">
          <a className="contact-link" href={`mailto:${email}`}><Mail /><span>{email}</span><ArrowUpRight /></a>
          <a className="contact-link" href={`tel:${phone}`}><Phone /><span>+260 772 289 096</span><ArrowUpRight /></a>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Mundia Wamuyuwa · Lusaka, Zambia</p>
        <div>
          <a href={`mailto:${email}`}>Email</a>
          <ExternalLink href={linkedinUrl}>LinkedIn</ExternalLink>
          <ExternalLink href={githubUrl}>GitHub</ExternalLink>
          <a href="#top">Top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 })

  return (
    <div className="site-root">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Expertise />
        <About />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}
