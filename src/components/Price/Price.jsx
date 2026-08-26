import "../../styles/component.css";
import "../../styles/loader.css";
import "./Price.css";
import { useState, useEffect } from "react";
import { PriceBox } from "../PriceBox";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 2;

const Price = () => {
  const { t } = useTranslation();

  const items = t("price.items", { returnObjects: true }) || [];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const paginatedItems = items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );


  if (!items.length) {
    return (
      <div className="loadingWrapper">
        <div className="loader"></div>
        <p className="loadingText">{t("common.loading")}</p>
      </div>
    );
  }

  return (
    
      <div className="component" id="price">

        <div className="headComponents">
          <span className="titleComponents">{t("priceBox.label")}</span>

          <div className="headComponentsTxt">
            <span className="ComponentsUpperTxt">
              {t("priceBox.title")}
              <span className="ComponentsHeadTitle">
                {t("priceBox.headTitle")}
              </span>
              {t("priceBox.secTitle")}
            </span>
            <p>
              <span className="ComponentsLowerTxt">
                {t("priceBox.desc")}
              </span>
            </p>
          </div>
        </div>

        
        {!isMobile && (
          <>
            <div className="CasesBoxesComponents">
              {paginatedItems.map((item) => (
                <PriceBox
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  includes={item.includes}
                  buttonText={item.buttonText}
                  details={item.details}
                  technicalDrawings={item.technicalDrawings}
                  priceTitle={item.priceTitle}
                  priceItems={item.priceItems}
                />
              ))}
            </div>

            <div className="CasesPagination">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`paginationBtn ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}

      
        {isMobile && (
          <div className="CasesScroll">
            {items.map((item) => (
              <div className="CasesScrollItem" key={item.id}>
                <PriceBox
                  title={item.title}
                  subtitle={item.subtitle}
                  includes={item.includes}
                  buttonText={item.buttonText}
                  details={item.details}
                  technicalDrawings={item.technicalDrawings}
                  priceTitle={item.priceTitle}
                  priceItems={item.priceItems}
                />
              </div>
            ))}
          </div>
        )}

      </div>
    
  );
};

export default Price;
