export default function SelectNoteType({
  onClickSimpleNote,
  onClickListNote,
}: {
  onClickSimpleNote: React.MouseEventHandler<HTMLButtonElement>;
  onClickListNote: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <button className="m-1 p-1" onClick={onClickSimpleNote}>
        Simple Note
      </button>
      <button className="m-1 p-1" onClick={onClickListNote}>
        List Note
      </button>
    </div>
  );
}
