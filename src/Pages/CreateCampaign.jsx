import React, { useState } from "react";
import LandingPage from "./LandingPage";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Automation from "./Automation";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [emailOpen, setEmailOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="create-page">
      {/* SIDEBAR */}
      <div className="create-sidebar">
        <div className="sidebar-top">
          <ArrowLeft
            size={20}
            className="back-arrow"
            onClick={() => navigate("/campaigns")}
          />

          <div className="create-logo">
            <img
              src=""
              alt="logo"
            />
          </div>
        </div>

        {/* EMAIL */}
   <div className="menu-heading">
  <span>Email</span>

  <div
    className="dropdown-arrow"
    onClick={() => setEmailOpen(!emailOpen)}
  >
    {emailOpen ? (
      <ChevronUp size={18} />
    ) : (
      <ChevronDown size={18} />
    )}
  </div>
</div>

        {emailOpen && (
          <div className="submenu">
            {["Regular", "Plain Text", "MultiVariate"].map((item) => (
              <div
                key={item}
                className={`submenu-item ${
                  selectedItem === item ? "active-submenu" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <span>{item}</span>

                {selectedItem === item && <Check size={18} />}
              </div>
            ))}
          </div>
        )}

        <div
          className="menu-heading"
          onClick={() => setSelectedItem("Automations")}
        >
          Automations
        </div>

        <div
          className="menu-heading"
          onClick={() => setSelectedItem("Landing Page")}
        >
          Landing Page
        </div>

        <hr className="sidebar-divider" />

        {/* SIGNUP FORM */}
      <div className="menu-heading">
  <span>Signup Form</span>

  <div
    className="dropdown-arrow"
    onClick={() => setSignupOpen(!signupOpen)}
  >
    {signupOpen ? (
      <ChevronUp size={18} />
    ) : (
      <ChevronDown size={18} />
    )}
  </div>
</div>

        {signupOpen && (
          <div className="submenu">
            {[
              "Popup Form",
              "Embedded Form",
              "Signup Landing Page",
            ].map((item) => (
              <div
                key={item}
                className={`submenu-item ${
                  selectedItem === item ? "active-submenu" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        <div
          className="menu-heading"
          onClick={() => setSelectedItem("Surveys")}
        >
          Surveys
        </div>

        <div
          className="menu-heading"
          onClick={() => setSelectedItem("Ad")}
        >
          Ad
        </div>

        <div
          className="menu-heading"
          onClick={() => setSelectedItem("Social Post")}
        >
          Social Post
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="create-main-content">
        {/* DEFAULT PAGE */}
        {selectedItem === "" && (
          <>
            <h1>Create something that gets noticed</h1>

            <div className="best-practice">
              <span>Based on best practices</span>
            </div>

            <h2>Try building one of these</h2>

            <div className="create-cards">
              {/* CARD 1 */}
              <div className="create-card">
                <div className="create-card-image green"></div>

                <div className="create-card-body">
                  <h3>Regular Email</h3>

                  <p>
                    Use our email builder to launch a campaign in
                    minutes.
                  </p>

                  <button
                    onClick={() => setSelectedItem("Regular")}
                  >
                    Design Email
                  </button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="create-card">
                <div className="create-card-image blue"></div>

                <div className="create-card-body">
                  <h3>Automation</h3>

                  <p>
                    Set up email automations that personalize
                    your marketing.
                  </p>

                  <button
                    onClick={() =>
                      setSelectedItem("Automations")
                    }
                  >
                    Create Journey
                  </button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="create-card">
                <div className="create-card-image yellow"></div>

                <div className="create-card-body">
                  <h3>Landing Page</h3>

                  <p>
                    Create a landing page that lets people sign
                    up.
                  </p>

                  <button
                    onClick={() =>
                      setSelectedItem("Landing Page")
                    }
                  >
                    Build Landing Page
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* REGULAR EMAIL PAGE */}
        {selectedItem === "Regular" && (
          <div className="email-create-page">
            <h1>Create an email</h1>

            <p>
              Keep your subscribers engaged by sharing your
              latest news, promoting a line of products, or
              announcing an event.
            </p>

            <div className="email-form">
              <label>Internal email name</label>

              <input
                type="text"
                className="email-name-input"
                placeholder="Enter campaign name"
              />

              <button className="begin-btn">
                Begin
              </button>
            </div>
          </div>
        )}

     {selectedItem === "Plain Text" && (
  <div className="email-create-page">
    <h1>Create a plain-text email</h1>

    <p>
      Keep things simple and personal with a text-only email—no
      images, fancy styling, or embedded hyperlinks.
    </p>

    <div className="email-form">
      <label>Internal email name</label>

      <input
        type="text"
        className="email-name-input"
        placeholder="Enter campaign name"
      />

      <button className="begin-btn">
        Begin
      </button>
    </div>
  </div>
)}

        {selectedItem === "MultiVariate" && (
          <div className="content-page">
            <h1>MultiVariate Campaign</h1>
          </div>
        )}

     {selectedItem === "Automations" && (
  <Automation />
)}
        {selectedItem === "Landing Page" && <LandingPage />}
        {selectedItem === "Popup Form" && (
          <div className="content-page">
            <h1>Popup Form</h1>
          </div>
        )}

        {selectedItem === "Embedded Form" && (
          <div className="content-page">
            <h1>Embedded Form</h1>
          </div>
        )}

        {selectedItem === "Signup Landing Page" && (
          <div className="content-page">
            <h1>Signup Landing Page</h1>
          </div>
        )}

        {selectedItem === "Surveys" && (
          <div className="content-page">
            <h1>Surveys</h1>
          </div>
        )}

        {selectedItem === "Ad" && (
          <div className="content-page">
            <h1>Ad Campaign</h1>
          </div>
        )}

        {selectedItem === "Social Post" && (
          <div className="content-page">
            <h1>Social Post</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCampaign;