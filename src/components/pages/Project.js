import React from "react";
import techBlogImg from "../../img/screenshottechblog.png";
import FiveStarLocal from "../../img/5starlocal.png";
import EmployeeManager from "../../img/employeemanager.png"
import Inquistive from "../../img/inquisitive.png"
import Pwordgen from "../../img/passwordgenerator.PNG"
import Weatherdash from "../../img/weatherdashboard.png"



export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        "WHEN I am presented with the Portfolio section THEN I see titled images
        of six of the developer’s applications with links to both the deployed
        applications and the corresponding GitHub repositories"
      </p>

      <div className="projectbox">
        <h2>Tech Blog</h2>
        <h3>please click on the image to be taken to the deployed version</h3>
        <a href="https://dry-eyrie-85153.herokuapp.com/">
          <img src={techBlogImg} className="imgstyling" alt="techblog img" />
        </a>
        <p>A difficult and time consuming project, with both a working front and backend and login logic using, sequlizes, handlebars, cookies and api calls</p>
        <a className="repolnk"href="https://github.com/G-bot987/TechBlog"> the repo</a>
      </div>
      
      <div className="projectbox">
        <h2>5StarLocal Group Project</h2>
        <h3>please click on the image to be taken to the deployed version</h3>
        <a href="https://vast-journey-10843.herokuapp.com/login">
          <img src={FiveStarLocal} className="imgstyling" alt="techblog img" />
        </a>
        <p>A group project with  similar functionality to TechBlog </p>
        <a className="repolnk"href="https://github.com/G-bot987/My-5-Star-Local"> the repo</a>
      </div>

      <div className="projectbox">
        <h2>Employee Manager</h2>
        <h3>please click on the image to be taken to the deployed version</h3>
        <a href=" https://drive.google.com/file/d/16ZVj7zfFe_IYRHH2Utjb4Rl4dU076VWi/view">
          <img src={EmployeeManager} className="imgstyling" alt="techblog img" />
        </a>
        <p>A backend commandline application with employee management application</p>
        <a className="repolnk"href="https://github.com/G-bot987/employee-manager-29.08.21"> the repo</a>
      </div>

      <div className="projectbox">
        <h2>Inquistive Group Project</h2>
        <h3>please click on the image to be taken to the deployed version</h3>
        <a href="https://uk-inquizitive.herokuapp.com/">
          <img src={Inquistive} className="imgstyling" alt="techblog img" />
        </a>
        <p>The most complicated application that I have worked on, A full stack quiz application</p>
        <a className="repolnk"href="https://github.com/G-bot987/inQuizitive"> the repo</a>
      </div>

      <div className="projectbox">
        <h2>Password Generator</h2>
        <h3>please click on the image to be taken to the deployed version</h3>
        <a href="https://g-bot987.github.io/20.06.21/">
          <img src={Pwordgen} className="imgstyling" alt="techblog img" />
        </a>
        <p>A javascript password generator, that works to user criteria</p>
        <a className="repolnk"href="https://github.com/G-bot987/20.06.21"> the repo</a>
      </div>
      
      <div className="projectbox">
        <h2>Weatherdashboard</h2>
        <h3>please click on the image to be taken to the deployed version</h3>
        <a href="https://g-bot987.github.io/weatherdashboard/">
          <img src={Weatherdash} className="imgstyling" alt="techblog img" />
        </a>
        <p>a description</p>
        <a className="repolnk"href="https://github.com/G-bot987/weatherdashboard"> the repo</a>
      </div>







    </div>

    
  );
}
