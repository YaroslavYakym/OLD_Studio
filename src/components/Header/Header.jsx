import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Sidebar } from "../Sidebar";
import { routes } from "../../routes";

import "./Header.css";

import { OlashynLogoBlack, Sun, Moon, LanguageIcon, MenuIcon } from "../icons";

function Header() {
  const [isOpen, setIsSidebarOpen] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const toggleLanguage = () => {
    const next = i18n.language === "uk" ? "en" : "uk";
    i18n.changeLanguage(next);
  };

  return (
    <div className="header-spaser">
      <header className="header">
        <div className="HeaderComponents">
          <Link
            className="header-img"
            to={routes.homepage}
            state={{ scrollTo: "preview" }}
          >
            <OlashynLogoBlack />
          </Link>

          <nav className="main-navigation">
            <Link
              className="nav-link"
              to={routes.homepage}
              state={{ scrollTo: "services" }}
            >
              {t("nav.services")}
            </Link>

            <Link
              className="nav-link"
              to={routes.homepage}
              state={{ scrollTo: "company" }}
            >
              {t("nav.company")}
            </Link>

            <Link
              className="nav-link"
              to={routes.homepage}
              state={{ scrollTo: "footer" }}
            >
              {t("nav.contacts")}
            </Link>

            <Link
              className="nav-link"
              to={routes.homepage}
              state={{ scrollTo: "portfolio" }}
            >
              {t("nav.portfolio")}
            </Link>

            <Link
              className="nav-link"
              to={routes.homepage}
              state={{ scrollTo: "price" }}
            >
              {t("nav.price")}
            </Link>

            <Link
              className="nav-link"
              to={routes.homepage}
              state={{ scrollTo: "faq" }}
            >
              {t("nav.faq")}
            </Link>
          </nav>

          <div className="header-btn">
            <button className="theme" onClick={toggleTheme}>
              {theme === "light" ? <Moon /> : <Sun />}
            </button>

            <button className="language" onClick={toggleLanguage}>
              <LanguageIcon />
              {i18n.language.toUpperCase()}
            </button>

            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              id="menu-btn"
              className="menu-btn"
              aria-label={t("common.menu")}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}

export default Header;
