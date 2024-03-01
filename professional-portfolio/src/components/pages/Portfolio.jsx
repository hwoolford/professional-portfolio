import Project from "../Project";

export default function Portfolio() {
  return (
    <>
      <h1 className="text-center title">Portfolio</h1>
      <div className="container">
      <Project
        url="http://www.google.com"
        img="./assets/projectplaceholder.png"
        alt=""
        title="Project Title"
        desc="Description"
        repo="http://www.github.com"
      />
      <Project
        url=""
        img="./assets/projectplaceholder.png"
        alt=""
        title="Project Title"
        desc="Description"
        repo=""
      />
      <Project
        url=""
        img="./assets/projectplaceholder.png"
        alt=""
        title="Project Title"
        desc="Description"
        repo=""
      />
      <Project
        url=""
        img="./assets/projectplaceholder.png"
        alt=""
        title="Project Title"
        desc="Description"
        repo=""
      />
      <Project
        url=""
        img="./assets/projectplaceholder.png"
        alt=""
        title="Project Title"
        desc="Description"
        repo=""
      />
      <Project
        url=""
        img="./assets/projectplaceholder.png"
        alt=""
        title="Project Title"
        desc="Description"
        repo=""
      />
      </div>
    </>
  );
}
