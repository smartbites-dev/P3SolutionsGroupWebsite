import { ChevronDown } from 'lucide-react';
import { sdlcStack } from '../../data/sdlcStack';

/** Vertical stack showing the software delivery lifecycle AI-DLC works inside. */
export function StackDiagram() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      {sdlcStack.map((stage, i) => (
        <div key={stage.name}>
          <div
            className={`rounded-xl border px-5 py-4 transition-colors duration-200 sm:px-6 ${
              stage.accent
                ? 'border-p3-red/40 bg-p3-red/[0.07]'
                : 'border-white/12 bg-white/[0.03]'
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span
                className={`text-sm font-semibold sm:text-base ${
                  stage.accent ? 'text-white' : 'text-zinc-200'
                }`}
              >
                {stage.name}
              </span>
              <span className="font-mono text-xs text-zinc-500">{stage.detail}</span>
            </div>
          </div>

          {i < sdlcStack.length - 1 && (
            <div className="flex justify-center py-1.5" aria-hidden="true">
              <ChevronDown className="h-4 w-4 text-zinc-600" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
