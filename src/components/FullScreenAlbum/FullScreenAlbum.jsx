import "./FullScreenAlbum.css";

function FullScreenAlbum({
  isOpen,
  onClose,
  title,
  images = [],
}) {
  if (!isOpen) return null;

  return (
    <div className="albumOverlay" onClick={onClose}>
      <div
        className="albumContent"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="albumClose"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="albumTitle">{title}</h2>

        <div className="albumScroller">
          {images.map((image, index) => (
            <div className="albumCard" key={index}>
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="albumImage"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FullScreenAlbum;