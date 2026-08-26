import "../../styles/component.css";
import "./Description.css";

import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";

import portret from "../../icon/ddd.jpg"

const variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

function Description() {
  const { t } = useTranslation();
  const items = t("description.items", { returnObjects: true }) || [];

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
        <div className="component" id="company">
          <div className="describe-block">
            <div className="describe-head-text">
              <h2>{t("description.title")}</h2>
            </div>
            <div className="describe-txt">
              <div className="describe-txt-block">
                <ul className="describe-list">
                  {items.map((item, index) => (
                    <li className="describe-list-item" key={index}>
                      <span className="describe-list-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="describe-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="describe-txt-block">
                <img className="portret" src={portret} alt="portrait" />
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </>
  );
}

export default Description;
