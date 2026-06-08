import {
  Users,
  Mail,
  Globe,
  LayoutTemplate,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
  const cards = [
    {
      title: "Email Campaign",
      heading: "Create your first email campaign",
      icon: <Mail size={35} />,
      btn1: "Create Campaign",
      btn2: "Learn More",
      className: "small-card",
    },
    {
      title: "Domain Authentication",
      heading: "Authenticate your domain",
      icon: <Globe size={35} />,
      btn1: "Authenticate",
      btn2: "View Guide",
      className: "small-card",
    },
    
  ];

  const templates = [
    {
      title: "Welcome Email",
    },
    {
      title: "Newsletter",
    
    },
    {
      title: "Product Launch",
      
    },
    {
      title: "Promotion",

    },
    {
      title: "Event Invite",
     
    },
  ];

  return (
    <div className="dashboard">

      {/* Header */}
       <p>Hi,Soumya Welcome back to Orcamail</p>
      <div className="dashboard-header">
        <div>
          <h1>Home</h1>
         
        </div>

        
        <button className="create-email-btn"
       onClick={() => navigate("/Campaign_edit")}>
  Create
</button>

      </div>

      {/* Setup Cards */}
      <div className="cards-wrapper">


      <div className="cards-grid">

        <div className="audience-card">

          <div className="card-top">
            <h3>Audience</h3>

            <button className="analytics-btn">
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="audience-content">

            <div className="icon-circle audience-icon">
              <Users size={50} />
            </div>

            <h2>Add your first contacts</h2>

            <button className="primary-btn">
              Add Contacts
            </button>

            <button className="secondary-btn">
              Create Signup Form
            </button>

          </div>

        </div>

        {cards.map((card, index) => (
          <div className={card.className} key={index}>

            <div className="small-header">
              <h3>{card.title}</h3>

              <button className="icon-btn">
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="small-content">

              <div className="icon-circle">
                {card.icon}
              </div>

              <h4>{card.heading}</h4>

              <button className="primary-btn">
                {card.btn1}
              </button>

              <button className="secondary-btn">
                {card.btn2}
              </button>

            </div>

          </div>
        ))}
      </div>
        </div>

      {/* TEMPLATE SECTION */}
     
     <div className="template-section">

  <div className="template-header">

    <div className="template-left">
      <h2>Start with a Template</h2>

      <div className="template-tabs">
        <button className="active-tab">All</button>
        <button>Email</button>
        <button>Flows</button>
      </div>
    </div>

    <div className="template-actions">
      <button className="own-template-btn">
        Create Your Template
      </button>

      <button className="view-template-btn">
        View Templates
      </button>
    </div>

  </div>

  <div className="template-box-grid">

   <div className="template-card">
  <div className="template-image"></div>

  <div className="template-card-content">
    <h4>Professional Newsletter</h4>
    <p>Start with a fully designed layout</p>
  </div>
  </div>
    <div className="template-card">
  <div className="template-image"></div>

  <div className="template-card-content">
    <h4>Professional Newsletter</h4>
    <p>Start with a fully designed layout</p>
  </div>
</div>

<div className="template-card">
  <div className="template-image"></div>

  <div className="template-card-content">
    <h4>Professional Newsletter</h4>
    <p>Start with a fully designed layout</p>
  </div>
</div>

<div className="template-card">
  <div className="template-image"></div>

  <div className="template-card-content">
    <h4>Professional Newsletter</h4>
    <p>Start with a fully designed layout</p>
  </div>
</div>

  </div>

  <div className="template-footer">

    <button className="scratch-btn">
      Start from Scratch
    </button>

    <div className="carousel-nav">
      <button>←</button>
      <span>1 of 2</span>
      <button>→</button>
    </div>

  </div>

</div>

      
    </div>
  );
};

export default Dashboard;