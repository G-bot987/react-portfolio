import React from "react";
import Georgia from "../../img/Georgia.jpg";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <img src={Georgia} className="Georgia" alt="its me" />
      <p>
        Thank you for taking the time to view my profile, After Graduating from
        Marketing in 2019 my passion from digital marketing evolved into a
        interest in web development. It was this passion that led me to enroll
        on the University of Birmingham coding Bootcamp. The course curriculum
        has seem me learn the full stack from HTML5, MongoDB to React.
      </p>
    </div>
  );
}
