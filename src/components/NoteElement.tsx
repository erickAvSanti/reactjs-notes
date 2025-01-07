import { Note } from "../constants/note.constants";
import { limitString } from "../helpers/string.helper";

export default function NoteElement({ note }: { note: Note }) {
  return (
    <div className="rounded-2xl border shadow-2xl px-2 py-1 w-[200px] max-w-full">
      <div>{note.title}</div>
      <div>{limitString(note.content)}</div>
    </div>
  );
}
