import { Mail } from "lucide-react";

const templates = [
  {
    id: 1,
    icons: ["email"],
    badge: "Popular",
    title: "Welcome new contacts",
    description: "Increase engagement from new subscribers with a personalized hello.",
  },
  {
    id: 2,
    icons: ["email", "facebook", "instagram"],
    badge: null,
    title: "Share exclusive content with new leads",
    description:
      "Welcome new contacts acquired through Meta lead ads. Once a lead is approved, automatically engage them with members-only content via email.",
  },
  {
    id: 3,
    icons: ["email"],
    badge: null,
    title: "Celebrate sign-up anniversaries with your contacts",
    description:
      "Offer promotions or well wishes that help contacts feel closer to your brand.",
  },
];

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.886v2.286h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#igGrad)">
    <defs>
      <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433"/>
        <stop offset="25%" stopColor="#e6683c"/>
        <stop offset="50%" stopColor="#dc2743"/>
        <stop offset="75%" stopColor="#cc2366"/>
        <stop offset="100%" stopColor="#bc1888"/>
      </linearGradient>
    </defs>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const EmailIcon = () => (
  <div style={{
    width: 28, height: 28,
    border: "1.5px solid #d1d5db",
    borderRadius: 6,
    display: "flex", alignItems: "center", justifyContent: "center",
    background: "white"
  }}>
    <Mail size={15} color="#374151" />
  </div>
);

const Automation = () => {
  return (
    <div className="automation-main-only">

      {/* HERO */}
      <div className="automation-hero">
        <div className="automation-hero-text">
          <h1>Create an automation</h1>
          <p>
            Craft customizable, automated workflows that start when your
            contacts meet specific conditions.
          </p>
          <div className="automation-hero-actions">
            <button className="auto-primary-btn">Create automation</button>
            <button className="auto-secondary-btn">Choose a template</button>
          </div>
        </div>
      </div>

      {/* TEMPLATES */}
      <div className="automation-templates">
        <div className="templates-heading">
          <h2>Jump right in with a template</h2>
          <p>
            These pre-built automation templates are great starting points that you
            can customize for your audience.
          </p>
        </div>

        <div className="templates-grid">
          {templates.map((t) => (
            <div className="template-card-auto" key={t.id}>
              <div className="template-card-top">
                <div className="template-icons">
                  {t.icons.map((icon, i) =>
                    icon === "email" ? (
                      <EmailIcon key={i} />
                    ) : icon === "facebook" ? (
                      <FacebookIcon key={i} />
                    ) : (
                      <InstagramIcon key={i} />
                    )
                  )}
                </div>
                {t.badge && (
                  <span className="template-badge">{t.badge}</span>
                )}
              </div>
              <h3>{t.title}</h3>
              <p>{t.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Automation;