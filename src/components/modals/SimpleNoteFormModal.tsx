import DefaultModal from "./DefaultModal";
import SimpleNoteForm from "../SimpleNoteForm";
import { Note } from "../../constants/note.constants";
import { FnCallback } from "../../types";

export default function SimpleNoteFormModal({
  success,
  isOpen,
  closeModal,
}: {
  success: (note: Note | null) => void;
  isOpen: boolean;
  closeModal: FnCallback;
}) {
  const addNote = (note: Note | null) => {
    success(note);
    closeModal();
  };
  return (
    <DefaultModal isOpen={isOpen} closeModal={closeModal} modalTitle="Add simple note">
      <SimpleNoteForm success={addNote} cancel={closeModal}></SimpleNoteForm>
    </DefaultModal>
  );
}
