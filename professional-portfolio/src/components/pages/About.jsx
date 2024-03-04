import "../../styles/about.css";

export default function About() {
  return (
    <>
      <div className="body container-fluid">
        <h1 className="text-center title">About Me</h1>
        <div className="row container">
          <div className="col-md-3 col-sm-12">
            <img className="portrait" src="./assets/photo.png" alt="portrait" />
          </div>
          <div className="col-md-9 col-sm-12">
            <p className="about">
              Passionate educator turned aspiring full-stack web developer,
              equipped with a web development certificate from the University of
              New Hampshire. Eager to apply my background in education, which
              has honed my communication, problem-solving, and collaboration
              skills, to the dynamic world of web development.
              <br />
              <br />
              Proficient in both front-end and back-end technologies, with a
              keen eye for detail and a drive for continuous learning. Excited
              to leverage my diverse experiences and embark on a rewarding
              journey in creating innovative web solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
