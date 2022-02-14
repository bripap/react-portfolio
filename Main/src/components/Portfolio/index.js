import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'tech-takeout',
      description: 'express.js/node.js/passport.js/sequalize/mySQL/bcrypt/express-handlebars/express-sessions',
      link: "https://tech-takeout.herokuapp.com/",
      repo: "https://github.com/kathrynneal221/Project2_TechTakeout"
    },
    {
      name: 'food-tracker',
      description: 'APIs/Materialize/HTML/CSS/Javascript/JQuery',
      link: "https://bripap.github.io/food-tracker/",
      repo: "https://github.com/bripap/food-tracker"
    },
    {
      name: 'coding-quiz',
      description: 'Javascript Coding Quiz',
      link: "https://bripap.github.io/coding-quiz/",
      repo: "https://github.com/bripap/coding-quiz"
    },
    {
      name: 'day-planner',
      description: 'Node.js',
      link: "https://bripap.github.io/daily-planner/",
      repo: "https://github.com/bripap/daily-planner"
    },
    {
      name: 'tech-blog',
      description: 'handlebars.js/Sequalize,express-session',
      link: "https://polar-chamber-71511.herokuapp.com/",
      repo: "https://github.com/bripap/14-MVC-Tech-Blog"
    },
    {
      name: 'weather-dashboard',
      description: 'HTML/CSS/API',
      link: "https://bripap.github.io/weather_dashboard/",
      repo: "https://github.com/bripap/weather_dashboard"
    },
  ]);


  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
