import "./Footer.css";
import {
  Telegram,
  Tiktok,
  Facebook,
  Phone,
  Instagram,
  Gmail,
  OlashynLogoWhite,
} from "../icons/";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <OlashynLogoWhite className="footer-logo" />

            <p className="footer-description">{t("footer.txt")}</p>

            <div className="footer-contacts">
              <span className="footer-label">{t("footer.contacts")}</span>

              <span className="footer-contacts-block">
                <Gmail />
                <a href="mailto:info@recomup.com">olashyn.l.d@gmail.com</a>
              </span>

              <span className="footer-contacts-block">
                <Phone />
                <a href="tel:+38 068 170 45 34">+38 068 170 45 34</a>
              </span>
            </div>
          </div>

          <nav className="footer-nav">
            <div className="footer-column">
              <span className="footer-label">{t("footer.company")}</span>

              <Link
                className="footer-nav-link"
                to={routes.homepage}
                state={{ scrollTo: "company" }}
              >
                {t("footer.company")}
              </Link>

              <Link
                className="footer-nav-link"
                to={routes.homepage}
                state={{ scrollTo: "services" }}
              >
                {t("footer.services")}
              </Link>

              <Link
                className="footer-nav-link"
                to={routes.homepage}
                state={{ scrollTo: "portfolio" }}
              >
                {t("footer.portfolio")}
              </Link>
            </div>

            <div className="footer-column">
              <span className="footer-label">{t("footer.price")}</span>

              <Link
                className="footer-nav-link"
                to={routes.homepage}
                state={{ scrollTo: "price" }}
              >
                {t("footer.price")}
              </Link>

              <Link
                className="footer-nav-link"
                to={routes.homepage}
                state={{ scrollTo: "faq" }}
              >
                {t("footer.faq")}
              </Link>

              <Link
                className="footer-nav-link"
                to={routes.homepage}
                state={{ scrollTo: "footer" }}
              >
                {t("footer.contacts")}
              </Link>
            </div>
          </nav>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-rights">{t("footer.rights")}</span>

          <div className="footer-policy">
            <Link to={routes.homepage}>
              <span>{t("footer.privacy-policy")}</span>
            </Link>
            <span>{t("footer.cookies")}</span>
          </div>

          <div className="footer-socials">
            <a href="https://www.instagram.com/o.l.d._studio?utm_source=qr&igsh=N3c3YXB5aWJlNnc1&igsi=N3c3YXB5aWJlNnc1" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://t.me/Olashyn_Lanscape_Design" aria-label="Telegram">
              <Telegram />
            </a>
            <a href="https://www.tiktok.com/@olashyn_landscape_design?_r=1&_t=ZS-98xupBSvM1Y" aria-label="TikTok">
              <Tiktok />
            </a>
            <a href="https://www.facebook.com/share/1GZFMCo6fK/" aria-label="Facebook">
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;