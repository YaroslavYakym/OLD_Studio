import "../../styles/component.css";
import "./FAQ.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

function FAQ() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) || [];

  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <Motion.div
      className="faq-wrap"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="component component-faq" id="faq">
        <div className="faq-head">
          <span className="titleComponents">FAQ</span>
          <h2 className="faq-head-title">{t("faq.title")}</h2>
          <p className="faq-head-subtitle">{t("faq.subtitle")}</p>
        </div>

        <div className="faq-list">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
                      <path
                        d="M1 1L8 7.5L15 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Motion.div>
  );
}

export default FAQ;
