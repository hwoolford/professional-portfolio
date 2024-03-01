import Project from "../Project";

export default function Portfolio() {
  return (
    <div className="body container-fluid container">
      <h1 className="text-center title">Portfolio</h1>
      <div className="row g-3">
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
            url=""
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo=""
          />
        </div>
        <div className="col-md-4">
          <Project
            url=""
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo=""
          />
        </div>
        <div className="row g-3">
          <div className="col-md-4">
          <Project
            url=""
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo=""
          />
          </div>
          <div className="col-md-4">
          <Project
            url=""
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo=""
          />
          </div>
          <div className="col-md-4">
          <Project
            url=""
            img="./assets/projectplaceholder.png"
            alt=""
            title="Project Title"
            desc="Description"
            repo=""
          />
          </div>
        </div>
      </div>
    </div>
  );
}
