const LandingPage= () => {
  return (
    <div className="lp-page">

      {/* HEADER */}
      <div className="lp-header">
        <h1>Landing Page</h1>
        <p>
          Design a single web page that achieves any specific marketing goal to
          boost brand awareness, attract customers, and increase conversion.
        </p>
      </div>
      <div className="lp-illustration">
        <div className="lp-browser">
          <div className="lp-browser-bar">
            <span className="lp-dot" />
            <span className="lp-dot" />
            <span className="lp-dot" />
          </div>
          <div className="lp-browser-image" />
          <div className="lp-browser-input" />
          <div className="lp-browser-btn">
            <span>→</span>
          </div>
        </div>

        {/* Arrows */}
        <div className="lp-arrows">
          <div className="lp-arrow-line" />
          <div className="lp-arrow-line" />
          <div className="lp-arrow-line" />
        </div>

        {/* Right: contact cards */}
        <div className="lp-contacts">
          {[
            { color: "#bfdbfe", icon: "👥" },
            { color: "#bbf7d0", icon: "👤" },
            { color: "#e9d5ff", icon: "👤" },
          ].map((card, i) => (
            <div className="lp-contact-card" key={i}>
              <div
                className="lp-contact-avatar"
                style={{ background: card.color }}
              >
                {card.icon}
              </div>
              <div className="lp-contact-lines">
                <div className="lp-contact-line lp-line-long" />
                <div className="lp-contact-line lp-line-short" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FORM */}
      <div className="lp-form">
        <label className="lp-label">Landing page name</label>
        <input
          type="text"
          className="lp-input"
          placeholder=""
        />
        <button className="lp-begin-btn">Begin</button>
      </div>

    </div>
  );
};

export default LandingPage;