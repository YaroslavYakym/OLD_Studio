import { useState } from "react";
import "../PriceBox/PriceBox.css";
import { FullScreenAlbum } from "../FullScreenAlbum";

const CasesBox = ({ title, subtitle, album,  includes = [], buttonText }) => {
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);
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

          <button
            className="CaseStudyButton"
            onClick={() => setIsAlbumOpen(true)}
          >
            <div className="CaseBtnTxt">{buttonText}</div>
            <div className="btnArrow">↗</div>
          </button>
        </div>
      </div>

      <FullScreenAlbum
        isOpen={isAlbumOpen}
        onClose={() => setIsAlbumOpen(false)}
        title={title}
        images={album}
      />
    </>
  );
};

export default CasesBox;
