export interface CardInterface {
  title: string;
  id: string;
  isChecked: boolean;
}

export interface ColumnInterface {
  indexColumn: boolean;
  id: string;
  title: string;
  background: string;
  cards: CardInterface[];
}
export interface ColumnContextType {
  columns: ColumnInterface[];
  handleAddColumn: (title: string) => void;
  handleAddCard: (columnId: string, title: string) => void;
  handleToggleCard: (
    columnId: string,
    cardId: string,
    isChecked: boolean,
  ) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMove: (event: any) => void;
}
export type Action =
  // don't really care about dnd-kit event type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { type: "MOVE_CARD"; event: any }
  | { type: "ADD_COLUMN"; payload: { title: string } }
  | { type: "ADD_CARD"; payload: { columnId: string; title: string } }
  | {
      type: "TOGGLE_CARD";
      payload: { columnId: string; cardId: string; isChecked: boolean };
    };
