import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const stats = [
    { number: "3.5+", label: "Years of Experience" },
    { number: "10+", label: "Production Projects" },
    { number: "40%", label: "Faster Incident Detection" },
    { number: "6×", label: "Doc Processing Speed" },
  ];

  const skills = [
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "React Native", "ElectronJS"],
    },
    {
      label: "Backend",
      items: ["Node.js", "NestJS", "Python", "FastAPI", "Django DRF"],
    },
    {
      label: "AI & LLM",
      items: ["LangChain", "LangGraph", "OpenAI API", "AWS Nova", "RAG Pipelines"],
    },
    {
      label: "Voice & Media",
      items: ["Deepgram (STT)", "ElevenLabs (TTS)", "AssemblyAI", "Twilio"],
    },
    {
      label: "Database & Cache",
      items: ["PostgreSQL", "MongoDB", "Redis", "pgvector", "BullMQ", "AWS SQS"],
    },
    {
      label: "Cloud & DevOps",
      items: ["AWS", "Terraform", "Docker", "GCP", "Nginx", "GitHub Actions"],
    },
    {
      label: "APIs & Auth",
      items: ["GraphQL", "tRPC", "WebSockets", "OAuth 2.0 PKCE", "JWT", "RBAC"],
    },
  ];

  return (
    <div id="about">
      <div className="section-wrapper">
        <FadeInSection>
          <span className="section-label">About me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </FadeInSection>

        {/* Bio + Stats */}
        <FadeInSection delay="100ms">
          <div className="about-grid">
            <div className="about-bio">
              <p>
                I am a <strong>Senior Full-Stack Software Engineer</strong> currently at{" "}
                <a href="https://www.algotix.ai/" target="_blank" rel="noreferrer">
                  Algotix AI
                </a>
                , where I own the end-to-end design and delivery of distributed,
                event-driven microservice systems on AWS from architecture through
                production deployment, monitoring, and incident response. I've delivered
                measurable results including a 40% reduction in incident detection time
                and a 30% drop in production regression bugs.
              </p>
              <p>
                Previously at{" "}
                <a href="https://www.rahmansolutions.com/" target="_blank" rel="noreferrer">
                  Rehman Solutions
                </a>
                , I collaborated in a 5-person engineering team delivering full-stack
                features using React.js, Node.js, and NestJS contributing to
                architecture, CI/CD pipelines, and API performance improvements
                while absorbing best practices across the full engineering lifecycle.
              </p>
              <p>
                I have a deep interest in <strong>Agentic AI systems</strong> and{" "}
                <strong>Generative AI</strong> from building autonomous research
                agents with LangGraph to integrating LLMs and RAG pipelines into
                production workflows. Currently active in Kubernetes, advanced system
                design, and agentic LLM workflows.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((s, i) => (
                <FadeInSection key={i} delay={`${i * 80}ms`}>
                  <div className="stat-card">
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Skills */}
        <FadeInSection delay="150ms">
          <div className="skills-section">
            <span className="section-label">Tech Stack</span>
            <p className="skills-intro">
              Technologies and tools I work with day-to-day across the full stack,
              from client to cloud to AI systems.
            </p>
            <div className="skills-grid">
              {skills.map((group, i) => (
                <FadeInSection key={i} delay={`${i * 60}ms`}>
                  <div className="skill-group">
                    <div className="skill-group-label">{group.label}</div>
                    <ul className="skill-pills">
                      {group.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default About;
