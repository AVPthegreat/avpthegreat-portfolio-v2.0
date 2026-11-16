import {
  profile,
  contact,
  experience,
  projects,
  earlierProjects,
  achievements,
  skills,
} from "./data";

const NAV = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function ExtLink({ href, children, className = "" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`link ${className}`}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="fade border-t border-rule pt-10 mt-14 sm:mt-16">
      <h2 id={`${id}-title`} className="font-serif text-2xl sm:text-[1.75rem] font-semibold tracking-tight mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tech({ items }) {
  if (!items.length) return null;
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-1.5 mt-3" aria-label="Tech used">
      {items.map((t) => (
        <li key={t} className="text-[0.8rem] px-2 py-0.5 rounded border border-rule text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <header className="border-b border-rule">
        <nav aria-label="Main" className="mx-auto max-w-3xl px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <a href="#top" className="font-serif font-semibold text-lg no-underline">{profile.handle}</a>
          <ul className="flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-1 text-[0.9rem] sm:text-[0.95rem]">
            {NAV.map((n) => (
              <li key={n.id}><a className="navlink" href={`#${n.id}`}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-5 sm:px-8 pb-20">
        <div id="top" className="fade pt-14 sm:pt-20">
          <p className="text-muted text-[0.95rem]">{profile.location}</p>
          <h1 className="font-serif text-[2.5rem] leading-[1.1] sm:text-6xl font-semibold tracking-tight mt-2">
            {profile.name}
          </h1>
          <p className="font-serif text-xl sm:text-2xl mt-5 leading-snug">{profile.tagline}</p>
          <p className="mt-6 text-[1.05rem] leading-relaxed max-w-2xl">{profile.bio.join(" ")}</p>
          <p className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            <a className="btn" href={`mailto:${contact.email}`}>Email me</a>
            {contact.links.map((l) => (
              <ExtLink key={l.href} href={l.href} className="self-center">{l.label}</ExtLink>
            ))}
          </p>
        </div>

        <Section id="work" title="Experience">
          {experience.map((e) => (
            <article key={e.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">
                  {e.role}, {e.org}
                </h3>
                <ExtLink href={e.href} className="text-[0.95rem]">{e.linkLabel}</ExtLink>
              </div>
              <p className="mt-1">{e.summary}</p>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-1.5 list-disc pl-5 marker:text-accent">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-10">
            {projects.map((p) => (
              <article key={p.name}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 leading-relaxed">{p.line}</p>
                {p.award && <p className="mt-2 text-[0.95rem]"><span className="font-semibold text-accent">Award:</span> {p.award}</p>}
                {p.hardest && <p className="mt-2 text-[0.95rem]"><span className="font-semibold">Hardest part:</span> {p.hardest}</p>}
                <Tech items={p.tech} />
                {p.links.length > 0 && (
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.95rem]">
                    {p.links.map((l) => <ExtLink key={l.href} href={l.href}>{l.label}</ExtLink>)}
                  </p>
                )}
              </article>
            ))}
          </div>
          <h3 className="font-serif text-lg font-semibold mt-12 mb-3">Earlier projects</h3>
          <ul className="space-y-1.5 list-disc pl-5 marker:text-accent">
            {earlierProjects.map((p) => (
              <li key={p.name}><span className="font-semibold">{p.name}</span>: {p.line}</li>
            ))}
          </ul>
        </Section>

        <Section id="achievements" title="Achievements">
          <ul className="space-y-2 list-disc pl-5 marker:text-accent leading-relaxed">
            {achievements.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-1 sm:gap-y-2.5">
            {skills.map((s) => (
              <div key={s.group} className="contents">
                <dt className="font-semibold">{s.group}</dt>
                <dd className="mb-3 sm:mb-0">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-[1.05rem]">The best way to reach me is email.</p>
          <ul className="mt-4 space-y-2">
            <li>Email: <a className="link" href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>Phone: <a className="link" href={contact.phoneHref}>{contact.phone}</a></li>
            {contact.links.map((l) => (
              <li key={l.href}>{l.label}: <ExtLink href={l.href}>{l.href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}</ExtLink></li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-rule">
        <p className="mx-auto max-w-3xl px-5 sm:px-8 py-6 text-[0.9rem] text-muted">
          {profile.name} &middot; {profile.location}
        </p>
      </footer>
    </>
  );
}
