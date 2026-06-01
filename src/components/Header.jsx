import { Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="header">

      <input
        type="text"
        placeholder="Search AI tools and models..."
        className="search-input"
      />

      <div className="header-right">

        <button className="campaign-btn">
          + New Campaign
        </button>

        <Bell size={20} />

        <div className="profile">

          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="profile-img"
          />

          <div>
            <p className="profile-name">
              Alex Rivers
            </p>

            <p className="profile-role">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Header;