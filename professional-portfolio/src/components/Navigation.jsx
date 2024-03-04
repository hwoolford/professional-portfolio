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
          ABOUT ME
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          PORTFOLIO
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          CONTACT
        </a>
      </li>
      <li className="nav-item">
        <a
        href="/resume"
        onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          RESUME
        </a>
      </li>
    </ul>
  );
}

// export default function Navigation({ currentPage, handlePageChange }) {
//   const handleClick = (event, page) => {
//     event.preventDefault();
//     handlePageChange(page);
//   };

//   return (
//     <ul className="nav nav-pills navbar">
//       <li className="nav-item">
//         <a
//           href="/"
//           onClick={(event) => handleClick(event, "About")}
//           className={currentPage === "About" ? "nav-link active" : "nav-link"}
//         >
//           ABOUT ME
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="/portfolio"
//           onClick={(event) => handleClick(event, "Portfolio")}
//           className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
//         >
//           PORTFOLIO
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="/contact"
//           onClick={(event) => handleClick(event, "Contact")}
//           className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           CONTACT
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="/resume"
//           onClick={(event) => handleClick(event, "Resume")}
//           className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
//         >
//           RESUME
//         </a>
//       </li>
//     </ul>
//   );
// }
