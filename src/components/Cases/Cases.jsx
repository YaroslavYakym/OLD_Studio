import "../../styles/component.css";
import "../../styles/loader.css";
import "./Cases.css";

import { CasesBox } from "../CasesBox";
import { useTranslation } from "react-i18next";

import img1 from "../../icon/garden1.jpg";
import img2 from "../../icon/garden2.jpg";

import { albums } from "../../constants";

const Cases = () => {
  const { t } = useTranslation();

   const items = t("album.items", { returnObjects: true }) || [];

  const images = [img1, img2];

const albumItems = items.slice();


  return (
    
      <div className="component" id="portfolio">

        <div className="headComponents">
          <span className="titleComponents">{t("caseBox.label")}</span>

          <div className="headComponentsTxt">
            <span className="ComponentsUpperTxt">
              {t("caseBox.title")}
              <span className="ComponentsHeadTitle">
                {t("caseBox.headTitle")}
              </span>
              {t("caseBox.secTitle")}
            </span>
            <p>
              <span className="ComponentsLowerTxt">
                {t("caseBox.desc")}
              </span>
            </p>
          </div>
        </div>

          
            <div className="CasesBoxesComponents">
              {albumItems.map((item, index) => (
                <CasesBox
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  buttonText={item.buttonText}
                  album={albums[item.album]}
                  imageUrl={images[index % images.length]}
                />
              ))}
            </div>

      </div>

      
    
  );

 
};

export default Cases;
