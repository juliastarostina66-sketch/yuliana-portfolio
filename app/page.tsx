"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type CaseHeaderProps = {
  left: string
  right: string
  number: string
}

function CaseHeader({ left, right, number }: CaseHeaderProps) {
  return (
    <div className="flex items-start justify-between text-[14px] md:text-[18px] text-[#b14f4a] mb-8 md:mb-10">
      <span>{left}</span>
      <div className="flex items-center gap-4 md:gap-6">
        <span>{right}</span>
        <span>({number})</span>
      </div>
    </div>
  )
}

type ImageCardProps = {
  src: string
  alt: string
  widthClass?: string
  heightClass?: string
  contain?: boolean
}

function ImageCard({
  src,
  alt,
  widthClass = "min-w-[86vw] md:min-w-[360px]",
  heightClass = "h-[320px] md:h-[500px]",
  contain = true,
}: ImageCardProps) {
  return (
    <div
      className={`${widthClass} ${heightClass} shrink-0 rounded-[24px] md:rounded-[28px] bg-[#f7f6f2] border border-black/5 overflow-hidden flex items-center justify-center p-2 md:p-4 snap-start`}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={`w-full h-full rounded-[18px] md:rounded-[20px] ${
          contain ? "object-contain object-center bg-[#f7f6f2]" : "object-cover object-center"
        }`}
      />
    </div>
  )
}

type DragGalleryProps = {
  children: React.ReactNode
  className?: string
}

function DragGallery({ children, className = "" }: DragGalleryProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const stateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  })

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    stateRef.current.isDown = true
    stateRef.current.startX = e.pageX - el.offsetLeft
    stateRef.current.scrollLeft = el.scrollLeft
  }

  const onMouseLeave = () => {
    stateRef.current.isDown = false
  }

  const onMouseUp = () => {
    stateRef.current.isDown = false
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || !stateRef.current.isDown) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - stateRef.current.startX) * 1.1
    el.scrollLeft = stateRef.current.scrollLeft - walk
  }

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`overflow-x-auto pb-3 md:pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ scrollbarColor: "#b8b8b8 transparent" }}
    >
      <div className="flex gap-4 md:gap-6 w-max">{children}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-[#ececea] text-[#111111]">

      {/* HERO */}
      <section className="px-3 md:px-6 pt-3 md:pt-6">
        <div className="max-w-[1680px] mx-auto bg-[#efefed] overflow-hidden">

          {/* MOBILE HERO */}
          <div className="md:hidden relative min-h-[92vh] overflow-hidden">
            <img
              src="/images/hero/hero.jpg"
              alt="Юлиана Старостина"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(239,239,237,0.78),rgba(239,239,237,0.18),rgba(239,239,237,0.92))]" />

            <div className="relative z-10 px-5 pt-6 pb-8 min-h-[92vh] flex flex-col justify-between">
              <div className="flex items-start justify-between text-[14px] leading-[1.05] text-[#b14f4a]">
                <span>Social media</span>
                <div className="text-left">
                  <div>Portfolio</div>
                  <div>SMM</div>
                  <div>Visual content</div>
                  <div>Design</div>
                </div>
                <div className="flex items-center gap-3">
                  <span>Russia</span>
                  <span>(01)</span>
                </div>
              </div>

              <div className="pt-16">
                <p className="text-[#b14f4a] text-[16px] mb-3">Social media</p>

                <h1 className="text-[48px] leading-[0.9] tracking-[-0.06em] font-semibold mb-4">
                  Creative
                  <span className="text-[#b14f4a] font-medium">(manager)</span>
                </h1>

                <p className="text-[20px] leading-[1] tracking-[-0.03em] mb-3">
                  Юлиана Старостина
                </p>

                <p className="text-[16px] leading-[1.05] text-black/75 max-w-[320px] mb-8">
                  SMM-специалист и visual content creator.
                  Упаковываю бренды через визуал, контент, Telegram и сторителлинг.
                </p>

                <p className="text-[#b14f4a] text-[15px] leading-[1.05] max-w-[340px]">
                  Контент должен не просто выглядеть красиво — он должен работать на образ бренда,
                  удерживать внимание и делать коммуникацию цельной.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP HERO */}
          <div className="hidden md:block">
            <div className="px-6 md:px-8 pt-6 md:pt-8">
              <div className="flex items-start justify-between text-[15px] md:text-[18px] text-[#b14f4a]">
                <span>Social media</span>
                <div className="text-left leading-[1]">
                  <div>Portfolio</div>
                  <div>SMM</div>
                  <div>Visual content</div>
                  <div>Design</div>
                </div>
                <div className="flex items-center gap-6">
                  <span>Russia</span>
                  <span>(01)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-[1.02fr_1.2fr] gap-8 px-6 md:px-8 pt-10 md:pt-14">
              <Reveal className="flex flex-col justify-between pb-8 md:pb-12">
                <div>
                  <p className="text-[#b14f4a] text-xl md:text-2xl mb-4">
                    Social media
                  </p>

                  <h1 className="text-[54px] md:text-[116px] leading-[0.9] tracking-[-0.05em] font-semibold mb-6">
                    Creative
                    <span className="text-[#b14f4a] font-medium">(manager)</span>
                  </h1>

                  <p className="text-[22px] md:text-[34px] leading-[1] tracking-[-0.03em] mb-4">
                    Юлиана Старостина
                  </p>

                  <p className="text-[18px] md:text-[30px] leading-[1.05] max-w-[760px] tracking-[-0.03em] text-black/70">
                    SMM-специалист и visual content creator.
                    Упаковываю бренды через визуал, контент, Telegram и сторителлинг.
                  </p>
                </div>

                <div className="pt-12 md:pt-20">
                  <p className="text-[#b14f4a] text-[16px] md:text-[20px] leading-[1.05] max-w-[560px]">
                    Контент должен не просто выглядеть красиво — он должен работать
                    на образ бренда, удерживать внимание и делать коммуникацию цельной.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="relative">
                <div className="relative h-[520px] md:h-[860px] overflow-hidden">
                  <img
                    src="/images/hero/hero.jpg"
                    alt="Юлиана Старостина"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#b14f4a]/10 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>



      {/* ABOUT ME */}
      <section className="px-3 md:px-6 pt-4 md:pt-6">
        <div className="max-w-[1680px] mx-auto bg-[#efefed] px-5 md:px-8 py-6 md:py-10">
          <CaseHeader left="About me" right="Social media" number="02" />

          <div className="grid md:grid-cols-[1.08fr_0.92fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-10 text-[16px] md:text-[23px] leading-[1.05] tracking-[-0.03em]">
                <div>
                  <p className="text-[#b14f4a] mb-5 md:mb-6">Hello,</p>

                  <p className="mb-5 md:mb-6">
                    Меня зовут Юлиана. Я SMM-специалист с сильной визуальной базой
                    и опытом работы на стыке маркетинга, дизайна и контента.
                    Мой путь начался с графики и визуала: я изучала Figma,
                    Illustrator и Photoshop, работала с брендами и постепенно
                    пришла к более широким задачам по упаковке продукта в соцсетях.
                  </p>

                  <p>
                    Сейчас я умею не только собирать визуально сильный контент,
                    но и выстраивать систему: анализировать конкурентов,
                    структурировать подачу, редактировать тексты, формировать
                    контент-логику и поддерживать единый стиль бренда
                    в разных форматах и каналах.
                  </p>
                </div>

                <div>
                  <p className="text-[#b14f4a] mb-5 md:mb-6 leading-[0.95]">
                    creative
                    <br />
                    and
                    <br />
                    skills
                  </p>

                  <p className="mb-5 md:mb-6">
                    Мои сильные стороны — структурность, визуальное мышление,
                    насмотренность и умение быстро погружаться в проект.
                    Мне важно понимать, как работает продукт, кто его аудитория
                    и зачем именно этот контент нужен бренду.
                  </p>

                  <p className="mb-5 md:mb-6">
                    Я работала с Telegram-каналами, Instagram, визуальными концепциями,
                    креативными постами, рекламными материалами, stories
                    и контентом для брендов из разных сфер: от свадебных проектов
                    и мероприятий до lifestyle и community-продуктов.
                  </p>

                  <p>
                    Для меня SMM — это не набор хаотичных публикаций,
                    а продуманная система, где визуал, текст и логика работают вместе.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="hidden md:block">
              <div className="ml-auto max-w-[560px]">
                <img
                  src="/images/hero/hero_2.jpg"
                  alt="Юлиана Старостина"
                  className="w-full h-[620px] object-cover"
                  draggable={false}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>



      {/* SKILLS */}
      <section className="px-3 md:px-6 pt-4 md:pt-6">
        <div className="max-w-[1680px] mx-auto bg-[#efefed] px-5 md:px-8 py-6 md:py-10">
          <CaseHeader left="About me" right="Social media" number="03" />

          <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-10 md:gap-12">
            <Reveal>
              <div>
                <h2 className="text-[34px] md:text-[58px] leading-none tracking-[-0.04em] font-semibold mb-6 md:mb-8">
                  Skills
                </h2>

                <div className="text-[19px] md:text-[32px] leading-[1.05] tracking-[-0.03em]">
                  <p>Figma</p>
                  <p>CapCut</p>
                  <p>Photoshop</p>
                  <p>Illustrator</p>
                  <p>Notion</p>
                  <p>Google Sheets</p>
                  <p>Telegram</p>
                  <p>Instagram</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-[16px] md:text-[24px] leading-[1.05] tracking-[-0.03em]">
                <div>
                  <h3 className="text-[28px] md:text-[44px] font-semibold mb-5 md:mb-6">
                    SOFT SKILLS:
                  </h3>
                  <div className="space-y-4 md:space-y-5">
                    <div className="border-t border-black/30 pt-3">Креативность</div>
                    <div className="border-t border-black/30 pt-3">Коммуникация</div>
                    <div className="border-t border-black/30 pt-3">Аналитическое мышление</div>
                    <div className="border-t border-black/30 pt-3">Организованность</div>
                    <div className="border-t border-black/30 pt-3">Адаптивность</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-[28px] md:text-[44px] font-semibold mb-5 md:mb-6">
                    HARD SKILLS:
                  </h3>
                  <div className="space-y-4 md:space-y-5">
                    <div className="border-t border-black/30 pt-3">Контент-дизайн</div>
                    <div className="border-t border-black/30 pt-3">Stories и сторителлинг</div>
                    <div className="border-t border-black/30 pt-3">Копирайтинг и редактура</div>
                    <div className="border-t border-black/30 pt-3">Анализ конкурентов</div>
                    <div className="border-t border-black/30 pt-3">Контент-планирование</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>



      {/* LUMI */}
      <section className="px-3 md:px-6 pt-4 md:pt-6">
        <div className="max-w-[1680px] mx-auto bg-[#efefed] px-5 md:px-8 py-6 md:py-10">
          <CaseHeader left="Case study" right="Lumi wedding agency" number="04" />

          <Reveal>
            <h2 className="text-[36px] md:text-[92px] leading-[0.95] tracking-[-0.05em] font-semibold mb-6 md:mb-8">
              Lumi
              <span className="text-[#b14f4a]"> / wedding</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-10 mb-12 md:mb-16">
            <Reveal className="text-[16px] md:text-[25px] leading-[1.08] tracking-[-0.03em]">
              <p className="mb-4 md:mb-5">
                <b>Lumi</b> — молодое свадебное агентство, которому было важно
                сформировать узнаваемый визуальный стиль и выстроить
                цельную подачу бренда в социальных сетях.
              </p>
              <p className="mb-4 md:mb-5">
                Перед началом работы я анализировала визуальные решения конкурентов,
                структуру их контента и способы подачи кейсов. Это помогло определить,
                какие форматы лучше передают атмосферу свадебных проектов
                и удерживают внимание аудитории.
              </p>
              <p>
                В проекте я закрывала задачи, связанные с визуальной упаковкой,
                контент-логикой, stories, креативными постами и сторителлингом
                свадебных кейсов.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="text-[15px] md:text-[22px] leading-[1.1] tracking-[-0.03em]">
              <div className="space-y-3 md:space-y-4">
                <div className="border-t border-black/30 pt-3">— разработка визуального стиля аккаунта</div>
                <div className="border-t border-black/30 pt-3">— создание дизайна постов и stories</div>
                <div className="border-t border-black/30 pt-3">— структурирование Instagram-ленты</div>
                <div className="border-t border-black/30 pt-3">— разработка креативных постов</div>
                <div className="border-t border-black/30 pt-3">— оформление отзывов клиентов</div>
                <div className="border-t border-black/30 pt-3">— сторителлинг свадебных проектов</div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Ребрендинг
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard
              src="/images/lumi/01_rebrand_1.jpg"
              alt="Lumi ребрендинг 1"
              widthClass="min-w-[86vw] md:min-w-[520px]"
              heightClass="h-[260px] md:h-[440px]"
            />
            <ImageCard
              src="/images/lumi/01_rebrand_2.jpg"
              alt="Lumi ребрендинг 2"
              widthClass="min-w-[86vw] md:min-w-[520px]"
              heightClass="h-[260px] md:h-[440px]"
            />
          </DragGallery>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Анимация логотипа
            </h3>
          </Reveal>
          <Reveal className="mb-12 md:mb-16">
            <div className="max-w-[980px] rounded-[24px] md:rounded-[28px] bg-[#f7f6f2] border border-black/5 overflow-hidden p-2 md:p-4">
              <video
                src="/images/lumi/logo_motion.mp4"
                className="w-full rounded-[18px] md:rounded-[20px]"
                controls
                playsInline
                muted
                preload="metadata"
              />
            </div>
          </Reveal>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Новый визуальный стиль
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard
              src="/images/lumi/02_visual_1.jpg"
              alt="Lumi визуальный стиль"
              widthClass="min-w-[90vw] md:min-w-[980px]"
              heightClass="h-[280px] md:h-[520px]"
            />
          </DragGallery>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Серия креативных постов
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard src="/images/lumi/03_post_1.jpg" alt="Lumi креативный пост 1" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/lumi/03_post_2.jpg" alt="Lumi креативный пост 2" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/lumi/03_post_3.jpg" alt="Lumi креативный пост 3" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/lumi/03_post_4.jpg" alt="Lumi креативный пост 4" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
          </DragGallery>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Оформление отзывов
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard src="/images/lumi/04_review_1.jpg" alt="Lumi отзыв 1" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/lumi/04_review_2.jpg" alt="Lumi отзыв 2" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/lumi/04_review_3.jpg" alt="Lumi отзыв 3" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
          </DragGallery>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Сторителлинг свадеб
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard src="/images/lumi/05_story_1.jpg" alt="Lumi story 1" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/lumi/05_story_2.jpg" alt="Lumi story 2" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/lumi/05_story_3.jpg" alt="Lumi story 3" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/lumi/05_story_4.jpg" alt="Lumi story 4" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
          </DragGallery>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-[16px] md:text-[24px] leading-[1.08] tracking-[-0.03em] text-black/75">
            <Reveal>
              <h3 className="text-[24px] md:text-[40px] text-[#b14f4a] mb-4">
                SMM работа
              </h3>
              <p className="mb-4">
                Помимо визуального дизайна я участвовала в разработке
                контент-структуры аккаунта и продумывала,
                как публикации будут работать как единая система.
              </p>
              <p>
                Основной акцент был на эмоциональной упаковке,
                визуальной цельности и форматах, которые повышают вовлечение
                и лучше раскрывают атмосферу проектов.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="text-[24px] md:text-[40px] text-[#b14f4a] mb-4">
                Результат
              </h3>
              <p>
                В результате был сформирован целостный визуальный стиль бренда
                и система контента для соцсетей. Аккаунт стал выглядеть
                более структурированным, а публикации — лучше передавать эстетику,
                настроение и ценности агентства.
              </p>
            </Reveal>
          </div>
        </div>
      </section>



      {/* MAYAK */}
      <section className="px-3 md:px-6 pt-4 md:pt-6">
        <div className="max-w-[1680px] mx-auto bg-[#efefed] px-5 md:px-8 py-6 md:py-10">
          <CaseHeader left="Case study" right="Mayak camp" number="05" />

          <Reveal>
            <h2 className="text-[36px] md:text-[92px] leading-[0.95] tracking-[-0.05em] font-semibold mb-6 md:mb-8">
              Mayak
              <span className="text-[#b14f4a]"> / telegram</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-10 mb-12 md:mb-16">
            <Reveal className="text-[16px] md:text-[25px] leading-[1.08] tracking-[-0.03em]">
              <p className="mb-4 md:mb-5">
                <b>Mayak Camp</b> — творческий арт-кэмп, который развивается
                через социальные сети и Telegram-канал. Моей задачей было
                создавать визуальный контент, который передаёт атмосферу проекта
                и поддерживает его узнаваемость.
              </p>
              <p className="mb-4 md:mb-5">
                Я работала с промо-постами, развитием визуального языка,
                рекламными креативами и оформлением Telegram-канала.
              </p>
              <p>
                В этом кейсе важна не только дизайн-часть, но и SMM-логика:
                как сделать контент читаемым, как усилить Telegram как площадку бренда
                и как через визуал передать характер проекта.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="text-[15px] md:text-[22px] leading-[1.1] tracking-[-0.03em]">
              <div className="space-y-3 md:space-y-4">
                <div className="border-t border-black/30 pt-3">— создание визуалов для контента</div>
                <div className="border-t border-black/30 pt-3">— разработка промо-постов о кэмпе</div>
                <div className="border-t border-black/30 pt-3">— поддержание и развитие визуального стиля</div>
                <div className="border-t border-black/30 pt-3">— дизайн рекламных материалов</div>
                <div className="border-t border-black/30 pt-3">— обновление оформления Telegram-канала</div>
                <div className="border-t border-black/30 pt-3">— участие в контент-логике публикаций</div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Промо-пост о кэмпе
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard src="/images/mayak/01_post_1.jpg" alt="Mayak пост 1" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/01_post_2.jpg" alt="Mayak пост 2" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/01_post_3.jpg" alt="Mayak пост 3" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/01_post_4.jpg" alt="Mayak пост 4" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/01_post_5.jpg" alt="Mayak пост 5" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/01_post_6.jpg" alt="Mayak пост 6" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/01_post_7.jpg" alt="Mayak пост 7" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
          </DragGallery>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Поддержание и развитие визуального стиля
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard src="/images/mayak/02_visual_1.jpg" alt="Mayak визуал 1" widthClass="min-w-[88vw] md:min-w-[620px]" heightClass="h-[260px] md:h-[440px]" />
            <ImageCard src="/images/mayak/02_visual_2.jpg" alt="Mayak визуал 2" widthClass="min-w-[88vw] md:min-w-[620px]" heightClass="h-[260px] md:h-[440px]" />
            <ImageCard src="/images/mayak/02_visual_3.jpg" alt="Mayak визуал 3" widthClass="min-w-[88vw] md:min-w-[620px]" heightClass="h-[260px] md:h-[440px]" />
            <ImageCard src="/images/mayak/02_visual_4.jpg" alt="Mayak визуал 4" widthClass="min-w-[88vw] md:min-w-[620px]" heightClass="h-[260px] md:h-[440px]" />
          </DragGallery>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Материалы для таргета и промо
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard src="/images/mayak/03_ads_1.jpg" alt="Mayak ads 1" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/03_ads_2.jpg" alt="Mayak ads 2" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
          </DragGallery>

          <Reveal>
            <h3 className="text-[28px] md:text-[50px] leading-none tracking-[-0.04em] mb-5 md:mb-6">
              Telegram-канал — до и после оформления
            </h3>
          </Reveal>
          <DragGallery className="mb-12 md:mb-16">
            <ImageCard src="/images/mayak/04_tg_before_1.jpg" alt="Mayak tg before 1" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/04_tg_before_2.jpg" alt="Mayak tg before 2" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/05_tg_after_1.jpg" alt="Mayak tg after 1" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
            <ImageCard src="/images/mayak/05_tg_after_2.jpg" alt="Mayak tg after 2" widthClass="min-w-[220px] md:min-w-[360px]" heightClass="h-[340px] md:h-[500px]" />
          </DragGallery>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-[16px] md:text-[24px] leading-[1.08] tracking-[-0.03em] text-black/75">
            <Reveal>
              <h3 className="text-[24px] md:text-[40px] text-[#b14f4a] mb-4">
                SMM работа
              </h3>
              <p>
                В рамках проекта я работала над визуальной и контентной частью:
                готовила материалы для Telegram, участвовала в упаковке публикаций
                и следила за тем, чтобы визуальный язык проекта оставался цельным
                во всех точках контакта.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="text-[24px] md:text-[40px] text-[#b14f4a] mb-4">
                Результат
              </h3>
              <p>
                В результате проект получил более системную и узнаваемую подачу.
                Контент стал лучше передавать атмосферу кэмпа,
                а Telegram-канал начал выглядеть более цельно и профессионально.
              </p>
            </Reveal>
          </div>
        </div>
      </section>



      {/* ADDITIONAL EXPERIENCE */}
      <section className="px-3 md:px-6 pt-4 md:pt-6">
        <div className="max-w-[1680px] mx-auto bg-[#efefed] px-5 md:px-8 py-6 md:py-10">
          <CaseHeader left="Additional experience" right="Social media" number="06" />

          <Reveal>
            <h2 className="text-[30px] md:text-[72px] leading-[0.95] tracking-[-0.05em] font-semibold mb-8 md:mb-10 max-w-[1400px]">
              Другой опыт
              <span className="text-[#b14f4a]"> / проекты</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-[16px] md:text-[24px] leading-[1.06] tracking-[-0.03em]">
            <Reveal>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <p className="text-[#b14f4a] mb-3">Строительная компания</p>
                  <p>
                    Разрабатывала визуалы и анимационные материалы для рекламных
                    размещений во ВКонтакте. Самостоятельно продумывала концепцию,
                    текстовую подачу и визуальную структуру креативов
                    под рекламные задачи.
                  </p>
                </div>

                <div>
                  <p className="text-[#b14f4a] mb-3">Работа с reels-мейкером</p>
                  <p>
                    На раннем этапе работала ассистентом у reels-мейкера:
                    занималась ресёрчем, конкурентным анализом, вела контент-план
                    и помогала с подготовкой текстов и структуры контента.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <p className="text-[#b14f4a] mb-3">Telegram и контент-упаковка</p>
                  <p>
                    Работала с Telegram-каналами: редактировала тексты,
                    структурировала публикации, формировала контент-план
                    и визуальную подачу. Для меня важно, чтобы контент
                    не просто аккуратно выглядел, а работал как понятная система
                    коммуникации бренда.
                  </p>
                </div>

                <div>
                  <p className="text-[#b14f4a] mb-3">Локальные бренды и event-проекты</p>
                  <p>
                    Создавала графику для локальных брендов, event-организаций
                    и персональных проектов: от логотипов и афиш
                    до визуального сопровождения и упаковки коммерческих материалов.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>



      {/* CONTACTS */}
      <section className="px-3 md:px-6 pt-4 md:pt-6 pb-8 md:pb-10">
        <div className="max-w-[1680px] mx-auto bg-[#efefed] px-5 md:px-8 py-6 md:py-10">
          <CaseHeader left="Contacts" right="Social media" number="07" />

          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-12 items-start">
            <Reveal>
              <h2 className="text-[30px] md:text-[78px] leading-[0.95] tracking-[-0.05em] font-semibold mb-6 md:mb-8 max-w-[1100px]">
                Открыта к работе в проектах, где важны
                <span className="text-[#b14f4a]"> визуальный вкус</span>,
                сильный контент и системный подход к SMM.
              </h2>

              <p className="text-[16px] md:text-[26px] leading-[1.08] tracking-[-0.03em] text-black/75 max-w-[800px]">
                Интересны задачи на стыке SMM, визуала, Telegram и контент-систем бренда.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="text-[18px] md:text-[34px] leading-[1.05] tracking-[-0.04em] space-y-6">
                <div>
                  <p className="text-[#b14f4a] text-[14px] md:text-[20px] mb-2">telegram</p>
                  <a
                    href="https://t.me/iylianayp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    @iylianayp
                  </a>
                </div>

                <div>
                  <p className="text-[#b14f4a] text-[14px] md:text-[20px] mb-2">phone</p>
                  <a href="tel:+79608243154" className="underline underline-offset-4">
                    +7 960 824 31 54
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
