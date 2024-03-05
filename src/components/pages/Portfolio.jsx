import Project from "../Project";
// import "../../styles/portfolio.css"

export default function Portfolio() {
  return (
    <div className="body container">
      <h1 className="text-center title">Portfolio</h1>
      <div className="row mb2">
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://thawing-dawn-01968-1886d8c04121.herokuapp.com/"
            img="./assets/wetmyplants.png"
            alt="Wet My Plants App Screenshot"
            title="Wet My Plants"
            desc="Perenual API, node.js, express.js, bcrypt, mysql2, sequelize, express-handlebars"
            repo="https://github.com/CRNaro/group-project-02"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://hwoolford.github.io/storyseeker-for-biblio-cinephiles/"
            img="./assets/storyseeker.png"
            alt="StorySeeker App Screenshot"
            title="StorySeeker"
            desc="HTML, CSS, JavaScript, Bulma, OpenLibrary API, TMDB API"
            repo="https://github.com/hwoolford/storyseeker-for-biblio-cinephiles"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://hwoolford.github.io/weather-dashboard/"
            img="./assets/weatherdashboard.png"
            alt="Weather Dashboard App Screenshot"
            title="Weather Dashboard"
            desc="HTML, CSS, Bootstrap, JavaScript, JQuery, OpenWeather API"
            repo="https://github.com/hwoolford/weather-dashboard"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://hwoolford.github.io/multiple-choice-js-coding-quiz/"
            img="./assets/codingquiz.png"
            alt="Coding Quiz App Screenshot"
            title="Coding Quiz"
            desc="HTML, CSS, JavaScript"
            repo="https://github.com/hwoolford/multiple-choice-js-coding-quiz"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://hwoolford.github.io/work-day-scheduler/"
            img="./assets/workdayscheduler.png"
            alt="Workday Scheduler App Screenshot"
            title="Workday Scheduler"
            desc="HTML, CSS, JavaScript, JQuery, Day.js"
            repo="https://github.com/hwoolford/work-day-scheduler"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Project
            url="https://hwoolford.github.io/password-generator/"
            img="./assets/passwordgenerator.png"
            alt="Password Generator App Screenshot"
            title="Password Generator"
            desc="HTML, CSS, JavaScript"
            repo="https://github.com/hwoolford/password-generator"
          />
        </div>
      </div>
    </div>
  );
}
