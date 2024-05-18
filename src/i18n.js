import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        HomeH1: "Smart delivery of materials for complex construction sites",
        HomeBtn1: "Order a demo",
        HomeBtn2: "More details",
        HomeA1: "Home",
        HomeA2: "About us",
        HomeA3: "Product",
        HomeA4: "Process",
        HomeA5: "Reliability",
      },
    },
    ru: {
      translation: {
        HomeH1: "Умная доставка материалов для сложных строительных площадок",
        HomeBtn1: "Заказать демо",
        HomeBtn2: "Подробнее",
        HomeA1: "Главная",
        HomeA2: "О нас",
        HomeA3: "Продукция",
        HomeA4: "Процесс",
        HomeA5: "Надёжность",
      },
    },
  },
  lng: "en",
  fallBackLng: "en",
});
