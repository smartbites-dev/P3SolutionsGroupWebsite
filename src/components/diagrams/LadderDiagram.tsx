import { ladder } from '../../data/ladder';

/**
 * Work → Checklist → System → Automation → Agent.
 * Horizontal rail on desktop, vertical rail on mobile.
 */
export function LadderDiagram() {
  return (
    <ol className="relative grid gap-6 md:grid-cols-5 md:gap-4">
      {/* Connecting rail */}
      <div
        aria-hidden="true"
        className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-p3-red/40 via-p3-red/20 to-transparent md:left-0 md:right-0 md:top-[15px] md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r"
      />

      {ladder.map((step, i) => (
        <li key={step.stage} className="relative pl-11 md:pl-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-p3-red/30 bg-white font-mono text-xs font-medium text-p3-red absolute left-0 top-0 md:static md:mb-5">
            {i + 1}
          </div>
          <h3 className="text-base font-semibold text-p3-ink">{step.stage}</h3>
          <p className="mt-1.5 font-mono text-xs uppercase tracking-wide text-p3-red-deep">
            {step.trigger}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.action}</p>
        </li>
      ))}
    </ol>
  );
}
