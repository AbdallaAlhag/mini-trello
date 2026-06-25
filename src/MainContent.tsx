import { Header } from "./components/features/header";
import { Inbox } from "./components/features/inbox";
// import { Planner } from "./components/features/planner";
import { Board } from "./components/features/board";
import { Island } from "./components/features/island";

import { DragDropProvider } from "@dnd-kit/react";
import { useColumns } from "./ColumnProvider";

export function MainContent() {
  const { handleMove } = useColumns();
  return (
    <DragDropProvider onDragEnd={handleMove}>
      <div className="fixed h-scren w-screen inset-0 bg-[#1F1F21] text-white antialiased m-0 p-3 flex flex-col gap-3">
        <Header />
        <main className="relative flex gap-3 w-full min-h-0 flex-1 overflow-hidden pb-5">
          <Inbox />
          {/* <Planner /> */}
          <Board />
          <Island />
        </main>
      </div>
    </DragDropProvider>
  );
}
