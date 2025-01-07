export const NOTE_TYPES = {
  SIMPLE_NOTE: "simple-note",
  LIST_NOTE: "list-node",
};

export interface Note {
  id: string;
  title: string;
  content: string;
  list?: string[];
}
