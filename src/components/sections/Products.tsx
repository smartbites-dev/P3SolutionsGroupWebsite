import { Section } from '../layout/Section';
import { productAreas } from '../../data/products';

export function Products() {
  return (
    <Section
      id="products"
      tone="mist"
      eyebrow="Products & Systems"
      title="Software built to run a business, then generalized"
      intro="Our products start as systems we needed ourselves. The ones that prove durable become platforms, tools, and applications other organizations can use."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {productAreas.map(({ id, title, body, icon: Icon }) => (
          <div
            key={id}
            className="flex gap-5 rounded-2xl border border-zinc-200 bg-white p-7 transition-colors duration-300 hover:border-p3-red/40"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-p3-mist">
              <Icon className="h-5 w-5 text-p3-red" />
            </div>
            <div>
              <h3 className="text-lg">{title}</h3>
              <p className="mt-2.5 leading-relaxed text-zinc-600">{body}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center leading-relaxed text-zinc-600">
        Individual products are announced when they are ready to be used, not when they are ready to
        be described.
      </p>
    </Section>
  );
}
