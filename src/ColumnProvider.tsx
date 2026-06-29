import { createContext, useContext, type ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import { current } from "immer";
import type { ColumnInterface, ColumnContextType, Action } from "./types.ts";
import { flushSync } from "react-dom";
const ColumnContext = createContext<ColumnContextType | undefined>(undefined);

function boardReducer(draft: ColumnInterface[], action: Action) {
  switch (action.type) {
    case "MOVE_CARD": {
      // console.log(action.event);
      // console.log("current: ", current(draft));
      const { operation } = action.event;
      if (!operation || !operation.target) return;

      const cardId = operation.source.id;
      const newCardIndex = operation.source.index;
      const oldCardIndex = operation.source.initialIndex;
      const newColumnId = operation.source.group;
      const oldColumnId = operation.source.initialGroup;

      console.log("old column id: ", oldColumnId);
      console.log("new column id: ", newColumnId);
      const newCol = draft.find(
        (col: ColumnInterface) => col.id === newColumnId,
      );
      const oldCol = draft.find(
        (col: ColumnInterface) => col.id === oldColumnId,
      );
      if (!oldCol || !newCol) return;

      // console.log("old column index: ", oldCardIndex);
      // console.log("new column index: ", newCardIndex);
      // console.log(newCol.cards.length);

      const [movedCard] = oldCol.cards.splice(oldCardIndex, 1);

      // moved to same column, just reordered
      if (oldColumnId === newColumnId) {
        newCol.cards.splice(newCardIndex, 0, movedCard);
        // console.log("reorded");
      } else {
        // if (newCardIndex === -1) {
        if (newCol.cards.length === 0 || newCol.cards.length === newCardIndex) {
          // add to end of empty array
          newCol.cards.push(movedCard);
          // console.log("empty array or end of list");
        } else {
          // add to array with index in mind
          newCol.cards.splice(newCardIndex, 0, movedCard);
          // console.log("new array");
        }
      }

      // console.log("current: ", current(draft));
      break;
    }
    case "ADD_COLUMN":
      draft.push({
        indexColumn: false,
        id: crypto.randomUUID(),
        title: action.payload.title,
        background: "#101204",
        cards: [], // Fixed: columns now correctly initialize with an empty cards array
      });
      break;

    case "ADD_CARD": {
      const column = draft.find((col) => col.id === action.payload.columnId);
      if (column) {
        column.cards.push({
          id: crypto.randomUUID(),
          title: action.payload.title,
          isChecked: false,
        });
      }
      break;
    }

    case "TOGGLE_CARD": {
      const column = draft.find((col) => col.id === action.payload.columnId);
      const card = column?.cards.find((c) => c.id === action.payload.cardId);
      if (card) {
        card.isChecked = action.payload.isChecked;
      }
      break;
    }
  }
}

const initialColumns: ColumnInterface[] = [
  {
    indexColumn: true,
    id: crypto.randomUUID(),
    title: "Index",
    background: "#533F04",
    cards: [{ title: "hw", id: crypto.randomUUID(), isChecked: false }],
  },
  {
    indexColumn: false,
    id: crypto.randomUUID(),
    title: "Yesterday",
    background: "#533F04",
    cards: [
      { title: "hw", id: crypto.randomUUID(), isChecked: false },
      { title: "123", id: crypto.randomUUID(), isChecked: false },
      { title: "456", id: crypto.randomUUID(), isChecked: false },
      { title: "789", id: crypto.randomUUID(), isChecked: false },
    ],
  },
  {
    indexColumn: false,
    id: crypto.randomUUID(),
    title: "Today",
    background: "#164B35",
    cards: [
      { title: "hw", id: crypto.randomUUID(), isChecked: false },
      { title: "321", id: crypto.randomUUID(), isChecked: false },
      { title: "654", id: crypto.randomUUID(), isChecked: false },
      { title: "987", id: crypto.randomUUID(), isChecked: false },
    ],
  },
];
interface ColumnProviderProps {
  children: ReactNode;
}

export function ColumnProvider({ children }: ColumnProviderProps) {
  const [columns, dispatch] = useImmerReducer(boardReducer, initialColumns);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMove = (event: any) => {
    dispatch({ type: "MOVE_CARD", event });
  };

  const handleAddColumn = (title: string) => {
    dispatch({ type: "ADD_COLUMN", payload: { title } });
  };

  const handleAddCard = (columnId: string, title: string) => {
    dispatch({ type: "ADD_CARD", payload: { columnId, title } });
  };

  const handleToggleCard = (
    columnId: string,
    cardId: string,
    isChecked: boolean,
  ) => {
    dispatch({ type: "TOGGLE_CARD", payload: { columnId, cardId, isChecked } });
  };

  return (
    <ColumnContext.Provider
      value={{
        columns,
        handleAddColumn,
        handleAddCard,
        handleToggleCard,
        handleMove,
      }}
    >
      {children}
    </ColumnContext.Provider>
  );
}

// --- Custom Hook for Easy Consumption ---
// eslint-disable-next-line react-refresh/only-export-components
export function useColumns() {
  const context = useContext(ColumnContext);
  if (!context) {
    throw new Error("useColumns must be used within a ColumnProvider");
  }
  return context;
}
