"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      style={{
        background: "#0B1713",
        color: "#F5EFE3",
        fontFamily: "Arial, sans-serif",
        direction: "rtl",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ================= NAVBAR ================= */}

      <header className="yaqota-navbar">
        <a href="#home" className="yaqota-logo">
          YAQOTA
        </a>

        <nav>
          <a href="#home" className="yaqota-nav-link">
            الرئيسية
          </a>

          <a href="#menu" className="yaqota-nav-link">
            القائمة
          </a>

          <a href="#story" className="yaqota-nav-link">
            قصتنا
          </a>

          <a
            href="#contact"
            className="yaqota-nav-link yaqota-nav-cta"
          >
            تواصل معنا
          </a>
        </nav>
      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="yaqota-hero">
        {/* Background */}

        <div className="yaqota-hero-glow yaqota-hero-glow-one" />

        <div className="yaqota-hero-glow yaqota-hero-glow-two" />

        {/* ================= HERO CONTENT ================= */}

        <div className="yaqota-hero-content yaqota-hero-enter">
          <p className="yaqota-eyebrow">YAQOTA COFFEE</p>

          <h1>
            قهوة تُحكى
            <br />
            <span>وتُعاش</span>
          </h1>

          <p className="yaqota-hero-description">
            تجربة قهوة مختلفة، صُنعت بعناية لتمنحك لحظات هادئة
            ودافئة ومميزة في كل فنجان.
          </p>

          <div className="yaqota-hero-actions">
            <a
              href="#menu"
              className="yaqota-primary-button"
            >
              اكتشف القائمة
            </a>

            <a
              href="#story"
              className="yaqota-secondary-button"
            >
              اكتشف YAQOTA
            </a>
          </div>
        </div>

        {/* ================= HERO VISUAL ================= */}

        <div className="yaqota-hero-visual yaqota-hero-visual-enter">
          {/* Ambient light */}

          <div className="yaqota-image-aura" />

          {/* Decorative frame */}

          <div
            className="yaqota-image-frame"
            style={{
              transform: `
                translate(
                  ${mousePosition.x * 12}px,
                  ${mousePosition.y * 12}px
                )
              `,
            }}
          />

          {/* Image */}

          <div
            className="yaqota-image-wrapper"
            style={{
              transform: `
                translate3d(
                  ${mousePosition.x * 5}px,
                  ${mousePosition.y * 5}px,
                  0
                )
              `,
              transition:
                "transform 0.15s ease-out",
            }}
          >
            <Image
              src="/yaqota-hero.png"
              alt="YAQOTA Coffee"
              width={900}
              height={900}
              priority
              className="yaqota-hero-image"
            />
          </div>

          {/* EST label */}

          <div className="yaqota-est-label">
            <span>EST.</span>
            <strong>2026</strong>
          </div>

          {/* Number */}

          <div className="yaqota-hero-number">
            01
          </div>
        </div>
      </section>

      {/* ================= MENU ================= */}

      <section id="menu" className="yaqota-menu">
        <div className="yaqota-section-container">
          <div className="yaqota-section-heading">
            <div>
              <p className="yaqota-eyebrow-dark">
                THE YAQOTA MENU
              </p>

              <h2>
                القائمة
                <br />
                <span>ببساطة.</span>
              </h2>
            </div>

            <p className="yaqota-section-description">
              اختيارات مختارة بعناية، من الإسبريسو الكلاسيكي
              إلى خلطات YAQOTA الخاصة. كل فنجان له شخصيته.
            </p>
          </div>

          {/* Featured */}

          <div className="yaqota-featured">
            <div className="yaqota-featured-visual">
              <div className="yaqota-coffee-circle">
                <div className="yaqota-coffee-circle-inner">
                  YAQOTA
                </div>
              </div>

              <span className="yaqota-featured-label">
                SIGNATURE BLEND
              </span>
            </div>

            <div className="yaqota-featured-content">
              <p className="yaqota-item-number">
                01 — SIGNATURE
              </p>

              <h3>
                YAQOTA
                <br />
                Signature
              </h3>

              <p>
                خلطة YAQOTA الخاصة، بطابع غني ومتوازن
                ونهاية ناعمة تبقى معك بعد آخر رشفة.
              </p>

              <div className="yaqota-price-row">
                <strong>35 DH</strong>

                <span>OUR SPECIALTY</span>
              </div>
            </div>
          </div>

          {/* Cards */}

          <div className="yaqota-menu-grid">
            <MenuCard
              number="02"
              name="Espresso"
              description="مركز، غني، وبنهاية عميقة."
              price="18 DH"
            />

            <MenuCard
              number="03"
              name="Cappuccino"
              description="إسبريسو، حليب ورغوة ناعمة."
              price="25 DH"
            />

            <MenuCard
              number="04"
              name="Latte"
              description="متوازن، ناعم وكريمي."
              price="27 DH"
            />

            <MenuCard
              number="05"
              name="Iced Coffee"
              description="بارد، منعش ومثالي للأيام الطويلة."
              price="28 DH"
            />

            <MenuCard
              number="06"
              name="Mocha"
              description="قهوة وشوكولاتة في توازن مثالي."
              price="30 DH"
            />

            <MenuCard
              number="07"
              name="Cold Brew"
              description="استخلاص بطيء بطعم ناعم وعميق."
              price="30 DH"
            />
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}

      <section id="story" className="yaqota-story">
        <div className="yaqota-story-container">
          <div className="yaqota-story-content">
            <p className="yaqota-eyebrow">
              OUR STORY
            </p>

            <h2>
              أكثر من
              <br />
              <span>مجرد قهوة.</span>
            </h2>

            <p>
              في YAQOTA نؤمن أن القهوة ليست مجرد مشروب.
              إنها لحظة، إحساس، وذكريات صغيرة نصنعها كل يوم.
            </p>

            <p>
              اخترنا كل تفصيل بعناية لنقدم تجربة بسيطة،
              راقية ومختلفة.
            </p>
          </div>

          <div className="yaqota-story-visual">
            <div className="yaqota-story-glow" />

            <div className="yaqota-story-circle">
              <div>YAQOTA</div>
            </div>

            <span className="story-top-label">
              CRAFTED WITH CARE
            </span>

            <span className="story-bottom-label">
              EST. 2026
            </span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="yaqota-contact">
        <p>VISIT YAQOTA</p>

        <h2>مستعدين للقهوة؟</h2>

        <p className="contact-description">
          تعال واكتشف تجربة YAQOTA بنفسك. خذ لحظتك،
          وخلي القهوة تحكي.
        </p>

        <a
          href="mailto:hello@yaqota.ma"
          className="yaqota-contact-button"
        >
          تواصل معنا
        </a>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="yaqota-footer">
        <strong>YAQOTA</strong>

        <span>
          © 2026 YAQOTA Coffee. All rights reserved.
        </span>
      </footer>
    </main>
  );
}

/* =========================================================
   MENU CARD
   ========================================================= */

function MenuCard({
  number,
  name,
  description,
  price,
}: {
  number: string;
  name: string;
  description: string;
  price: string;
}) {
  return (
    <article className="yaqota-menu-card">
      <div>
        <span className="card-number">
          {number}
        </span>

        <h3>{name}</h3>

        <p>{description}</p>
      </div>

      <div className="card-footer">
        <strong>{price}</strong>

        <span>YAQOTA</span>
      </div>
    </article>
  );
}