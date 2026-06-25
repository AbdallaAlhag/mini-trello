import { createContext, useContext, type ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import type { ColumnInterface, ColumnContextType, Action } from "./types.ts";
const ColumnContext = createContext<ColumnContextType | undefined>(undefined);

function boardReducer(draft: ColumnInterface[], action: Action) {
  switch (action.type) {
    case "MOVE_CARD":
      {
        console.log(event);
        // TODO:
      }
      break;
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
    cards: [{ title: "hw", id: crypto.randomUUID(), isChecked: false }],
  },
  {
    indexColumn: false,
    id: crypto.randomUUID(),
    title: "Today",
    background: "#164B35",
    cards: [{ title: "hw", id: crypto.randomUUID(), isChecked: false }],
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
    console.log(columns);
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
