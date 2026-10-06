"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { PortfolioImage } from "../content";
import { Arrow } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 781px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header className="site-header" id="top">
      <div className="header-inner shell">
        <a
          className="brand"
          href="#top"
          aria-label="Юлиана Старостина — начало страницы"
        >
          <span className="brand-monogram" aria-hidden="true">
            ys.
          </span>
          <span>
            Юлиана
            <br />
            Старостина
          </span>
        </a>
        <span className="header-role">Content & Creative Specialist</span>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          {open ? "Закрыть" : "Меню"}
          <span
            className={`menu-lines${open ? " menu-lines-open" : ""}`}
            aria-hidden="true"
          >
            <i />
            <i />
          </span>
        </button>
        <nav
          id="site-navigation"
          className={`site-navigation${open ? " navigation-open" : ""}`}
          aria-label="Основная навигация"
        >
          {[
            ["#cases", "Кейсы"],
            ["#approach", "Подход"],
            ["#skills", "Навыки"],
            ["#contact", "Контакты"],
          ].map(([href, label]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {label}
              {href === "#contact" && <Arrow />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    node.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove("reveal-pending");
          observer.disconnect();
        }
      },
      { threshold: 0.06 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.classList.remove("reveal-pending");
    };
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function Gallery({
  images,
  title,
}: {
  images: PortfolioImage[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const image = images[index];
  const change = (offset: number) =>
    setIndex((current) => (current + offset + images.length) % images.length);
  const close = () => dialog.current?.close();
  const open = () => {
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    setEnlarged(true);
  };
  useEffect(() => {
    const node = dialog.current;
    return () => {
      if (node?.open) document.body.style.overflow = previousOverflow.current;
    };
  }, []);
  return (
    <div
      className="gallery"
      role="region"
      aria-label={`Материалы кейса ${title}`}
    >
      <button
        className="gallery-main"
        onClick={open}
        type="button"
        aria-label={`Увеличить: ${image.alt}`}
        aria-haspopup="dialog"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 780px) 90vw, 52vw"
          quality={85}
        />
        <span className="gallery-enlarge" aria-hidden="true">
          <Arrow />
        </span>
      </button>
      <div className="gallery-meta">
        <p aria-live="polite" aria-atomic="true">
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
          {image.caption}
        </p>
        {images.length > 1 && (
          <div className="gallery-controls">
            <button
              type="button"
              onClick={() => change(-1)}
              aria-label={`Предыдущее изображение: ${title}`}
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              onClick={() => change(1)}
              aria-label={`Следующее изображение: ${title}`}
            >
              <Arrow direction="right" />
            </button>
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails" aria-label="Выбрать изображение">
          {images.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(itemIndex)}
              aria-label={`Показать: ${item.caption}`}
              aria-pressed={index === itemIndex}
            >
              <Image src={item.src} alt="" fill sizes="72px" />
            </button>
          ))}
        </div>
      )}
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={`${title}: просмотр материалов`}
        onClose={() => {
          setEnlarged(false);
          document.body.style.overflow = previousOverflow.current;
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          const controls = Array.from(
            event.currentTarget.querySelectorAll<HTMLButtonElement>(
              "button:not([disabled])",
            ),
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }
        if (event.key === "ArrowRight") {
            event.preventDefault();
            change(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            change(-1);
          }
        }}
      >
        <div className="lightbox-top">
          <p>
            {title}
            <span>
              {index + 1} / {images.length}
            </span>
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть просмотр изображения"
            autoFocus
          >
            Закрыть <span aria-hidden="true">×</span>
          </button>
        </div>
        {enlarged && (
          <div className="lightbox-image">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="95vw"
              quality={95}
            />
          </div>
        )}
        <div className="lightbox-bottom">
          {images.length > 1 && (
            <button
              type="button"
              onClick={() => change(-1)}
              aria-label="Предыдущее изображение"
            >
              <Arrow direction="left" />
            </button>
          )}
          <p aria-live="polite">{image.caption}</p>
          {images.length > 1 && (
            <button
              type="button"
              onClick={() => change(1)}
              aria-label="Следующее изображение"
            >
              <Arrow direction="right" />
            </button>
          )}
        </div>
      </dialog>
    </div>
  );
}

export function ShareLink() {
  const [message, setMessage] = useState("");
  const [fallback, setFallback] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copy = async () => {
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    try {
      await navigator.clipboard.writeText(url.toString());
      setMessage("Ссылка скопирована");
      setFallback("");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setMessage(""), 4000);
    } catch {
      setFallback(url.toString());
      setMessage("Выделите и скопируйте ссылку");
    }
  };
  return (
    <div className="share">
      <button className="share-button" onClick={copy} type="button">
        Поделиться портфолио <Arrow />
      </button>
      <span className="share-status" role="status">
        {message}
      </span>
      {fallback && (
        <input
          className="share-fallback"
          aria-label="Ссылка на портфолио"
          value={fallback}
          readOnly
          onFocus={(event) => event.target.select()}
        />
      )}
    </div>
  );
}
