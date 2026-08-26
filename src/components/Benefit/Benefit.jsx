import "./Benefit.css";
import "../Description/Description.css";
import { OlashynLogoBlack, Mouse } from "../icons/";

import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

function Benefit() {
  const { t } = useTranslation();

  return (
    <>
      <Motion.div
        className="describe-row"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="component">
          <div className="describe-block">
            <div className="describe-head-text">
              <h2>{t("benefit.title")}</h2>
            </div>
            <div className="describe-txt">
              <div className="describe-txt-block">
                <p>{t("benefit.text")}</p>
              </div>
              <div className="describe-txt-block">
                <p>{t("benefit.secText")}</p>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </>
  );
}

export default Benefit;
