import {LayoutDashboard} from "lucide-react";
import { Megaphone} from "lucide-react";
import { Bot} from "lucide-react";
import { Users} from "lucide-react";
import {BarChart3} from "lucide-react";


const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="logo-section">
        <h1 className="logo-title">Orcamail</h1>

        <p className="logo-subtitle">
          MARKETING PRO
        </p>
      </div>

      <div className="menu-list">

        <SidebarItem
          icon={<LayoutDashboard size={18} />}
          text="Dashboard"
        />

        <SidebarItem
          icon={<Megaphone size={18} />}
          text="Campaigns"
        />

        <SidebarItem
          icon={<Bot size={18} />}
          text="Automation"
        />

        <SidebarItem
          icon={<Users size={18} />}
          text="Contacts"
        />

        <SidebarItem
          icon={<BarChart3 size={18} />}
          text="Analytics"
        />

        <div className="active-menu">
          <SidebarItem text="AI Hub" />
        </div>

      </div>

      <div className="sidebar-footer">
        <p>⚙ Settings</p>
        <p>❓ Support</p>
      </div>

    </div>
  );
};

function SidebarItem({ icon, text }) {
  return (
    <div className="menu-item">
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default Sidebar;