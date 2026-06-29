import { Header } from "./components/features/header";
import { Inbox } from "./components/features/inbox";
// import { Planner } from "./components/features/planner";
import { Board } from "./components/features/board";
import { Island } from "./components/features/island";

import { DragDropProvider, DragOverlay } from "@dnd-kit/react";
import { useColumns } from "./ColumnProvider";
import { CardStatic } from "./components/customUI/card";
import type { CardInterface } from "./types";

export function MainContent() {
  const { handleMove } = useColumns();
  return (
    <DragDropProvider onDragEnd={handleMove}>
      <div className="fixed h-screen w-screen inset-0 bg-[#1F1F21] text-white antialiased m-0 p-3 flex flex-col gap-3">
        <Header />
        <main className="relative flex gap-3 w-full min-h-0 flex-1 overflow-hidden pb-5">
          <Inbox />
          {/* <Planner /> */}
          <Board />
          <Island />
        </main>
      </div>
      <DragOverlay>
        {(source) => {
          const data = source.data as CardInterface & { columnId: string };
          return (
            <CardStatic
              columnId={data.columnId}
              card={data}
              isOverlay={true}
              onToggleComplete={() => {}}
            />
          );
        }}
      </DragOverlay>
    </DragDropProvider>
  );
}
