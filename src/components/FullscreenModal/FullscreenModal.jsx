import { useEffect } from "react";
import "./FullscreenModal.css";

function FullscreenModal({
  isOpen,
  onClose,
  title,
  details = [],
  technicalDrawings = [],
  priceTitle,
  priceItems = [],
}) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2 className="modalTitle">{title}</h2>

        <div className="modalDetails">
          {details.map((block, index) => {
            const heading = block.heading.toLowerCase();
            const isDrawingsBlock =
              heading.includes("креслення") || heading.includes("drawings");

            return (
              <div className="modalDetailBlock" key={index}>
                <h3 className="modalDetailHeading">{block.heading}</h3>
                <p className="modalDetailText">{block.text}</p>

                {isDrawingsBlock && technicalDrawings.length > 0 && (
                  <ul className="modalDrawingsList">
                    {technicalDrawings.map((drawing, drawingIndex) => (
                      <li key={drawingIndex}>{drawing}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {priceItems.length > 0 && (
          <div className="modalPriceBlock">
            <h3 className="modalPriceTitle">{priceTitle}</h3>
            <ul className="modalPriceList">
              {priceItems.map((priceLine, index) => (
                <li key={index}>{priceLine}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default FullscreenModal;
