import '../styles/navigation.css'

// eslint-disable-next-line react/prop-types
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills navbar">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
        href="/resume"
        onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
