import { SyntheticEvent, useRef } from "react";
import { createPortal } from "react-dom";
import { FnCallback } from "../../types";

export default function DefaultModal({
  isOpen,
  closeModal,
  children,
  modalTitle,
}: {
  isOpen: boolean;
  closeModal: FnCallback;
  children: React.ReactNode;
  modalTitle?: string;
}) {
  const modalRoot = document.getElementById("modal-root");
  const backdropRef = useRef<HTMLDivElement>(null);
  if (!isOpen) return null;
  const closeBackdrop = (event: SyntheticEvent) => {
    console.log(event);
    if (event.target != null && event.target === backdropRef?.current) {
      closeModal(null as never);
    }
  };
  const modal = (
    <div
      className="fixed flex z-[100000] left-0 top-0 w-screen h-screen items-center justify-center bg-[#00000055]"
      onClick={closeBackdrop}
      ref={backdropRef}
    >
      <div className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-700 rounded-2xl p-3 min-w-[350px] shadow-2xl">
        <div className="flex flex-row items-center gap-2 w-full justify-between">
          <span className="">{modalTitle ?? "Modal"}</span>
          <button className="p-1" onClick={closeModal}>
            X
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
  return createPortal(modal, modalRoot as Element);
}
