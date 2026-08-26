import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../../routes";
import { OlashynLogoGreen } from "../icons";

const Sidebar = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const links = [
    { key: "nav.services", scrollTo: "services" },
    { key: "nav.company", scrollTo: "company" },
    { key: "nav.portfolio", scrollTo: "portfolio" },
    { key: "nav.price", scrollTo: "price" },
    { key: "nav.faq", scrollTo: "faq" },
    { key: "nav.contacts", scrollTo: "footer" },
  ];

  return (
    <nav id="sidebar" className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="sidebar-top">
        <Link
          className="sidebar-logo"
          to={routes.homepage}
          state={{ scrollTo: "preview" }}
          onClick={onClose}
        >
          <OlashynLogoGreen />
        </Link>

        <button className="btn-close" onClick={onClose} aria-label={t("common.close")}>
          ✕
        </button>
      </div>

      <div className="sidebar-links">
        {links.map((link) => (
          <Link
            key={link.scrollTo}
            className="nav-link"
            to={routes.homepage}
            state={{ scrollTo: link.scrollTo }}
            onClick={onClose}
          >
            {t(link.key)}
          </Link>
        ))}
      </div>

      <div className="consultation-btn-sidebar">
        <Link
          className="free-consultation-btn-sidebar"
          to={routes.homepage}
          state={{ scrollTo: "footer" }}
          onClick={onClose}
        >
          {t("buttons.consult")}
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
