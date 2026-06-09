import {
  Search,
  List,
  Calendar,
  ChevronDown,
  Mail,
  Copy,
   ChevronUp,
} from "lucide-react";


import CalendarPage from "../Pages/CalendarPage";


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
const navigate = useNavigate();
const [openDropdown, setOpenDropdown] = useState(null);
const [viewMode, setViewMode] = useState("list");
const [selectedTypes, setSelectedTypes] = useState([]);
const [selectedStatuses, setSelectedStatuses] = useState([]);
const [dateRange, setDateRange] = useState("All");
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [activeDateType, setActiveDateType] = useState("Date edited");
const [showDateRangeDropdown, setShowDateRangeDropdown] = useState(false);

const allCampaigns = [
  { id: 1,  name: "Welcome Email Series",   type: "Email",            status: "Ongoing",   date: "Thu, Jun 4, 2026",  rawDate: "2026-06-04", sendTo: "All Subscribers" },
  { id: 2,  name: "June SMS Blast",          type: "SMS",              status: "Scheduled", date: "Wed, Jun 3, 2026",  rawDate: "2026-06-03", sendTo: "VIP Members" },
  { id: 3,  name: "Summer Sale Campaign",    type: "Email",            status: "Draft",     date: "Tue, Jun 2, 2026",  rawDate: "2026-06-02", sendTo: "All Subscribers" },
  { id: 4,  name: "A/B Subject Test",        type: "Multivariate Test",status: "Completed", date: "Mon, Jun 1, 2026",  rawDate: "2026-06-01", sendTo: "Customers" },
  { id: 5,  name: "Flash Sale SMS",          type: "SMS",              status: "Completed", date: "Sun, May 31, 2026", rawDate: "2026-05-31", sendTo: "All Subscribers" },
  { id: 6,  name: "Newsletter May",          type: "Email",            status: "Completed", date: "Sat, May 30, 2026", rawDate: "2026-05-30", sendTo: "Subscribers" },
  { id: 7,  name: "Product Launch Ad",       type: "Ad",               status: "Ongoing",   date: "Fri, May 29, 2026", rawDate: "2026-05-29", sendTo: "New Users" },
  { id: 8,  name: "Instagram Post",          type: "Social Post",      status: "Draft",     date: "Thu, May 28, 2026", rawDate: "2026-05-28", sendTo: "Followers" },
  { id: 9,  name: "Customer Survey Q2",      type: "Survey",           status: "Scheduled", date: "Wed, May 27, 2026", rawDate: "2026-05-27", sendTo: "All Subscribers" },
  { id: 10, name: "Landing Page - Sale",     type: "Landing Page",     status: "Draft",     date: "Tue, May 26, 2026", rawDate: "2026-05-26", sendTo: "All Users" },
  { id: 11, name: "Re-engagement Flow",      type: "Automation Flow",  status: "Ongoing",   date: "Mon, May 25, 2026", rawDate: "2026-05-25", sendTo: "Inactive Users" },
  { id: 12, name: "Weekly Digest Email",     type: "Email",            status: "Scheduled", date: "Sun, May 24, 2026", rawDate: "2026-05-24", sendTo: "Subscribers" },
  { id: 13, name: "App Launch Push Alert",   type: "Push",             status: "Scheduled", date: "Sat, May 23, 2026", rawDate: "2026-05-23", sendTo: "App Users" },
  { id: 14, name: "Order Confirmation WA",   type: "Whatsapp",         status: "Ongoing",   date: "Fri, May 22, 2026", rawDate: "2026-05-22", sendTo: "Customers" },
];


const [campaigns, setCampaigns] = useState(allCampaigns);


const [openActionMenu, setOpenActionMenu] = useState(null);

const [showRenameModal, setShowRenameModal] = useState(false);

const [selectedCampaign, setSelectedCampaign] = useState(null);

const [newName, setNewName] = useState("");


const toggleType = (type) => {
  setSelectedTypes((prev) =>
    prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
  );
};

const toggleStatus = (status) => {
  setSelectedStatuses((prev) =>
    prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
  );
};


  const filteredCampaigns = campaigns.filter((c) => {
  const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(c.type);
  const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(c.status);

  let dateMatch = true;
  const campaignDate = new Date(c.rawDate);
  const today = new Date();

  if (dateRange === "Last 7 days") {
    const d = new Date(); d.setDate(today.getDate() - 7);
    dateMatch = campaignDate >= d;
  } else if (dateRange === "Last 30 days") {
    const d = new Date(); d.setDate(today.getDate() - 30);
    dateMatch = campaignDate >= d;
  } else if (dateRange === "Last 90 days") {
    const d = new Date(); d.setDate(today.getDate() - 90);
    dateMatch = campaignDate >= d;
  } else if (dateRange === "Last 365 days") {
    const d = new Date(); d.setDate(today.getDate() - 365);
    dateMatch = campaignDate >= d;
  } else if (startDate && endDate) {
    dateMatch = campaignDate >= new Date(startDate) && campaignDate <= new Date(endDate);
  } else if (startDate) {
    dateMatch = campaignDate >= new Date(startDate);
  } else if (endDate) {
    dateMatch = campaignDate <= new Date(endDate);
  }

  return typeMatch && statusMatch && dateMatch;
});

const handleRename = () => {
  setCampaigns(
    campaigns.map((campaign) =>
      campaign.id === selectedCampaign.id
        ? { ...campaign, name: newName }
        : campaign
    )
  );

  setShowRenameModal(false);
  setSelectedCampaign(null);
  setNewName("");
};

const handleDelete = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this campaign?"
  );

  if (confirmDelete) {
    setCampaigns(
      campaigns.filter((campaign) => campaign.id !== id)
    );
  }
};
  return (
    <div className="campaign-page">
      {/* TOP HEADER */}

      <div className="campaign-top">
        <h1>Campaigns</h1>

        <div className="campaign-top-actions">
       

          {/* calendar */}

          <button
  className={`view-btn ${viewMode === "list" ? "active" : ""}`}
  onClick={() => setViewMode("list")}
>
  <List size={18} />
  List
</button>

<button
  className={`view-btn ${viewMode === "calendar" ? "active" : ""}`}
  onClick={() => setViewMode("calendar")}
>
  <Calendar size={18} />
  Calendar
</button>
<button
  className="create-btn"
  onClick={() => navigate("/create-campaign")}
>
  Create
</button>
        </div>
      </div>

      {/* FILTERS */}

      <div className="campaign-filters">

        <div className="search-box">
          <Search size={18} />
          <input placeholder="Search..." />
        </div>

       

        {/* TYPE */}
<div className="filter-dropdown">
  <div
  className="filter-item"
  onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
>
  Type: {selectedTypes.length === 0 ? "All" : selectedTypes.join(", ")}
  <ChevronDown size={16} />
</div>

{openDropdown === "type" && (
  <div className="dropdown-menu">
    {["Email","SMS","Push","Whatsapp","Automation Flow","Multivariate Test","Landing Page","Survey","Ad","Social Post"].map((type) => (
      <label key={type}>
        <input
          type="checkbox"
          checked={selectedTypes.includes(type)}
          onChange={() => toggleType(type)}
        />
        {type}
      </label>
    ))}
  </div>
)}
</div>
{/* STATUS */}
<div className="filter-dropdown">
  <div
    className="filter-item"
    onClick={() => setOpenDropdown(openDropdown === "status" ? null : "status")}
  >
    Status: {selectedStatuses.length === 0 ? "All" : selectedStatuses.join(", ")}
    <ChevronDown size={16} />
  </div>

  {openDropdown === "status" && (
    <div className="dropdown-menu">
      {["Draft", "Ongoing", "Scheduled", "Completed"].map((status) => (
        <label key={status}>
          <input
            type="checkbox"
            checked={selectedStatuses.includes(status)}
            onChange={() => toggleStatus(status)}
          />
          {status}
        </label>
      ))}
    </div>
  )}
</div>

        {/* FOLDER */}

        <div className="filter-dropdown">

          <div
            className="filter-item"
            onClick={() =>
              setOpenDropdown(
                openDropdown === "folder"
                  ? null
                  : "folder"
              )
            }
          >
            Folder: All
            <ChevronDown size={16} />
          </div>

          {openDropdown === "folder" && (
            <div className="folder-dropdown">

              <div className="folder-search-section">

                <div className="folder-search-box">
                  <Search size={16} />

                  <input
                    type="text"
                    placeholder="Search..."
                  />
                </div>

              </div>

              <div className="folder-option">
                All
              </div>

              <div className="folder-option">
                Unfiled
              </div>

              <div className="create-folder">
                Create Folder
              </div>

            </div>
          )}
        </div>

       

       {/* DATE */}
<div className="filter-dropdown">
  <div
    className="filter-item"
    onClick={() => setOpenDropdown(openDropdown === "date" ? null : "date")}
  >
    Date: All
    <ChevronDown size={16} />
  </div>

  {openDropdown === "date" && (
    <div className="date-modal">

      <div className="date-modal-header">
        <span>Filter by</span>
        <button
          className="close-btn"
          onClick={() => setOpenDropdown(null)}
        >
          ✕
        </button>
      </div>

      <div className="date-type-grid">
        {["Date edited", "Date created", "Send date"].map((type) => (
          <div
            key={type}
            className={`date-type-card ${activeDateType === type ? "active-date" : ""}`}
            onClick={() => setActiveDateType(type)}
          >
            {type}
          </div>
        ))}
      </div>

      <div className="date-fields">

        <div className="date-field">
          <label>Date Range</label>
          <div className="custom-select-wrapper">
            <div className="custom-select-trigger"
  onClick={(e) => {
    e.stopPropagation();
    setShowDateRangeDropdown(!showDateRangeDropdown);
  }}
>
  {dateRange}
  <ChevronDown size={16} />
</div>

{showDateRangeDropdown && (
  <div className="custom-select-dropdown">
    {["All", "Last 7 days", "Last 30 days", "Last 90 days", "Last 365 days"].map((option) => (
      <div
        key={option}
        className={`custom-select-option ${dateRange === option ? "custom-select-active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setDateRange(option);
          setStartDate("");
          setEndDate("");
          setShowDateRangeDropdown(false);
        }}
      >
        {dateRange === option && <span className="check-mark">✓</span>}
        {option}
      </div>
    ))}
  </div>
)}
          </div>
        </div>

        <div className="date-field">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setDateRange("All");
            }}
          />
        </div>

        <div className="date-field">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setDateRange("All");
            }}
          />
        </div>

      </div>

      <div className="date-actions">
        <button
          className="cancel-btn"
          onClick={() => {
            setOpenDropdown(null);
            setDateRange("All");
            setStartDate("");
            setEndDate("");
          }}
        >
          Cancel
        </button>

        <button
          className="apply-btn"
          onClick={() => setOpenDropdown(null)}
        >
          Apply
        </button>
      </div>

    </div>
  )}
</div>

<span className="clear-all" onClick={() => {
  setSelectedTypes([]);
  setSelectedStatuses([]);
  setDateRange("All");
  setStartDate("");
  setEndDate("");
  setOpenDropdown(null);
}}>
  Clear all
</span>

        <div className="spacer"></div>

        <button className="analytics-btn">
          View analytics
          <ChevronDown size={16} />
        </button>

      </div>
{/* TABLE OR CALENDAR */}

{viewMode === "list" ? (

  <div className="campaign-table">

    <div className="table-header">
      <div>Name</div>
      <div>Date Edited</div>
      <div>Status</div>
      <div>Send To</div>
      <div>Analytics</div>
      <div>Actions</div>
    </div>
  {filteredCampaigns.length === 0 ? (
  <div className="no-results">
    <div className="no-results-egg">🥚</div>
    <h3>No results for your search</h3>
    <p>Try checking your spelling, adjusting any filters, or starting a new search.</p>
<button className="clear-search-btn" onClick={() => {
  setSelectedTypes([]);
  setSelectedStatuses([]);
  setDateRange("All");
  setStartDate("");
  setEndDate("");
}}>
  Clear search
</button>
  </div>
) : (
  filteredCampaigns.map((item) => (
    <div className="table-row" key={item.id}>
      <div className="name-cell">
        <Mail size={18} />
        {item.name}
      </div>
      <div>{item.date}</div>
      <div><span className="status-pill">{item.status}</span></div>
      <div>{item.sendTo}</div>
      <div>—</div>
      <div className="actions">
  <div className="edit-action-group">
    <button className="edit-btn">Edit</button>
    <button
      className="edit-arrow-btn"
      onClick={(e) => {
        e.stopPropagation();
        setOpenActionMenu(openActionMenu === item.id ? null : item.id);
      }}
    >
      ▲
    </button>

    {openActionMenu === item.id && (
      <div className="action-dropdown">
        <div
  className="action-option"
  onClick={() => {
    setSelectedCampaign(item);
    setNewName(item.name);
    setShowRenameModal(true);
    setOpenActionMenu(null);
  }}
>
  Rename
</div>
        <div className="action-option action-delete" onClick={() => handleDelete(item.id)}>
         Delete
        </div>
      </div>
    )}
  </div>

  <Copy size={18} style={{ cursor: "pointer" }} />
</div>
    </div>
  ))
)}

  </div>
) : (

  <CalendarPage />

)}

{showRenameModal && (
  <div className="modal-overlay">
    <div className="rename-modal">

      <h3>Rename Campaign</h3>

      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <div className="modal-actions">

        <button
          onClick={() => setShowRenameModal(false)}
        >
          Cancel
        </button>

        <button onClick={handleRename}>
          Save
        </button>

      </div>

    </div>
  </div>
)}

</div>
);
};

export default Campaigns;