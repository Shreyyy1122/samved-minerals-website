import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 4,
    suffix: "+",
    title: "Years of Experience",
  },
  {
    number: 500,
    suffix: "K+",
    title: "Metric Tons Supplied",
  },
  {
    number: 20,
    suffix: "+",
    title: "Business Partners",
  },
  {
    number: 5,
    suffix: "+",
    title: "Export Destinations",
  },
];

function Stats() {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-yellow-500">
            Our Achievements
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Numbers That Matter
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We continue to grow through quality products,
            dependable exports, and trusted business relationships.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-700 bg-slate-800 p-10 text-center transition duration-300 hover:-translate-y-2 hover:border-yellow-500"
            >
              <h3 className="text-6xl font-black text-yellow-500">
                {item.number}
                {item.suffix}
              </h3>

              <p className="mt-5 text-lg text-slate-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;