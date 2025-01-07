import DefaultModal from "./DefaultModal";
import SimpleNoteForm from "../SimpleNoteForm";
import { Note } from "../../constants/note.constants";
import { FnCallback } from "../../types";

export default function SimpleNoteFormModal({
  success,
  isOpen,
  onClose: closeModal,
}: {
  success: (note: Note | null) => void;
  isOpen: boolean;
  onClose: FnCallback;
}) {
  const addNote = (note: Note | null) => {
    success(note);
    closeModal();
  };
  return (
    <DefaultModal isOpen={isOpen} onClose={closeModal} title="Add simple note">
      <SimpleNoteForm success={addNote} cancel={closeModal}></SimpleNoteForm>
    </DefaultModal>
  );
}
