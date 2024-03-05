import "../styles/header.css";
import Navigation from "../components/Navigation";

export default function Header() {
  return (
    <header className="header d-flex flex-row justify-content-between">
      <h1 className="headerText">HEATHER WOOLFORD</h1>
      <Navigation />
    </header>
  );
}
