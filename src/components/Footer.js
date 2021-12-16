import React from 'react';
import Octocat from "../img/Octocat.png";
import lnkin from "../img/LI-In-Bug.png";
export default function Footer() {
  return (
    <div>
        <p>

<a href="https://github.com/G-bot987"> 
<img src={Octocat} className="octocat" alt="Octocat img" />
</a>

<a href="https://www.linkedin.com/in/georgia-hobson-b48434150/"> 
<img src={lnkin} className="lnkin" alt="my linked in img" />
</a>
      </p>
    </div>
  );
}