import { Note } from "../constants/note.constants";

export default function Notes({ notes }: { notes: Note[] }) {
  return (
    <ul>
      {notes.map((note: Note) => {
        return <li key={note.id}>{note.title}</li>;
      })}
    </ul>
  );
}
