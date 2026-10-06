import Image from "next/image";
import { Arrow } from "./components/icons";
import { Gallery, Header, Reveal, ShareLink } from "./components/portfolio";
import { projects, skillGroups } from "./content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Контент · Креатив · Стратегия</p>
            <h1 id="hero-title" className="hero-title" lang="en">
              <span>
                Content <span className="hero-amp">&</span>
              </span>
              <span className="serif hero-creative">Creative</span>
              <span>
                Specialist<span className="title-dot">.</span>
              </span>
            </h1>
            <p className="hero-name">Юлиана Старостина</p>
            <p className="hero-description">
              Работаю с контентом от идеи и продуктового смысла до реализации и
              аналитики. Опыт в fashion, wedding и персональном продвижении.
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href="#cases">
                Смотреть кейсы <Arrow direction="down" />
              </a>
              <a className="text-link" href="#contact">
                Связаться <Arrow />
              </a>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-frame">
              <Image
                src="/images/portfolio/portrait.webp"
                alt="Юлиана Старостина"
                fill
                priority
                sizes="(max-width: 780px) 90vw, 40vw"
              />
              <span className="portrait-stamp" aria-hidden="true">
                Y / S
              </span>
            </div>
            <figcaption>
              <span>Человек за контентом</span>
              <span>01 / Portfolio</span>
            </figcaption>
          </figure>
          <div className="hero-bottom">
            <span>Social media · Fashion · Content production</span>
            <a href="#cases">
              Selected work <Arrow direction="down" />
            </a>
          </div>
        </section>

        <section id="cases" className="work shell" aria-labelledby="work-title">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">01 / Избранные проекты</p>
              <h2 id="work-title">
                Контент, который
                <br />
                <span className="serif">решает задачу.</span>
              </h2>
            </div>
            <p className="section-intro">
              Люблю находить смысл в продукте и продавать его через идею, а не
              просто через красивую картинку.
            </p>
          </Reveal>
          <nav className="project-index" aria-label="Навигация по кейсам">
            {projects.map((project, index) => (
              <a key={project.id} href={`#${project.id}`}>
                <span className="index-number">0{index + 1}</span>
                <span>{project.shortName}</span>
                <Arrow direction="down" />
              </a>
            ))}
          </nav>
          {projects.map((project, index) => (
            <article
              id={project.id}
              className="project"
              key={project.id}
              aria-labelledby={`${project.id}-title`}
            >
              <Reveal>
                <div className="project-topline">
                  <span>Case study / 0{index + 1}</span>
                  <span>{project.category}</span>
                </div>
                <div className="project-heading">
                  <h3 id={`${project.id}-title`}>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </Reveal>
              <div className="project-layout">
                <Reveal className="project-visual">
                  <Gallery images={project.images} title={project.title} />
                </Reveal>
                <Reveal className="project-copy">
                  <p className="eyebrow">Мой вклад</p>
                  {project.description.map((paragraph) => (
                    <p className="project-description" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  <ul className="project-tasks">
                    {project.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                  <div className="project-outcome">
                    <p className="eyebrow">{project.outcome.label}</p>
                    <p
                      className={`outcome-title${project.id === "me-me" ? " outcome-numeric" : ""}`}
                    >
                      {project.outcome.title}
                    </p>
                    <p className="outcome-description">
                      {project.outcome.description}
                    </p>
                  </div>
                </Reveal>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section
          id="approach"
          className="approach"
          aria-labelledby="approach-title"
        >
          <div className="shell approach-layout">
            <Reveal className="approach-copy">
              <p className="eyebrow">02 / Подход</p>
              <h2 id="approach-title">
                От смысла
                <br />
                <span className="serif">к реализации.</span>
              </h2>
              <p>
                Быстро погружаюсь в проект, разбираю задачу, нахожу смысл,
                собираю идею в систему и довожу её до реализации. Мне комфортно
                работать на стыке контента, креатива, аналитики и координации.
              </p>
              <ol className="process-list">
                {["Идея", "ТЗ", "Производство", "Контроль", "Анализ"].map(
                  (step, index) => (
                    <li key={step}>
                      <span>0{index + 1}</span>
                      {step}
                      <Arrow />
                    </li>
                  ),
                )}
              </ol>
            </Reveal>
            <Reveal className="approach-image">
              <Image
                src="/images/portfolio/process.webp"
                alt="Визуальный материал из портфолио: свадебная история"
                fill
                sizes="(max-width: 780px) 90vw, 40vw"
              />
              <span className="image-caption">Идея. Смысл. Детали.</span>
            </Reveal>
          </div>
        </section>

        <section
          id="skills"
          className="skills shell"
          aria-labelledby="skills-title"
        >
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">03 / Компетенции</p>
              <h2 id="skills-title">
                Полный
                <br />
                <span className="serif">контентный цикл.</span>
              </h2>
            </div>
            <p className="section-intro">
              Не только производство публикаций, а полный контентный цикл вокруг
              продукта и задачи.
            </p>
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <Reveal className="skill-group" key={group.title}>
                <span className="index-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="platforms">
            <span className="eyebrow">Площадки</span>
            <p>
              Telegram <span>/</span> VK <span>/</span> Instagram <span>/</span>{" "}
              Threads
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="contact" aria-labelledby="contact-title">
        <div className="shell">
          <Reveal>
            <div className="contact-topline">
              <p className="eyebrow">04 / На связи</p>
              <span>Обсудим вашу задачу</span>
            </div>
            <h2 id="contact-title">
              Давайте делать
              <br />
              <span className="serif">контент со смыслом.</span>
            </h2>
          </Reveal>
          <div className="contact-links">
            <a
              href="https://t.me/iylianayp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">Написать в Telegram</span>
              <span className="contact-value">
                @iylianayp <Arrow />
              </span>
            </a>
            <a href="mailto:juliastarostina66@gmail.com">
              <span className="contact-label">Написать на почту</span>
              <span className="contact-value contact-email">
                juliastarostina66@gmail.com <Arrow />
              </span>
            </a>
            <a
              href="https://behance.net/yulianastarostina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">Больше визуальных работ</span>
              <span className="contact-value">
                Behance <Arrow />
              </span>
            </a>
          </div>
          <div className="footer-bottom">
            <p>
              © 2026 Юлиана Старостина
              <span>Content & Creative Specialist</span>
            </p>
            <ShareLink />
            <a className="back-to-top" href="#top">
              Наверх <Arrow direction="up" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
