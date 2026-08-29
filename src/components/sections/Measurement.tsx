import { Section } from '../layout/Section';
import { Tag } from '../ui/Tag';
import { measurementCategories } from '../../data/measurement';

export function Measurement() {
  return (
    <Section
      id="measurement"
      eyebrow="Show Me What We Got"
      title="AI activity is not the outcome. Software-delivery outcomes are."
      intro="Tokens consumed, licenses purchased, and AI-generated lines of code are not success metrics. These are the categories of outcome we measure an AI-DLC engagement against."
    >
      <div className="flex flex-wrap justify-center gap-2.5">
        {measurementCategories.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </div>
    </Section>
  );
}
