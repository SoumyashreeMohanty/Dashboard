import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
      const navigate = useNavigate();
  return (

    <div className="header">

      <input
        type="text"
        placeholder="Search... "
        className="search-input"
      />

      <div className="header-right">

       

        <Bell size={18} />

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


