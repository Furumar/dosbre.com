"use client";
import Image from "next/image";

export default function HomePage() {
  const scrollToId = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dosbre-root">

      {/* HEADER */}
      <header className="dosbre-header">
        <div className="dosbre-logo">DOSBRE LTD</div>
        <nav>
          <ul className="dosbre-nav">
            <li><button onClick={() => scrollToId("what-is-dosbre")}>Service</button></li>
            <li><button onClick={() => scrollToId("lumi")}>Lumi</button></li>
            <li><button onClick={() => scrollToId("security")}>Security</button></li>
            <li><button onClick={() => scrollToId("projects")}>Projects</button></li>
            <li><button onClick={() => scrollToId("investors")}>Investors</button></li>
          </ul>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="dosbre-main">

        {/* HERO SECTION */}
        <section className="dosbre-hero" id="top">
          <div>
            <h1>Ease Your Process.</h1>
            <p className="hero-subtitle">
              Lumi guides you with clarity, truth, and tranquility.
            </p>
            <p className="hero-body">
              Dosbre is the service that makes complexity feel effortless.
              A sanctuary for your workflow, where intelligence meets emotional ease.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToId("lumi")}>
                Meet Lumi
              </button>
              <button className="btn-secondary" onClick={() => scrollToId("projects")}>
                Explore Projects
              </button>
              <button className="btn-secondary" onClick={() => scrollToId("investors")}>
                Investor Summary
              </button>
            </div>
          </div>
        </section>

        {/* SERVICE SECTION */}
        <section id="what-is-dosbre" className="section-block">
          <h2>What is Dosbre?</h2>
          <p>
            Dosbre is a clarity engine. A system designed to remove friction,
            reduce cognitive load, and make every process feel lighter.
          </p>
        </section>

        {/* LUMI SECTION */}
        <section id="lumi" className="section-block">
          <h2>Meet Lumi</h2>
          <Image
            src="/lumi-hero.png"
            alt="Lumi"
            width={300}
            height={300}
            className="lumi-image"
          />
          <p>
            Lumi is your guide — a calm, intelligent presence that helps you
            navigate complexity with ease.
          </p>
        </section>

        {/* SECURITY SECTION */}
        <section id="security" className="section-block">
          <h2>Security</h2>
          <p>
            Your data, your peace of mind. Dosbre is built with safety and
            integrity at its core.
          </p>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-block">
          <h2>Projects</h2>
          <p>
            Logistics, real estate, infrastructure — Dosbre brings clarity to
            every domain.
          </p>
        </section>

        {/* INVESTORS SECTION */}
        <section id="investors" className="section-block">
          <h2>Investor Summary</h2>
          <p>
            Funding goals, pitch deck, and strategic roadmap — all in one place.
          </p>
        </section>

      </main>

    </div>
  );
}
