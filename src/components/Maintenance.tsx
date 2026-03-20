export default function Maintenance() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-16">
        <div className="terminal scanlines w-full">
          <div className="terminal-bar">
            <span className="status-dot online status-pulse" />
            <span className="text-xs tracking-[0.12em] text-dimmed uppercase">
              System Status
            </span>
          </div>

          <div className="terminal-body space-y-4">
            <p>
              <span className="prompt">ketan@devops:~$</span>{" "}
              <span className="cmd">maintenance --status</span>
            </p>

            <div className="rounded-md border border-border bg-[#0a0f14] p-4">
              <p className="output text-sm">[ MAINTENANCE MODE ACTIVE ]</p>
              <p className="mt-2 text-sm text-muted">
                Portfolio services are temporarily offline for upgrades and tuning.
              </p>
            </div>

            <div className="space-y-2 text-sm text-muted">
              <p>
                <span className="comment"># ETA:</span> Back shortly
              </p>
              <p>
                <span className="comment"># Purpose:</span> Performance improvements and
                infrastructure updates
              </p>
            </div>

            <p className="pt-2 text-sm">
              <span className="prompt">ketan@devops:~$</span>{" "}
              <span className="cmd">echo Thank_you_for_your_patience</span>
            </p>
            <p className="output text-sm">Thank you for your patience.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
