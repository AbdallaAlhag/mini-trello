import { ChevronsRightLeft, Ellipsis, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardStatic } from "./card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ButtonToggle } from "./buttonToggle";
import type { ColumnInterface, CardInterface } from "../../types.ts";

import { DragOverlay, useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from "@dnd-kit/abstract";
import { useColumns } from "@/ColumnProvider.tsx";
import { useEffect } from "react";
interface ColumnProps {
  column: ColumnInterface;
}

export function Column({ column }: ColumnProps) {
  const { handleAddCard, handleToggleCard } = useColumns();
  const columnId = column.id;
  const { ref } = useDroppable({
    id: columnId,
    type: "column",
    accept: "card",
    collisionPriority: CollisionPriority.Low,
  });

  // filter our index column
  const cards = column.cards;
  console.log("updated cards: ", cards);
  // console.log("updated cards: ", cards);
  // const cards =
  //   column.filter((col: ColumnInterface) => col.indexColumn === true)[0]
  //     ?.cards || [];
  // const cardIds = cards.map((c) => c.id);

  return (
    <div
      className="py-2 px-3 rounded-lg shadow-md/40 h-full max-h-[calc(100vh-18rem)] flex flex-col overflow-hidden"
      style={{ backgroundColor: `${column.background}` }}
    >
      <header className="flex justify-between items-center text-gray-300 shrink-0">
        <h1 className="font-bold pl-3">{column.title}</h1>
        <div className="flex items-center">
          <span className="pr-1 select-none">{cards.length}</span>
          <Button>
            <ChevronsRightLeft color="#e2e8f0" />
          </Button>
          <Button>
            <Ellipsis color="#e2e8f0" />
          </Button>
        </div>
      </header>
      <div ref={ref} className="flex-1 min-h-0 my-2 flex flex-col">
        <ScrollArea className="flex-1  min-h-0 my-2 ">
          <div className="flex flex-col gap-1 pr-3">
            {cards.map((card: CardInterface, index: number) => (
              <Card
                columnId={columnId}
                index={index}
                key={card.id}
                card={card}
                onToggleComplete={handleToggleCard}
              ></Card>
            ))}
          </div>
          {/* <DragOverlay> */}
          {/*   {(source) => { */}
          {/*     const activeCardData = source.data as CardInterface; */}
          {/*     return ( */}
          {/*       <CardStatic */}
          {/*         columnId={columnId} */}
          {/*         card={activeCardData} */}
          {/*         isOverlay={true} */}
          {/*         onToggleComplete={handleToggleCard} */}
          {/*       /> */}
          {/*     ); */}
          {/*   }} */}
          {/* </DragOverlay> */}
          <ScrollBar />
        </ScrollArea>
      </div>
      <footer className="flex items-center gap-1 pt-2 shrink-0">
        {/* <Button className="flex-1 items-center justify-start p-1 rounded-sm"> */}
        {/*   <Plus color="#e2e8f0" /> */}
        {/**/}
        {/*   <span className="pl-1">Add a card</span> */}
        {/* </Button> */}
        {/* <Button> */}
        {/*   <SquarePlus color="#e2e8f0" /> */}
        {/* </Button>{" "} */}
        <ButtonToggle
          columnId={columnId}
          placeHolder="Enter a title or paste a link"
          addFn={handleAddCard}
        >
          <Button className="flex-1 items-center justify-start p-1 rounded-sm">
            <Plus color="#e2e8f0" />
            <span className="pl-1">Add a card</span>
          </Button>
          {/* TODO: deal with template later */}
          {/* <Button> */}
          {/*   <SquarePlus color="#e2e8f0" /> */}
          {/* </Button>{" "} */}
        </ButtonToggle>
      </footer>
    </div>
  );
}
