import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className='socialContainer'>
    <a href="https://github.com/hwoolford" target="_blank" rel="noreferrer">
      <img className="socialLogo normal" src="./assets/githublogo.png" alt="GitHub Repo"></img>
    </a>
    <a href="https://github.com/hwoolford" target="_blank" rel="noreferrer">
      <img className="socialLogo hover" src="./assets/githublogowhite.png" alt="GitHub Repo"></img>
    </a>
    </div>
    <div className='socialContainer'>
    <a href="https://www.linkedin.com/in/hwoolford/" target="_blank" rel="noreferrer">
    <img className="socialLogo normal" src="./assets/linkedinlogo.png" alt="LinkedIn Page"></img>
  </a>
  <a href="https://www.linkedin.com/in/hwoolford/" target="_blank" rel="noreferrer">
    <img className="socialLogo hover" src="./assets/linkedinlogowhite.png" alt="LinkedIn Page"></img>
  </a>
  </div>
  <div className='socialContainer'>
  <a href="https://stackoverflow.com/users/23531312/forxtoisate" target="_blank" rel="noreferrer">
    <img className="socialLogo normal" src="./assets/stacklogo.png" alt="Stackoverflow Page"></img>
  </a>
  <a href="https://stackoverflow.com/users/23531312/forxtoisate" target="_blank" rel="noreferrer">
    <img className="socialLogo hover" src="./assets/stacklogowhite.png" alt="Stackoverflow Page"></img>
  </a>
  </div>
  </footer>
  );
}
