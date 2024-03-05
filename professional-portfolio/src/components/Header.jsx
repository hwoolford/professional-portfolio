import "../styles/header.css";
import Navigation from "../components/Navigation";

export default function Header() {
  return (
    <header className="header d-flex flex-row">
      <h1 className="headerText">HEATHER WOOLFORD</h1>
      <Navigation />
    </header>
  );
}
