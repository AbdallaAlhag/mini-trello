import { Card, CardStatic } from "@/components/customUI/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Ellipsis, Inbox as InboxIcon, ListFilter } from "lucide-react";
import { ButtonToggle } from "@/components/customUI/buttonToggle";
import type { CardInterface } from "../../../types.ts";

import { DragOverlay, useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";

import { useColumns } from "../../../ColumnProvider";

export function Inbox() {
  const { columns, handleAddCard, handleToggleCard } = useColumns();
  // const cards = columns[0].cards;
  // grab our index columns
  const cards = columns.find((col) => col.indexColumn === true)?.cards || [];
  // const columnId = columns[0].id;
  const columnId = columns.find((col) => col.indexColumn === true)?.id || "0";

  const { ref } = useDroppable({
    id: columnId,
    type: "column",
    accept: "card",
    collisionPriority: CollisionPriority.Low,
  });
  return (
    <div className="flex flex-col border-2 border-solid border-gray-700 rounded-xl w-[35%] ">
      <header className="flex items-center justify-between bg-[#142238] rounded-t-xl h-20">
        <div className="flex p-3 gap-3 items-center">
          <InboxIcon />
          <span className="font-bold text-lg">Inbox</span>
        </div>
        <div className="flex p-3 gap-3">
          <Button>
            <ListFilter />
          </Button>
          <Button>
            <Ellipsis />
          </Button>
        </div>
      </header>
      <main className="bg-[#182E51] rounded-b-xl flex flex-1 flex-col p-2 min-h-0">
        <ButtonToggle
          columnId={columnId}
          placeHolder="Enter a title"
          cancel={true}
          background={true}
          addFn={handleAddCard}
        >
          <Button className="bg-[#242528] border border-gray-700 shadow-sm justify-start h-10 text-md text-gray-400 hover:bg-zinc-600 hover:border-gray-500 text-lg rounded-md">
            Add a card
          </Button>
        </ButtonToggle>
        <ScrollArea className="flex-1 h-full pt-3">
          {/* TODO: make height full */}
          <div ref={ref} className="flex flex-col gap-3 m-1 mb-15 mr-4 h-full">
            {cards.length === 0 ? (
              <div className="flex-1 flex items-center justify-center border-2 border-dashed border-neutral-800 rounded-lg text-neutral-600 text-xs p-4 pointer-events-none select-none">
                Drop card here
              </div>
            ) : (
              cards.map((card: CardInterface, index: number) => (
                <Card
                  columnId={columnId}
                  index={index}
                  key={card.id}
                  card={card}
                  onToggleComplete={handleToggleCard}
                ></Card>
              ))
            )}
          </div>
          <DragOverlay>
            {(source) => {
              const activeCardData = source.data as CardInterface;
              return (
                <CardStatic
                  columnId={columnId}
                  card={activeCardData}
                  isOverlay={true}
                  onToggleComplete={handleToggleCard}
                />
              );
            }}
          </DragOverlay>
        </ScrollArea>
      </main>
    </div>
  );
}
