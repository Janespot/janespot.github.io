import { useEffect } from 'react';

export default function PdfModal({ title, file, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!file) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal-content modal-fullpage" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <div className="modal-actions">
            <a href={file} download className="btn-outline btn-modal">
              <i className="material-icons">file_download</i>
              Download
            </a>
            <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
              <i className="material-icons">close</i>
            </button>
          </div>
        </div>
        <div className="modal-body">
          <iframe src={`${file}#zoom=page-width`} title={title} className="modal-pdf" />
        </div>
      </div>
    </div>
  );
}
