import { maturityLevels } from '../../data/maturity';

/**
 * Level 0 → Level 5, AI-DLC maturity curve. Level 3 (AI-DLC) is where the offering
 * is aimed and renders with primary emphasis. Levels 4–5 are shown, not hidden, but
 * muted — reusing the dashed "More To Come" treatment from Ventures.tsx for the same
 * meaning: real, but not the default destination.
 */
export function MaturityLadder() {
  return (
    <ol className="relative grid gap-6 md:grid-cols-6 md:gap-4">
      <div
        aria-hidden="true"
        className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-p3-red/40 via-p3-red/20 to-transparent md:left-0 md:right-0 md:top-[15px] md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r"
      />

      {maturityLevels.map((lvl) => {
        const isPrimary = lvl.emphasis === 'primary';
        const isMuted = lvl.emphasis === 'muted';

        return (
          <li key={lvl.level} className={`relative pl-11 md:pl-0 ${isMuted ? 'opacity-70' : ''}`}>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-medium absolute left-0 top-0 md:static md:mb-5 ${
                isPrimary
                  ? 'border border-p3-red bg-p3-red text-white'
                  : isMuted
                    ? 'border border-dashed border-white/15 bg-white/5 text-zinc-500'
                    : 'border border-p3-red/30 bg-white/5 text-p3-red'
              }`}
            >
              {lvl.level}
            </div>
            <h3 className={`text-base font-semibold ${isMuted ? 'text-zinc-500' : 'text-white'}`}>
              {lvl.stage}
            </h3>
            <p
              className={`mt-1.5 font-mono text-xs uppercase tracking-wide ${
                isMuted ? 'text-zinc-600' : 'text-p3-red'
              }`}
            >
              {lvl.trigger}
            </p>
            <p className={`mt-2 text-sm leading-relaxed ${isMuted ? 'text-zinc-500' : 'text-zinc-400'}`}>
              {lvl.action}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
