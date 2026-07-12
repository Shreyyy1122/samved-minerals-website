import Layout from "../components/layout/Layout";

function Referral() {
  return (
    <Layout>
      <section className="min-h-screen bg-slate-50 pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="uppercase tracking-[4px] text-yellow-600">
            Referral Program
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Refer a Business
          </h1>

          <p className="mt-8 text-lg text-slate-600">
            Know someone looking for premium-quality bauxite? Refer them to
            SAMVED MINERALS and help us build lasting business partnerships.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default Referral;