import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
    <a href="https://github.com/hwoolford" target="_blank" rel="noreferrer">
      <img className="socialLogo" src="./assets/githublogo.png" alt="GitHub Repo"></img>
    </a>
    <a href="https://www.linkedin.com/in/hwoolford/" target="_blank" rel="noreferrer">
    <img className="socialLogo" src="./assets/linkedinlogo.png" alt="LinkedIn Page"></img>
  </a>
  </footer>
  );
}