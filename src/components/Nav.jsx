import "../styles/style.css";
import menuIcon from "../assets/menu.svg";
import loginIcon from "../assets/login.svg";

export default function Nav() {
  return (
    <div className="nav--container">
      <img className="nav-menuIcon" src={menuIcon} alt="menu icon" />
      <img className="nav-loginIcon" src={loginIcon} alt="menu icon" />
    </div>
  );
}
