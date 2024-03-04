import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer fixed-bottom">
      {/* <div className='githubContainer'> */}
    <a href="https://github.com/hwoolford" target="_blank" rel="noreferrer">
      <img className="socialLogo" src="./assets/githublogo.png" alt="GitHub Repo"></img>
    </a>
    {/* <a href="https://github.com/hwoolford" target="_blank" rel="noreferrer">
      <img className="socialLogo" src="./assets/githublogowhite.png" alt="GitHub Repo"></img>
    </a> */}
    {/* </div> */}
    <a href="https://www.linkedin.com/in/hwoolford/" target="_blank" rel="noreferrer">
    <img className="socialLogo" src="./assets/linkedinlogo.png" alt="LinkedIn Page"></img>
  </a>
  <a href="https://stackoverflow.com/users/23531312/forxtoisate" target="_blank" rel="noreferrer">
    <img className="socialLogo" src="./assets/stacklogo.png" alt="Stackoverflow Page"></img>
  </a>
  
  </footer>
  );
}