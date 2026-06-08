import React, { useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  ExternalLink,
} from "lucide-react";

const Campaign_edit = () => {
const [subject, setSubject] = useState("");
const [contentDesigned, setContentDesigned] = useState(false);
const [showToDropdown, setShowToDropdown] = useState(false);
const [showFromDropdown, setShowFromDropdown] = useState(false);
const [fromName, setFromName] = useState("");
const [fromEmail, setFromEmail] = useState("");
const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
const [previewText, setPreviewText] = useState("");
const [showSendTimeDropdown, setShowSendTimeDropdown] = useState(false);
const [sendTimeOption, setSendTimeOption] = useState("now"); // "now" or "schedule"
const [showSocialModal, setShowSocialModal] = useState(false);
  const completedItems = [
    true, // To
    true, // From
    subject.trim() !== "", // Subject
    true, // Send Time
    contentDesigned, // Content
  ];

  const completedCount = completedItems.filter(Boolean).length;

  const renderStatusIcon = (completed) =>
    completed ? (
      <CheckCircle size={20} color="#00843D" />
    ) : (
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#D8DBDF",
        }}
      />
    );

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#F6F6F4",
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          width: "65%",
          overflowY: "auto",
          padding: "20px",
          borderRight: "1px solid #E2E2E2",
        }}
      >
        {/* Progress */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #DADADA",
            padding: "15px 20px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {completedCount}/5 items complete
          </div>

          <div
            style={{
              display: "flex",
              gap: "6px",
            }}
          >
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  height: "4px",
                  borderRadius: "10px",
                  background:
                    index < completedCount
                      ? "#00843D"
                      : "#D8DBDF",
                }}
              />
            ))}
          </div>
        </div>

        
     {/* TO */}
<div className="section-card">
  <div
    className="section-header"
    onClick={() => setShowToDropdown(!showToDropdown)}
    style={{ cursor: "pointer" }}
  >
    <div className="section-left">
      {renderStatusIcon(true)}
      <h3>To</h3>
    </div>

    <ChevronDown
      size={18}
      style={{
        transform: showToDropdown
          ? "rotate(180deg)"
          : "rotate(0deg)",
        transition: ".3s",
      }}
    />
  </div>

  {!showToDropdown ? (
    <>
      <div
        style={{
          color: "#007C89",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "10px",
        }}
      >
        1 recipient
        <ExternalLink size={14} />
      </div>

      <p>All subscribed contacts</p>
    </>
  ) : (
    <div className="to-dropdown">
      <p className="dropdown-title">
        Who are you sending this email to?
      </p>

      <div className="field-row">
        <div>
          <label>Send to</label>

          <select>
            <option>All email subscribers</option>
            <option>Customers</option>
            <option>VIP Members</option>
          </select>
        </div>

        <span>Select up to 10 segments or tags</span>
      </div>

      <div className="field-row">
        <div>
          <label>Do not send to</label>

          <select>
            <option>
              Select or search segment to exclude
            </option>
          </select>
        </div>

        <span>Select up to 10 segments or tags</span>
      </div>

      <hr />

      <div className="checkbox-row">
        <input type="checkbox" />

        <div>
          <h4>Personalize the "Send To" field</h4>

          <p>
            Add merge tags to display your recipient's
            name to make it more personal.
          </p>
        </div>
      </div>

      <div className="dropdown-actions">
        <button className="save-btn">
          Save
        </button>

        <button className="cancel-btn">
          Cancel
        </button>

        <a href="#">
          About audience organization
        </a>
      </div>
    </div>
  )}
</div>

    
        {/* FROM */}
<div className="section-card">
  <div
    className="section-header"
    onClick={() => setShowFromDropdown(!showFromDropdown)}
    style={{ cursor: "pointer" }}
  >
    <div className="section-left">
      {renderStatusIcon(fromName.trim() !== "" && fromEmail.trim() !== "")}
      <h3>From</h3>
    </div>
    <ChevronDown
      size={18}
      style={{
        transform: showFromDropdown ? "rotate(180deg)" : "rotate(0deg)",
        transition: ".3s",
      }}
    />
  </div>


{!showFromDropdown ? (
  <div className="from-summary">
    <p className="from-name">
      {fromName || "Orkamail"}
    </p>

    <p className="from-email">
      {fromEmail || "noreply@orkamail.com"}
    </p>

    <small className="delivery-note">
      To ensure delivery, we'll change your from address.
    </small>
  </div>
) : (
    <div className="to-dropdown">
      <p className="dropdown-title">Who is sending this email?</p>

      <div className="field-row">
        <div className="field-group">
          <label className="field-label">
            * Name <span className="required-tag">Required</span>
          </label>
          <input
            type="text"
            value={fromName}
            placeholder="Enter sender name"
            onChange={(e) => setFromName(e.target.value)}
            className="from-input"
          />
          <span className="field-hint">Use something recognizable, like company name.</span>
        </div>

        <div className="field-group">
          <label className="field-label">
            * Email address <span className="required-tag">Required</span>
          </label>
          <input
            type="email"
            value={fromEmail}
            placeholder="Enter email address"
            onChange={(e) => setFromEmail(e.target.value)}
            className="from-input"
          />
          {fromEmail && (
            <span className="field-hint">
              To <a href="#" className="ensure-link">ensure delivery</a>, we'll
              change your from address to {fromEmail.split("@")[0]}@255213247.mailchimpapp.com
            </span>
          )}
        </div>
      </div>

      <hr className="from-divider" />

      <div className="dropdown-actions">
        <button className="save-btn" onClick={() => setShowFromDropdown(false)}>Save</button>
        <button className="cancel-btn" onClick={() => setShowFromDropdown(false)}>Cancel</button>
        <a href="#" className="default-link">How to set default "from" fields</a>
      </div>
    </div>
  )}
</div>
   
        {/* SUBJECT */}
<div className="section-card">
  <div
    className="section-header"
    onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
    style={{ cursor: "pointer" }}
  >
    <div className="section-left">
      {renderStatusIcon(subject.trim() !== "")}
      <h3>Subject</h3>
    </div>
    <ChevronDown
      size={18}
      style={{
        transform: showSubjectDropdown ? "rotate(180deg)" : "rotate(0deg)",
        transition: ".3s",
      }}
    />
  </div>

  {!showSubjectDropdown ? (
    <p style={{ marginTop: "10px", color: "#888" }}>
      {subject.trim() !== "" ? subject : "What's the subject line for this email?"}
    </p>
  ) : (
    <div className="to-dropdown">
      <p className="dropdown-title">What's the subject line for this email?</p>

      <div className="subject-field-group">
        <div className="subject-label-row">
          <label className="field-label">* Subject line</label>
          <a href="#" className="ab-test-link">Create A/B test</a>
        </div>
        <div className="subject-input-wrapper">
          <input
            type="text"
            value={subject}
            placeholder=""
            onChange={(e) => setSubject(e.target.value)}
            className="from-input"
          />
          <span className="subject-emoji-btn">&#9696;</span>
        </div>
      </div>

      <div className="subject-field-group">
        <label className="field-label">Preview text</label>
        <div className="subject-input-wrapper">
          <input
            type="text"
            value={previewText}
            placeholder=""
            onChange={(e) => setPreviewText(e.target.value)}
            className="from-input"
          />
          <span className="subject-emoji-btn">&#9696;</span>
        </div>
        <span className="field-hint">
          <a href="#" className="ensure-link">Preview text</a> appears in the inbox after the subject line.
        </span>
      </div>

      <div className="dropdown-actions" style={{ marginTop: "16px" }}>
        <button className="save-btn" onClick={() => setShowSubjectDropdown(false)}>Save</button>
        <button className="cancel-btn" onClick={() => setShowSubjectDropdown(false)}>Cancel</button>
      </div>
    </div>
  )}
</div>
       {/* SEND TIME */}
<div className="section-card">
  <div
    className="section-header"
    onClick={() => setShowSendTimeDropdown(!showSendTimeDropdown)}
    style={{ cursor: "pointer" }}
  >
    <div className="section-left">
      {renderStatusIcon(true)}
      <h3>Send time</h3>
    </div>
    <ChevronDown
      size={18}
      style={{
        transform: showSendTimeDropdown ? "rotate(180deg)" : "rotate(0deg)",
        transition: ".3s",
      }}
    />
  </div>

  {!showSendTimeDropdown ? (
    <p style={{ marginTop: "10px", color: "#888" }}>
      {sendTimeOption === "now" ? "Send now" : "Scheduled"}
    </p>
  ) : (
    <div className="to-dropdown">
      <p className="dropdown-title">When should we send this email?</p>

      <div className="sendtime-options">
        <div
          className={`sendtime-card ${sendTimeOption === "schedule" ? "sendtime-active" : ""}`}
          onClick={() => setSendTimeOption("schedule")}
        >
          <div className={`sendtime-radio ${sendTimeOption === "schedule" ? "sendtime-radio-active" : ""}`}>
            {sendTimeOption === "schedule" && <div className="sendtime-radio-dot" />}
          </div>
          Schedule
        </div>

        <div
          className={`sendtime-card ${sendTimeOption === "now" ? "sendtime-active" : ""}`}
          onClick={() => setSendTimeOption("now")}
        >
          <div className={`sendtime-radio ${sendTimeOption === "now" ? "sendtime-radio-active" : ""}`}>
            {sendTimeOption === "now" && <div className="sendtime-radio-dot" />}
          </div>
          Send now
        </div>
      </div>

      <div className="dropdown-actions" style={{ marginTop: "16px" }}>
        <button className="save-btn" onClick={() => setShowSendTimeDropdown(false)}>Save</button>
        <button className="cancel-btn" onClick={() => setShowSendTimeDropdown(false)}>Cancel</button>
        <a href="#" className="default-link">How to schedule or pause emails</a>
      </div>
    </div>
  )}
</div>

        {/* CONTENT */}
        <div className="section-card">
          <div className="section-header">
            <div className="section-left">
              {renderStatusIcon(contentDesigned)}
              <h3>Content</h3>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <p>Design the content for your email.</p>

            <button
              onClick={() => setContentDesigned(true)}
              style={{
                border: "1px solid #DADADA",
                background: "#fff",
                padding: "10px 20px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Design email
            </button>
          </div>
        </div>

        {/* SHARE EMAIL */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #DADADA",
            marginTop: "20px",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3>Share this email</h3>

            <p>
              https://mailchi.mp/[xxxxx]/[xxxxx]
              <span
                style={{
                  color: "#007C89",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </span>
            </p>
          </div>

          <button
  onClick={() => setShowSocialModal(true)}
  style={{
    border: "1px solid #DADADA",
    background: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  Create a social post
</button>
        </div>
      </div>

      {/* SOCIAL POST MODAL */}
{showSocialModal && (
  <div className="modal-overlay" onClick={() => setShowSocialModal(false)}>
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
      
      <div className="modal-header">
        <h3>Create a social post</h3>
        <button className="modal-close" onClick={() => setShowSocialModal(false)}>✕</button>
      </div>

      <div className="modal-body">
        <p className="modal-connect-title">
          <span className="modal-connect-icon">↺</span>
          Connect to enable publishing
        </p>

        <div className="social-option">
          <div className="social-left">
            <div className="social-icon facebook-icon">f</div>
            Facebook
          </div>
          <button className="connect-btn">+ Connect</button>
        </div>

        <div className="social-option">
          <div className="social-left">
            <div className="social-icon instagram-icon">&#9432;</div>
            Instagram
          </div>
          <button className="connect-btn">+ Connect</button>
        </div>
      </div>

      <div className="modal-footer">
        <button className="cancel-btn" onClick={() => setShowSocialModal(false)}>Cancel</button>
        <button className="continue-btn">Continue</button>
      </div>

    </div>
  </div>
)}
      

      {/* RIGHT PANEL */}
      
      <div
        style={{
          width: "35%",
          overflowY: "auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#EDF1F3",
            border: "1px solid #DADADA",
            padding: "25px",
            minHeight: "900px",
          }}
        >
          <div
            style={{
              height: "80px",
              background: "#DCE2E7",
              marginBottom: "25px",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "120px",
                background: "#DCE2E7",
              }}
            />

            <div
              style={{
                flex: 1,
                height: "120px",
                background: "#DCE2E7",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            {[1, 2].map((col) => (
              <div
                key={col}
                style={{
                  flex: 1,
                }}
              >
                {[...Array(14)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      height: "8px",
                      background: "#DCE2E7",
                      marginBottom: "10px",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .section-card{
          background:#fff;
          border:1px solid #DADADA;
          padding:20px;
          margin-top:-1px;
        }

        .section-header{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .section-left{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .section-left h3{
          margin:0;
          font-weight:500;
        }

        .section-card p{
          margin-top:10px;
          margin-bottom:0;
        }
      `}</style>
    </div>
  );
};

export default Campaign_edit;