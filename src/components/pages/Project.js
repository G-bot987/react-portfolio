import React from "react";
import techBlogImg from "../../img/screenshottechblog.png";

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
        <h2>a project</h2>
        <h3>please click on the image to be taken to the deployed version</h3>
        <a href="https://dry-eyrie-85153.herokuapp.com/">
          <img src={techBlogImg} className="imgstyling" alt="techblog img" />
        </a>
        <p>a description</p>
        <a className="repolnk"href="https://github.com/G-bot987/TechBlog"> the repo</a>
      </div>
    </div>
  );
}
