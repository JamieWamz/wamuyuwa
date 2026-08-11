import { Activity, Bot, Check, Clock3, Database, Monitor, Search, ShieldCheck } from 'lucide-react'

const WindowBar = ({ label }) => (
  <div className="visual-window-bar">
    <div className="flex gap-1.5" aria-hidden="true">
      <span className="window-dot bg-[#ff776d]" />
      <span className="window-dot bg-[#f7c35c]" />
      <span className="window-dot bg-[#66d28c]" />
    </div>
    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">{label}</span>
    <span className="w-9" />
  </div>
)

export function ZedPreview() {
  return (
    <div className="project-visual zed-visual">
      <div className="mini-window">
        <WindowBar label="procurement overview" />
        <div className="grid grid-cols-[52px_1fr]">
          <div className="mini-sidebar">
            <div className="mini-logo">Z</div>
            {[0, 1, 2, 3].map((item) => (
              <span className={item === 0 ? 'active' : ''} key={item} />
            ))}
          </div>
          <div className="p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="mb-1 h-2 w-20 rounded-full bg-white/60" />
                <div className="h-1.5 w-28 rounded-full bg-white/10" />
              </div>
              <div className="h-6 w-6 rounded-full bg-electric/20 ring-1 ring-electric/30" />
            </div>
            <div className="mb-4 grid grid-cols-3 gap-2">
              {[
                ['24', 'Live bids'],
                ['08', 'In review'],
                ['16', 'Suppliers'],
              ].map(([value, label], index) => (
                <div className="metric-card" key={label}>
                  <span className={index === 1 ? 'text-ember' : 'text-white'}>{value}</span>
                  <small>{label}</small>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[1.5fr_1fr] gap-2">
              <div className="mini-chart">
                {[38, 58, 46, 78, 62, 88, 72].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="space-y-2 rounded-lg border border-white/5 bg-white/[0.025] p-2.5">
                {[Check, Clock3, ShieldCheck].map((Icon, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <Icon className="h-2.5 w-2.5 text-electric" />
                    <span className="h-1.5 flex-1 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function McpPreview() {
  return (
    <div className="project-visual mcp-visual">
      <div className="signal-grid" />
      <div className="mcp-node left-5 top-5">
        <Monitor />
      </div>
      <div className="mcp-node right-5 top-5">
        <Database />
      </div>
      <div className="mcp-node bottom-5 left-1/2 -translate-x-1/2">
        <Activity />
      </div>
      <div className="mcp-core">
        <Bot />
        <span>MCP</span>
      </div>
      <div className="mcp-line line-a" />
      <div className="mcp-line line-b" />
      <div className="mcp-line line-c" />
    </div>
  )
}

export function GobloxPreview() {
  return (
    <div className="project-visual terminal-visual">
      <div className="terminal-window">
        <WindowBar label="goblox — zsh" />
        <div className="space-y-3 p-5 font-mono text-[10px] leading-relaxed sm:text-xs">
          <p><span className="text-electric">~</span> <span className="text-white/80">goblox list --priority high</span></p>
          <p className="text-white/25">ID&nbsp;&nbsp; STATUS&nbsp;&nbsp;&nbsp; TASK</p>
          <p><span className="text-ember">01</span>&nbsp;&nbsp; <span className="text-[#63d994]">active</span>&nbsp;&nbsp;&nbsp; Ship portfolio</p>
          <p><span className="text-ember">02</span>&nbsp;&nbsp; <span className="text-[#63d994]">active</span>&nbsp;&nbsp;&nbsp; Review API schema</p>
          <p className="pt-1 text-white/35">2 tasks · SQLite synced</p>
          <p><span className="text-electric">~</span> <span className="terminal-caret" /></p>
        </div>
      </div>
    </div>
  )
}

export function CryptoPreview() {
  return (
    <div className="project-visual crypto-visual">
      <div className="crypto-card">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">Live market</span>
            <div className="mt-2 text-2xl font-semibold tracking-tight text-white">ZK 1.87M</div>
          </div>
          <Search className="h-4 w-4 text-white/30" />
        </div>
        <svg className="mt-5 h-20 w-full overflow-visible" viewBox="0 0 280 80" role="img" aria-label="Rising market trend">
          <defs>
            <linearGradient id="chartFade" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#67a8ff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#67a8ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 68 C20 60, 32 65, 50 54 S84 60, 102 42 S132 49, 152 30 S185 41, 205 22 S245 28, 280 6 L280 80 L0 80 Z" fill="url(#chartFade)" />
          <path d="M0 68 C20 60, 32 65, 50 54 S84 60, 102 42 S132 49, 152 30 S185 41, 205 22 S245 28, 280 6" fill="none" stroke="#67a8ff" strokeWidth="2" />
          <circle cx="280" cy="6" r="4" fill="#ffad66" />
        </svg>
        <div className="mt-3 flex justify-between font-mono text-[9px] text-white/25">
          <span>BTC / ZMW</span><span className="text-[#63d994]">+4.82%</span>
        </div>
      </div>
    </div>
  )
}

export const projectVisuals = {
  zedprocure: ZedPreview,
  mcp: McpPreview,
  goblox: GobloxPreview,
  crypto: CryptoPreview,
}
