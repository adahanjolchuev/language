import React from "react";
import about from "../img/about img.svg";
import './aboutbuilding.css'

const AboutBuilding = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <h1>Строительство - это хаос</h1>
          <p>
            Хаос может быть удивительной творческой силой, воздвигающая новые
            здания из пыли. Хаос вызывает несчастные случаи, задержки и потери.
            Он вводит проекты в стресс и разочарование. Это означает, что вы
            действительно не контролируете ситуацию.
          </p>
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
