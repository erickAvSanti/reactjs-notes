import { Note } from "../constants/note.constants";
import NoteElement from "./NoteElement";

export default function Notes({ notes }: { notes: Note[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-2 px-2 max-w-full">
      {notes.map((note: Note) => {
        return <NoteElement key={note.id} note={note}></NoteElement>;
      })}
    </div>
  );
}
