interface RecruiterScanItem {
  label: string;
  value: string;
}

export default function RecruiterScan({
  items,
  className = "",
}: {
  items: RecruiterScanItem[];
  className?: string;
}) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ${className}`.trim()}>
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-4 py-3"
        >
          <p className="text-[10px] uppercase tracking-[0.14em] text-emerald-400/80">
            {item.label}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-200">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
