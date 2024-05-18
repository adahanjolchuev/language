import React, { useEffect } from "react";
import "./home.css";
import cars from "../../img/cars.svg";
import Hero from "../../components/Hero/hero";
import AboutBuilding from "../../AboutBuilding";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

const Home = () => {
  const { value } = useSelector((state) => state);

  console.log(value);

  const { t, i18n } = useTranslation();

  function lng() {
    if (value === "en") {
      return i18n.changeLanguage("en");
    } else {
      return i18n.changeLanguage("ru");
    }
  }

  useEffect(() => {
    lng();
  }, [value]);

  return (
    <>
      <div id="home">
        <div className="container">
          <div className="home">
            <h1>{t("HomeH1")}</h1>
            <div className="homeBtns">
              <button>{t('HomeBtn1')}</button>
              <button>{t('HomeBtn2')}</button>
            </div>
            <img
              src="https://s3-alpha-sig.figma.com/img/78de/89d9/95d5cfc742b4ed09758d356c7de4fe68?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOu0T7AOIhIH~E84TW4pNLXyjNJu32Qj3QkT0FIPwU3SOwJdOLITfhyUVYn~b45AF1ODHsUxonteeJl83v0zogOodFYsj6eG2s3sVGhxX-8FDiNr2-jaK0s~DLdHyWyB0Ve58O7IG3iUyd~77tKy3IjzgAIpx76B4mHIFE0MOGgkALhKufjLnek2vpxp0J0Ep4uY19XNhBOBlCDzLFhIdGPpWj574C3aAEWnb76hbeoNl0ylgTWdzp1jiisqahnxZ3PBS04e-xwJ38giNzZpg~FQG~z1r0VYRtGYjRi3xpH3hgf3HZx-lk8AMFu9fcwt54JvMbsbPRJ6kgkHKuhr2A__"
              alt=""
            />
            <img src={cars} alt="" />
          </div>
        </div>
      </div>
      <Hero />
      <AboutBuilding />
    </>
  );
};

export default Home;
