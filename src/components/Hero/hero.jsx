import React from "react";
import "./hero.css";
import hero1 from "../../img/hero 1.svg";
import hero2 from "../../img/hero 1.svg";
import hero3 from "../../img/hero3.svg";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="heroblock">
            <img src={hero1} alt="" />
            <h3>Повышение эффективности</h3>
            <p>
              Эффективные проекты стоят дешевле <br />и завершаются в срок.
            </p>
          </div>
          <div className="heroblock">
            <img src={hero2} alt="" />
            <h3>Снижение потерь</h3>
            <p>
              Тщательно отслеживайте движение <br /> стройматериалов, чтобы
              избежать краж <br /> и повреждений.
            </p>
          </div>
          <div className="heroblock">
            <img src={hero3} alt="" />
            <h3>Повышение безопасности</h3>
            <p>
              Обеспечьте здоровье и благополучие <br /> людей, работающих на вашей
              площадке.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
