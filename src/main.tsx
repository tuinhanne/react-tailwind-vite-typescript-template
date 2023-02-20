import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "@styles/tailwind.css";
import { viLng, enLng } from "@languages/index";
import router from "./router";

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: viLng,
    },
    en: {
      translation: enLng,
    },
  },
  lng: "vi",
  fallbackLng: "vi",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
