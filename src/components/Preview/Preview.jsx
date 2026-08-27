import "./Preview.css";
import { OlashynLogoWhite, Mouse } from "../icons/";
import { useTranslation } from "react-i18next";

import videoPoster from "../../icon/preview-poster.jpg";
import videoMp4 from "../../icon/preview.mp4";

function Preview() {
  const { t } = useTranslation();

  return (
    <>
      <div className="Preview">

        <video
          className="preview-video"
          autoPlay
          muted
          loop
          playsInline
          poster={videoPoster}
          aria-hidden="true"
        >
          <source src={videoMp4} type="video/mp4" />
        </video>

        <div className="preview-overlay" />

        <div className="Preview-main">
          <div className="Preview-center">
            <span className="preview-txt">{t("preview.txt")}</span>
            <div className="preview-line"></div>
          </div>
        </div>

        <div className="Preview-bottom">
          <div className="preview-bottom-svg">
            <Mouse />
          </div>
          <div className="prview-svg">
            <OlashynLogoWhite className="prew-logo" />
          </div>
        </div>

      </div>
    </>
  );
}

export default Preview;
