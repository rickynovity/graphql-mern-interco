import React from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import AvaButton from "./AvaButton";
import { RiCheckFill, RiCloseLine } from "react-icons/ri";

const AvaModal = ({
  visible,
  onCancel,
  onOk,
  onClose,
  title,
  children,
  okText,
  cancelText,
  width,
  height,
  icon: Icon,
  iconSize = 30,
  image,
  footer,
  buttons,
}) => {
  if (!visible) return null;
  const modalOverlay =
    "fixed inset-0 bg-slate-500/75 dark:bg-slate-950/75 flex backdrop-blur-sm justify-center items-center z-40";
  const modalContainer =
    "relative text-slate-100 p-10 rounded-lg bg-glass bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-70 saturate-100 backdrop-contrast-100";

  const isFunction = (value) => typeof value === "function";
  const onCloseModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFunction(onClose)) {
      onClose();
    }
  };

  const onCancelModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFunction(onCancel)) {
      onCancel();
    }
  };

  const onValidate = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFunction(onOk)) {
      onOk();
    }
  };

  const ModalClose = () => (
    <button
      className="absolute end-1 top-1 rounded-lg border border-sky-300 bg-sky-500/25 hover:bg-sky-500 p-2 text-slate-100 text-sm font-semibold transition hover:scale-110"
      onClick={onCancelModal}
    >
      <span className="sr-only">Close</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );

  return createPortal(
    <div className={modalOverlay} onClick={onCancelModal}>
      <div
        className={modalContainer}
        style={{ width, height }}
        onClick={onCloseModal}
      >
        <ModalClose />
        {image && (
          <img src={image} alt="Image" className="block mx-auto mb-4" />
        )}
        {Icon && <Icon size={iconSize} className="block mx-auto mb-4" />}
        <div className="modal-header text-3xl text-center">{title}</div>
        <div className="modal-body">{children}</div>
        <div className="mt-10 flex justify-center">
          {cancelText && (
            <AvaButton
              icon={RiCloseLine}
              text={cancelText}
              textColor="text-slate-900 dark:text-gray-100"
              hoverTextColor="hover:text-yellow-500"
              hoverBgColor="hover:bg-yellow-500/25"
              onClick={onCancelModal}
            />
          )}
          {okText && (
            <AvaButton
              icon={RiCheckFill}
              text={okText}
              textColor="dark:text-gray-100"
              bgColor="bg-sky-700/25"
              hoverTextColor="hover:text-white"
              hoverBgColor="hover:bg-sky-500"
              onClick={onValidate}
            />
          )}

          {footer || cancelText || okText ? (
            <>
              {footer || null}
              {(cancelText || okText) && (
                <>
                  {buttons &&
                    buttons.map((button, index) => (
                      <AvaButton
                        key={index}
                        onClick={button.onClick}
                        {...button}
                      >
                        {button.text}
                      </AvaButton>
                    ))}
                </>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>,
    document.body
  );
};

AvaModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  footer: PropTypes.node,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func, // Gérer l'événement onClick pour chaque bouton
    })
  ),
  icon: PropTypes.elementType,
  image: PropTypes.string,
};

export default AvaModal;
