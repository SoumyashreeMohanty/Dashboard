import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Megaphone,
  Bot,
  Users,
  BarChart3,
  Settings2,
  Sparkles, 
  HelpCircle,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const navigate = useNavigate();

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
      <div className="logo-section">
        {!collapsed && (
          <>
            <h1 className="logo-title">Orcamail</h1>
            <p className="logo-subtitle">MARKETING PRO</p>
          </>
        )}
      </div>

      <div className="menu-list">

        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Home"
          collapsed={collapsed}
          active={activeMenu === "Home"}
          onClick={() => {
            setActiveMenu("Home");
            navigate("/");
          }}
        />

        <SidebarItem
          icon={<Megaphone size={20} />}
          text="Campaigns"
          collapsed={collapsed}
          active={activeMenu === "Campaigns"}
          onClick={() => {
            setActiveMenu("Campaigns");
            navigate("/campaigns");
          }}
        />

        <SidebarItem
          icon={<Bot size={20} />}
          text="Automation"
          collapsed={collapsed}
          active={activeMenu === "Automation"}
          onClick={() => {
            setActiveMenu("Automation");
          }}
        />

        <SidebarItem
          icon={<Users size={20} />}
          text="Contacts"
          collapsed={collapsed}
          active={activeMenu === "Contacts"}
          onClick={() => {
            setActiveMenu("Contacts");
          }}
        />

        <SidebarItem
          icon={<BarChart3 size={20} />}
          text="Analytics"
          collapsed={collapsed}
          active={activeMenu === "Analytics"}
          onClick={() => {
            setActiveMenu("Analytics");
          }}
        />

        <SidebarItem
          icon={<Sparkles size={20} />}
          text="AI Hub"
          collapsed={collapsed}
          active={activeMenu === "AI Hub"}
          onClick={() => {
            setActiveMenu("AI Hub");
          }}
        />

      </div>

      <div className="sidebar-footer">

        <SidebarItem
        icon={<Settings2 size={20} />}
          text="Settings"
          collapsed={collapsed}
          active={activeMenu === "Settings"}
          onClick={() => {
            setActiveMenu("Settings");
          }}
        />

        <SidebarItem
          icon={<HelpCircle size={20} />}
          text="Support"
          collapsed={collapsed}
          active={activeMenu === "Support"}
          onClick={() => {
            setActiveMenu("Support");
          }}
        />

      </div>

      <button
        className="collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <PanelLeftOpen size={20} />
        ) : (
          <PanelLeftClose size={20} />
        )}
      </button>
    </div>
  );
};

function SidebarItem({
  icon,
  text,
  collapsed,
  active,
  onClick,
}) {
  return (
    <div
      className={`menu-item ${active ? "active-menu" : ""}`}
      onClick={onClick}
    >
      {icon}

      {!collapsed && (
        <span className="menu-text">
          {text}
        </span>
      )}
    </div>
  );
}

export default Sidebar;