import React, { useEffect, useState } from "react";
import logo from "../../img/logo1.svg";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { value } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [select, setSelect] = useState("ru");
  const { t, i18n } = useTranslation();

  function lang() {
    if (value === "en") {
      return i18n.changeLanguage("en");
    } else {
      return i18n.changeLanguage("ru");
    }
  }

  useEffect(() => {
    dispatch({ type: "ADD_TEXT", payload: select });
    lang();
  }, [select, value]);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" />
          <div className="headerLeft">
            <nav>
              <a href="#">{t("HomeA1")}</a>
              <a href="#">{t("HomeA2")}</a>
              <a href="#">{t("HomeA3")}</a>
              <a href="#">{t("HomeA4")}</a>
              <a href="#">{t("HomeA5")}</a>
            </nav>
            <select onChange={(e) => setSelect(e.target.value)}>
              <option value={"ru"}>русский</option>
              <option value={"en"}>Англиский</option>
            </select>
            <button>{t("HomeBtn1")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
