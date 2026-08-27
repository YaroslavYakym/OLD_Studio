import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 }
};

function ServisesComponentsReverse({ title, text, image }) {
  const { t } = useTranslation();

  return (
    <Motion.div
      className="service-row reverse"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="service-photo-block">
        <img className="service-photo" src={image} alt={t(title)} loading="lazy" />
      </div>

      <div className="service-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Motion.div>
  );
}

export default ServisesComponentsReverse;
