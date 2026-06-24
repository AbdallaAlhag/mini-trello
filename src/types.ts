export interface CardInterface {
  title: string;
  id: string;
  isChecked: boolean;
}

export interface ColumnInterface {
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
}
export type Action =
  | { type: "ADD_COLUMN"; payload: { title: string } }
  | { type: "ADD_CARD"; payload: { columnId: string; title: string } }
  | {
      type: "TOGGLE_CARD";
      payload: { columnId: string; cardId: string; isChecked: boolean };
    };
