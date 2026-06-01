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
            src="https://i.pinimg.com/736x/43/50/2c/43502c6cfcf9ae0a8713a4ffd9bf95a3.jpg"
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