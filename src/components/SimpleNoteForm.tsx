import { SyntheticEvent, useId, useState } from "react";
import { Note } from "../constants/note.constants";

export default function SimpleNoteForm({
  success,
  cancel,
}: {
  success: (note: Note | null) => unknown;
  cancel: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const titleId = useId();
  const textId = useId();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const processForm = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log(evt);
    const data = {
      id: window.crypto.randomUUID(),
      title,
      content,
    };
    success(data);
  };
  return (
    <div className="w-[400px] flex flex-col">
      <form onSubmit={processForm} className="w-full flex flex-col gap-2">
        <div className="w-full">
          <label htmlFor={titleId}>Título de nota</label>
          <textarea
            id={titleId}
            cols={1}
            rows={1}
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            className="w-full p-1"
          ></textarea>
        </div>
        <div className="w-full">
          <label htmlFor={textId}>Cuerpo de nota</label>
          <textarea
            id={textId}
            cols={1}
            rows={4}
            value={content}
            onChange={(evt) => setContent(evt.target.value)}
            className="w-full p-1"
          ></textarea>
        </div>
        <div className="flex flex-row items-between gap-1">
          <button className="p-1" onClick={cancel}>
            Cancelar
          </button>
          <button className="p-1">Confirmar</button>
        </div>
      </form>
    </div>
  );
}
