const Modal = ({ children, show }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {children}
      </div>
    </div>
  );
};

export default Modal;
