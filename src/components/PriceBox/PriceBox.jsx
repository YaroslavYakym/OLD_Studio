import { useState } from "react";
import "./PriceBox.css";
import { FullscreenModal } from "../FullscreenModal";

const PriceBox = ({
  title,
  subtitle,
  includes = [],
  buttonText,
  details = [],
  technicalDrawings = [],
  priceTitle,
  priceItems = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="CasesBoxes">
        <div className="CasesBoxesTxtBlock">
          <div className="CaseHeadTxt">{title}</div>

          <div className="CaseBody">
            <p className="CaseSubtitle">{subtitle}</p>
            <ul className="CaseIncludesList">
              {includes.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <button className="CaseStudyButton" onClick={() => setIsOpen(true)}>
            <div className="CaseBtnTxt">{buttonText}</div>
            <div className="btnArrow">↗</div>
          </button>
        </div>
      </div>

      <FullscreenModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        details={details}
        technicalDrawings={technicalDrawings}
        priceTitle={priceTitle}
        priceItems={priceItems}
      />
    </>
  );
};

export default PriceBox;
