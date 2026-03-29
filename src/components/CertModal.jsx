import { useEffect } from 'react';

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!cert) return null;

  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(cert.file);
  const viewUrl = isImage ? cert.file : `${cert.file}#zoom=page-width`;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={cert.name}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>{cert.name}</h3>
            <span className="modal-issuer">{cert.issuer}</span>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
            <i className="material-icons">close</i>
          </button>
        </div>
        <div className="modal-body">
          {isImage ? (
            <img src={cert.file} alt={cert.name} className="modal-image" />
          ) : (
            <iframe src={viewUrl} title={cert.name} className="modal-pdf" />
          )}
        </div>
      </div>
    </div>
  );
}
