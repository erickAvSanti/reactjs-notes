import { useState } from "react";
import "./App.css";
import SelectNoteType from "./components/SelectNoteType";
import DefaultModal from "./components/modals/DefaultModal";

function App() {
  const [showSimpleNoteModal, setShowSimpleNoteModal] =
    useState<boolean>(false);
  const [showListNoteModal, setShowListNoteModal] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex flex-col items-center justify-start w-screen h-screen">
        <SelectNoteType
          onClickSimpleNote={() => setShowSimpleNoteModal(true)}
          onClickListNote={() => setShowListNoteModal(true)}
        ></SelectNoteType>
      </div>
      <DefaultModal
        isOpen={showSimpleNoteModal}
        closeModal={() => setShowSimpleNoteModal(false)}
      >
        <div>Simple Note Modal</div>
      </DefaultModal>
      <DefaultModal
        isOpen={showListNoteModal}
        closeModal={() => setShowListNoteModal(false)}
      >
        <div>List Note Modal</div>
      </DefaultModal>
    </>
  );
}

export default App;
