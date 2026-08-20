export default function Home() {
  return (
    <main
      style={{
        background: "#0B1713",
        color: "#F5EFE3",
        fontFamily: "Arial, sans-serif",
        direction: "rtl",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
          borderBottom: "1px solid rgba(245,239,227,0.12)",
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "#0B1713",
        }}
      >
        <div
          style={{
            fontSize: "26px",
            fontWeight: "800",
            letterSpacing: "3px",
            color: "#D9A441",
          }}
        >
          YAQOTA
        </div>

        <nav
          style={{
            display: "flex",
            gap: "30px",
            fontSize: "15px",
          }}
        >
          <a href="#home" style={navStyle}>
            الرئيسية
          </a>
          <a href="#menu" style={navStyle}>
            القائمة
          </a>
          <a href="#story" style={navStyle}>
            قصتنا
          </a>
          <a href="#contact" style={navStyle}>
            تواصل معنا
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "60px",
          padding: "70px 7%",
          overflow: "hidden",
        }}
      >
        {/* TEXT */}
        <div className="yaqota-hero-content">
          <p
            style={{
              color: "#D9A441",
              fontSize: "13px",
              letterSpacing: "5px",
              marginBottom: "25px",
            }}
          >
            YAQOTA COFFEE
          </p>

          <h1
            style={{
              fontSize: "clamp(50px, 7vw, 100px)",
              lineHeight: "1",
              margin: "0 0 30px",
              fontWeight: "800",
            }}
          >
            قهوة تُحكى
            <br />
            <span style={{ color: "#D9A441" }}>وتُعاش</span>
          </h1>

          <p
            style={{
              maxWidth: "570px",
              color: "#B8C1BA",
              fontSize: "18px",
              lineHeight: "1.9",
              marginBottom: "40px",
            }}
          >
            تجربة قهوة مختلفة، صُنعت بعناية لتمنحك لحظات هادئة
            ودافئة ومميزة في كل فنجان.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#menu"
              className="yaqota-button"
              style={primaryButton}
            >
              اكتشف القائمة
            </a>

            <a
              href="#story"
              className="yaqota-button"
              style={secondaryButton}
            >
              اكتشف YAQOTA
            </a>
          </div>
        </div>

        {/* COFFEE IMAGE */}
        <div
          style={{
            position: "relative",
            minHeight: "560px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Glow */}
          <div
            className="yaqota-hero-glow"
            style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background: "rgba(217,164,65,0.13)",
              filter: "blur(80px)",
            }}
          />

          <img
            className="yaqota-hero-image"
            src="/yaqota-hero.png"
            alt="YAQOTA coffee"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "620px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "4px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
            }}
          />
        </div>
      </section>

      {/* MENU */}
      <section
        id="menu"
        style={{
          padding: "120px 7%",
          background: "#F5EFE3",
          color: "#0B1713",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <p style={goldLabel}>OUR MENU</p>

          <h2 style={sectionTitle}>القائمة</h2>

          <div style={menuGrid}>
            <MenuItem
              name="Espresso"
              description="قهوة مركزة وغنية بطعم عميق"
              price="18 DH"
            />

            <MenuItem
              name="Cappuccino"
              description="إسبريسو مع حليب ورغوة ناعمة"
              price="25 DH"
            />

            <MenuItem
              name="Latte"
              description="قهوة ناعمة ومتوازنة بالحليب"
              price="27 DH"
            />

            <MenuItem
              name="Iced Coffee"
              description="قهوة باردة ومنعشة"
              price="28 DH"
            />

            <MenuItem
              name="Mocha"
              description="قهوة، شوكولاتة وحليب"
              price="30 DH"
            />

            <MenuItem
              name="YAQOTA Signature"
              description="خلطة YAQOTA الخاصة"
              price="35 DH"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        style={{
          padding: "130px 7%",
          background: "#0B1713",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div>
            <p style={goldLabel}>OUR STORY</p>

            <h2 style={sectionTitleLight}>
              أكثر من
              <br />
              <span style={{ color: "#D9A441" }}>مجرد قهوة.</span>
            </h2>

            <p
              style={{
                color: "#B8C1BA",
                fontSize: "17px",
                lineHeight: "2",
              }}
            >
              في YAQOTA نؤمن أن القهوة ليست مجرد مشروب.
              إنها لحظة، إحساس، وذكريات صغيرة نصنعها كل يوم.
              اخترنا كل تفصيل بعناية لنقدم تجربة بسيطة ولكن
              مختلفة.
            </p>
          </div>

          <div
            style={{
              minHeight: "420px",
              border: "1px solid rgba(217,164,65,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "1px solid #D9A441",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#D9A441",
                fontSize: "22px",
                letterSpacing: "4px",
              }}
            >
              YAQOTA
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "110px 7%",
          background: "#D9A441",
          color: "#0B1713",
          textAlign: "center",
        }}
      >
        <p style={darkLabel}>VISIT YAQOTA</p>

        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 70px)",
            margin: "0 0 25px",
          }}
        >
          مستعدين للقهوة؟
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "35px" }}>
          تعال واكتشف تجربة YAQOTA بنفسك.
        </p>

        <a
          href="mailto:hello@yaqota.ma"
          className="yaqota-button"
          style={{
            display: "inline-block",
            padding: "16px 35px",
            background: "#0B1713",
            color: "#F5EFE3",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          تواصل معنا
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "35px 7%",
          background: "#07100D",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <strong
          style={{
            color: "#D9A441",
            letterSpacing: "3px",
          }}
        >
          YAQOTA
        </strong>

        <span
          style={{
            color: "#7F8982",
            fontSize: "13px",
          }}
        >
          © 2026 YAQOTA Coffee. All rights reserved.
        </span>
      </footer>
    </main>
  );
}

function MenuItem({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) {
  return (
    <article
      className="yaqota-menu-card"
      style={{
        padding: "30px",
        border: "1px solid rgba(11,23,19,0.15)",
        background: "#EEE7D8",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
          marginBottom: "15px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "22px",
          }}
        >
          {name}
        </h3>

        <strong style={{ color: "#9B7225" }}>
          {price}
        </strong>
      </div>

      <p
        style={{
          margin: 0,
          color: "#5D665F",
          lineHeight: "1.8",
        }}
      >
        {description}
      </p>
    </article>
  );
}

const navStyle = {
  color: "#F5EFE3",
  textDecoration: "none",
};

const primaryButton = {
  background: "#D9A441",
  color: "#0B1713",
  padding: "16px 32px",
  textDecoration: "none",
  fontWeight: "700",
};

const secondaryButton = {
  border: "1px solid #D9A441",
  color: "#D9A441",
  padding: "16px 32px",
  textDecoration: "none",
  fontWeight: "700",
};

const goldLabel = {
  color: "#9B7225",
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "15px",
};

const darkLabel = {
  letterSpacing: "4px",
  fontSize: "13px",
  marginBottom: "15px",
};

const sectionTitle = {
  fontSize: "clamp(40px, 6vw, 70px)",
  margin: "0 0 60px",
  fontWeight: "800",
};

const sectionTitleLight = {
  fontSize: "clamp(40px, 6vw, 70px)",
  lineHeight: "1.1",
  margin: "20px 0 30px",
};

const menuGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};