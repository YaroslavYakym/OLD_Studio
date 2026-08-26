import "./Servises.css";
import "../../styles/component.css";

import { useTranslation } from "react-i18next";

import { ServisesComponents } from "../ServisesComponents";
import { ServisesComponentsReverse } from "../ServisesComponentsReverse";

import familiar from "../../icon/familiar.png";
import concept from "../../icon/concept.png";
import virtual from "../../icon/virtual.jpg";
import plan from "../../icon/plan.PNG";
import documantation from "../../icon/documantation.jpg"
import album from "../../icon/album.png";

function Servises() {
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true });

  const images = [familiar, plan, concept, virtual,  documantation, album];

  return (
    <div className="component" id="services">
      <div className="BlockComponents">
        <div className="servises-heaad">
          <div className="servise-scroll-line"></div>
          <div className="servise-scroll">
            <h2>{t("preview.scroll")}</h2>
          </div>
        </div>
        {services.map((item, index) => {
          const Component =
            index % 2 === 0 ? ServisesComponents : ServisesComponentsReverse;

          return (
            <Component
              key={index}
              title={item.title}
              text={item.text}
              image={images[index]}
              delay={index * 0.15}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Servises;
