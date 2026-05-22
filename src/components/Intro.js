import React from "react";
import "../styles/Intro.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import ParticlePortrait from "./ParticlePortrait";

const Intro = ({ theme }) => {
  return (
    <section id="intro">
      <div className="hero-container">
        {/* ── Text Content ── */}
        <div className="hero-content">
          <FadeInSection>
            <div className="hero-badge">
              <span className="badge-dot" />
              Available for new opportunities
            </div>

            <h1 className="hero-name">
              Anns <span className="gradient-text">Abbasi</span>
            </h1>

            <p className="hero-role">
              Senior Software Engineer · Cloud &amp; DevOps · AI Systems
            </p>

            <p className="hero-desc">
              I architect and ship production-grade systems across web, mobile, cloud, and AI from distributed microservices on AWS to agentic LLM pipelines delivering measurable results in real-world, high-scale environments.
            </p>

            <div className="hero-cta">
              <a
                href="mailto:annsabbasi54@gmail.com?subject=Hello from your portfolio!"
                className="btn-primary"
              >
                Get in Touch
              </a>
              <a href="#projects" className="btn-outline">
                View My Work
              </a>
            </div>

            <div className="hero-socials">
              <a
                className="hero-social-link"
                href="https://github.com/annsabbasi"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <GitHubIcon style={{ fontSize: 18 }} />
              </a>
              <a
                className="hero-social-link"
                href="https://www.linkedin.com/in/annsabbasi/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <LinkedInIcon style={{ fontSize: 19 }} />
              </a>
              <a
                className="hero-social-link"
                href="mailto:annsabbasi54@gmail.com"
                title="Email"
              >
                <EmailRoundedIcon style={{ fontSize: 19 }} />
              </a>
              <div className="hero-social-divider" />
              <span className="hero-company-tag">@ Algotix AI</span>
            </div>
          </FadeInSection>
        </div>

        {/* ── Particle Portrait ── */}
        <div className="hero-visual">
          <FadeInSection delay="150ms">
            <div className="hero-particle-wrap">
              <ParticlePortrait theme={theme} />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Intro;
