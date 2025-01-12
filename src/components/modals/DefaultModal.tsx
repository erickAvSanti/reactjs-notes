import { SyntheticEvent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FnCallback } from "../../types";
import { setFocusableTrapElements } from "../../helpers/modal.helper";

type ModalProps = {
  isOpen: boolean;
  onClose: FnCallback;
  children: React.ReactNode;
  title?: string;
};

export default function DefaultModal({
  isOpen: isModalOpen,
  onClose: closeModal,
  children,
  title,
}: ModalProps) {
  const modalRoot = document.getElementById("modal-root");
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef(null);
  useEffect(() => {
    if (!isModalOpen || !closeBtnRef.current) return;
    const closeBtn = closeBtnRef.current as HTMLDivElement;
    closeBtn.focus();
  }, [isModalOpen]);
  useEffect(() => {
    const onKeyEscPressed = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        closeModal();
      } else if (evt.key === "Tab" && modalRef.current != null) {
        setFocusableTrapElements(modalRef.current, evt);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", onKeyEscPressed);
    }
    return () => {
      window.removeEventListener("keydown", onKeyEscPressed);
    };
  }, [isModalOpen, closeModal]);
  if (!isModalOpen) return null;
  const closeBackdrop = (event: SyntheticEvent) => {
    console.log(event);
    if (event.target != null && event.target === backdropRef?.current) {
      closeModal();
    }
  };
  const modal = (
    <div
      className="fixed flex z-[100000] left-0 top-0 w-screen h-screen items-center justify-center bg-[#00000055]"
      onClick={closeBackdrop}
      ref={backdropRef}
    >
      <div className="w-auto max-h-screen overflow-y-auto">
        <div
          className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-700 rounded-2xl p-3 min-w-[350px] shadow-2xl"
          aria-modal="true"
          role="dialog"
          ref={modalRef}
        >
          <div className="flex flex-row items-center gap-2 w-full justify-between">
            <span className="">{title ?? "Modal"}</span>
            <button
              className="py-1 px-2"
              onClick={closeModal}
              tabIndex={0}
              ref={closeBtnRef}
              aria-label="Close modal"
            >
              X
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
  return createPortal(modal, modalRoot as Element);
}
