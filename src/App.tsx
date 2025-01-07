import { useState } from "react";
import "./App.css";
import SelectNoteType from "./components/SelectNoteType";
import DefaultModal from "./components/modals/DefaultModal";
import { Note } from "./constants/note.constants";
import Notes from "./components/Notes";
import SimpleNoteFormModal from "./components/modals/SimpleNoteFormModal";

function App() {
  const [showSimpleNoteModal, setShowSimpleNoteModal] =
    useState<boolean>(false);
  const [showListNoteModal, setShowListNoteModal] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const addNote = (note: Note | null) => {
    if (note == null) return;
    setNotes((prev) => [...prev, note]);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start w-screen h-screen">
        <SelectNoteType
          onClickSimpleNote={() => setShowSimpleNoteModal(true)}
          onClickListNote={() => setShowListNoteModal(true)}
        ></SelectNoteType>
        <Notes notes={notes}></Notes>
      </div>
      <SimpleNoteFormModal
        success={addNote}
        isOpen={showSimpleNoteModal}
        onClose={() => setShowSimpleNoteModal(false)}
      ></SimpleNoteFormModal>
      <DefaultModal
        isOpen={showListNoteModal}
        onClose={() => setShowListNoteModal(false)}
      >
        <div>List Note Modal</div>
      </DefaultModal>
    </>
  );
}

export default App;
