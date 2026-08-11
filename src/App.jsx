import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Braces,
  Check,
  Github,
  Linkedin,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import { projects, skillGroups } from './data'
import { projectVisuals } from './components/ProjectVisuals'

const githubUrl = 'https://github.com/JamieWamz'
const linkedinUrl = 'https://linkedin.com/in/Mundia-Wamuyuwa'
const portraitUrl = `${import.meta.env.BASE_URL}mundia-portrait.png`

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function ExternalLink({ href, children, className = '', label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={className}
    >
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#090c11]/75 px-4 py-3 shadow-2xl shadow-black/15 backdrop-blur-xl sm:px-5">
        <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-xs font-medium text-white transition group-hover:border-electric/40 group-hover:text-electric">MW</span>
          <span className="hidden text-sm font-semibold tracking-tight text-white/90 sm:block">Mundia Wamuyuwa</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <a className="nav-link" href={href} key={href}>{label}</a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#65dc97] shadow-[0_0_12px_#65dc97]" />
          <a className="group flex items-center gap-2 text-xs font-semibold text-white/70 transition hover:text-white" href="#connect">
            Let’s talk <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-white md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/[0.08] bg-[#090c11]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {[...links, ['Connect', '#connect']].map(([label, href]) => (
              <a className="block rounded-xl px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white" href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12">
      <div className="hero-orb hero-orb-blue" />
      <div className="hero-orb hero-orb-amber" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="relative z-10">
          <motion.div variants={reveal} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#65dc97] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#65dc97]" />
            </span>
            Available for ambitious builds
          </motion.div>

          <motion.p variants={reveal} className="mb-4 font-mono text-xs uppercase tracking-[0.26em] text-electric">Computer science · Software engineering</motion.p>
          <motion.h1 variants={reveal} className="max-w-3xl text-[clamp(3.4rem,8vw,7.25rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
            Mundia<br />
            <span className="hero-name">Wamuyuwa.</span>
          </motion.h1>
          <motion.p variants={reveal} className="mt-8 max-w-xl text-lg leading-8 text-mist sm:text-xl sm:leading-9">
            I design, build, and deploy useful software—turning complex problems into products that feel clear, fast, and human.
          </motion.p>

          <motion.div variants={reveal} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="button-primary group">
              Explore selected work
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
            </a>
            <ExternalLink href={githubUrl} className="button-secondary group" label="Visit Mundia's GitHub profile">
              <Github className="h-4 w-4" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </ExternalLink>
          </motion.div>

          <motion.div variants={reveal} className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.07] pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
            <span>Lusaka, Zambia</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>Clean code · Real impact</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
        >
          <div className="portrait-shell group">
            <div className="portrait-glow" />
            <img src={portraitUrl} alt="Mundia Wamuyuwa" className="portrait-image" />
            <div className="portrait-overlay" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div className="glass-tag">
                <Sparkles className="h-3.5 w-3.5 text-ember" />
                <span>Builder at heart</span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/40">Portrait / 2026</span>
            </div>
          </div>

          <div className="code-float">
            <div className="flex items-center gap-2 text-electric"><Braces className="h-4 w-4" /><span>currently</span></div>
            <p className="mt-2 text-white/80"><span className="text-white/30">const</span> focus =</p>
            <p className="pl-3 text-ember">&quot;software that ships&quot;;</p>
          </div>

          <div className="absolute -right-3 top-12 hidden items-center gap-2 rounded-full border border-white/10 bg-[#0b0f15]/85 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 shadow-xl backdrop-blur-md sm:flex">
            <Check className="h-3 w-3 text-[#65dc97]" /> Production-minded
          </div>
        </motion.div>
      </div>

      <a href="#work" aria-label="Scroll to selected work" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/25 xl:flex">
        Scroll
        <span className="scroll-line" />
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
          <span key={`${item}-${index}`}><Asterisk className="h-3.5 w-3.5 text-electric/60" />{item}</span>
        ))}
      </div>
    </div>
  )
}

function SectionIntro({ kicker, title, body }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }} className="mb-12 grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end lg:mb-16">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      {body && <p className="max-w-xl text-base leading-7 text-mist md:ml-auto md:text-lg md:leading-8">{body}</p>}
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
      transition={{ duration: 0.65, delay: index * 0.07 }}
      className={`project-card group ${project.featured ? 'lg:col-span-2' : ''}`}
    >
      <div className={project.featured ? 'grid h-full lg:grid-cols-[0.92fr_1.08fr]' : 'flex h-full flex-col'}>
        <div className={`flex flex-col p-6 sm:p-8 ${project.featured ? 'lg:p-10' : ''}`}>
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">Project / {project.number}</span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">{project.type}</span>
          </div>
          <h3 className={`font-semibold tracking-[-0.04em] text-white ${project.featured ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{project.title}</h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-mist sm:text-base">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}
          </div>
          <div className="mt-auto flex flex-wrap gap-5 pt-10">
            {project.live && (
              <ExternalLink href={project.live} className="project-link text-white" label={`Open live ${project.title} project`}>
                Live project <ArrowUpRight />
              </ExternalLink>
            )}
            <ExternalLink href={project.github} className="project-link text-white/55 hover:text-white" label={`View ${project.title} source on GitHub`}>
              <Github /> Source <ArrowUpRight />
            </ExternalLink>
          </div>
        </div>
        <div className={`overflow-hidden ${project.featured ? 'min-h-[330px] border-t border-white/[0.06] lg:border-l lg:border-t-0' : 'mt-auto min-h-[255px] border-t border-white/[0.06]'}`}>
          <Visual />
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section id="work" className="section-shell">
      <SectionIntro kicker="01 / Selected work" title={<>Built to solve.<br /><span>Made to last.</span></>} body="A selection of systems and tools where thoughtful product decisions meet dependable engineering." />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
      </div>
      <div className="mt-10 flex justify-center">
        <ExternalLink href={githubUrl} className="button-secondary group" label="See all repositories on GitHub">
          <Github className="h-4 w-4" /> View all repositories <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </ExternalLink>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="section-shell">
      <SectionIntro kicker="02 / Toolkit" title={<>The right tool.<br /><span>Used with intent.</span></>} body="From interface craft to backend architecture, I work across the stack and stay close to the details that make software reliable." />
      <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.07] lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: groupIndex * 0.1 }} className="bg-[#0b0e13] p-7 sm:p-9" key={group.label}>
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">0{groupIndex + 1} / {group.label}</span>
              <Asterisk className="h-4 w-4 text-white/15" />
            </div>
            <div className="flex flex-wrap gap-2.5">
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
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative z-10 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="section-kicker">03 / About</p>
            <div className="mt-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-electric/20 bg-electric/[0.08] shadow-glow">
              <Braces className="h-7 w-7 text-electric" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl sm:leading-[1.08]">
              I care about the space between <span className="text-gradient">“it works”</span> and “it feels effortless.”
            </h2>
            <div className="mt-8 grid gap-6 text-base leading-8 text-mist sm:grid-cols-2">
              <p>I’m Mundia, a Computer Science major focused on building practical software with clean architecture, thoughtful interfaces, and measurable real-world value.</p>
              <p>I enjoy moving from a rough idea to a deployed product—asking better questions, keeping the codebase clear, and sweating the small details users notice.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
              <span>Curiosity over ego</span><span>Clarity over cleverness</span><span>Ship, learn, improve</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Connect() {
  return (
    <section id="connect" className="px-5 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-28">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="connect-panel">
        <div className="connect-orb" />
        <p className="section-kicker relative z-10 justify-center">04 / Connect</p>
        <h2 className="relative z-10 mx-auto mt-6 max-w-4xl text-center text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">Have a problem worth <span className="hero-name">solving?</span></h2>
        <p className="relative z-10 mx-auto mt-7 max-w-xl text-center text-base leading-7 text-mist sm:text-lg sm:leading-8">I’m always open to thoughtful conversations, ambitious products, and engineering work that creates meaningful impact.</p>
        <div className="relative z-10 mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ExternalLink href={linkedinUrl} className="button-primary group" label="Connect with Mundia on LinkedIn">
            <Linkedin className="h-4 w-4" /> Connect on LinkedIn <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </ExternalLink>
          <ExternalLink href={githubUrl} className="button-secondary group" label="Follow Mundia on GitHub">
            <Github className="h-4 w-4" /> Follow on GitHub
          </ExternalLink>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/[0.07] pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mundia Wamuyuwa. Built with care in Lusaka.</p>
        <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[0.16em]">
          <a className="transition hover:text-white" href="#top">Back to top ↑</a>
          <ExternalLink className="transition hover:text-white" href={linkedinUrl}>LinkedIn</ExternalLink>
          <ExternalLink className="transition hover:text-white" href={githubUrl}>GitHub</ExternalLink>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const appRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onMove = (event) => {
      if (!appRef.current) return
      appRef.current.style.setProperty('--mouse-x', `${event.clientX}px`)
      appRef.current.style.setProperty('--mouse-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div ref={appRef} className="min-h-screen overflow-hidden bg-ink text-white selection:bg-electric selection:text-ink">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="cursor-spotlight" aria-hidden="true" />
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
