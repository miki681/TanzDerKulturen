import logo from "../assets/logo.jpg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Tanz der Kulturen Logo" className="logo" />
    </header>
  );
}

