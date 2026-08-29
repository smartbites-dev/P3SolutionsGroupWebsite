import { ArrowRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Tag } from '../ui/Tag';
import { StackDiagram } from '../diagrams/StackDiagram';

const deliveryLayers = ['Assess', 'Design & Standardize', 'Prove & Progress'];

export function AiDlc() {
  return (
    <Section
      id="ai-dlc"
      tone="dark"
      eyebrow="AI-Driven Software Delivery"
      title="Individual AI adoption is not an engineering capability"
      intro="Developers using Copilot, Claude, or Codex are not the same thing as an organization with a governed AI practice. P3 AI-DLC — our methodology for AI-driven software delivery — closes that gap: assessing where you are, designing the standards and controls that let AI participate safely, and proving the result in outcomes, not adoption numbers."
      className="relative overflow-hidden"
    >
      <div aria-hidden="true" className="p3-grid-dark pointer-events-none absolute inset-0" />

      <div className="relative">
        <StackDiagram />

        <div className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-12 text-center">
          <p className="text-lg leading-relaxed text-zinc-400">
            AI handles drafting, retrieval, and repetitive execution. Architecture, risk, and
            accountability stay with people — by design, not as a limitation.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {deliveryLayers.map((layer) => (
              <Tag key={layer} tone="dark">
                {layer}
              </Tag>
            ))}
          </div>

          <div className="mt-10">
            <Button href="#contact">
              Assess Your AI Engineering Maturity
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
