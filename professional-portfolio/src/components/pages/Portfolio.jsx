import Project from "../Project";
// import "../../styles/portfolio.css"

export default function Portfolio() {
  return (
    <div className="body container">
      <h1 className="text-center title">Portfolio</h1>
      <div className="row mb2">
        <div className="col-md-4">
          <Project
            url="https://thawing-dawn-01968-1886d8c04121.herokuapp.com/"
            img="./assets/wetmyplants.png"
            alt="Wet My Plants App Screenshot"
            title="Wet My Plants"
            desc="Perenual API, node.js, express.js, bcrypt, mysql2, sequelize, express-handlebars"
            repo="https://github.com/CRNaro/group-project-02"
          />
        </div>
        <div className="col-md-4">
          <Project
            url="http://www.google.com"
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo="http://www.github.com"
          />
        </div>
        <div className="col-md-4">
          <Project
            url="http://www.google.com"
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo="http://www.github.com"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Project
            url="http://www.google.com"
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo="http://www.github.com"
          />
        </div>
        <div className="col-md-4">
          <Project
            url="http://www.google.com"
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo="http://www.github.com"
          />
        </div>
        <div className="col-md-4">
          <Project
            url="http://www.google.com"
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo="http://www.github.com"
          />
        </div>
      </div>
    </div>
  );
}
