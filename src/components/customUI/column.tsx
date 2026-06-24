import { ChevronsRightLeft, Ellipsis, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "./card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ButtonToggle } from "./buttonToggle";
import type { ColumnInterface, CardInterface } from "../../types.ts";
import { useState } from "react";

interface ColumnProps {
  column: ColumnInterface;
}

export function Column({ column }: ColumnProps) {
  const [cards, setCards] = useState<CardInterface[]>([
    { title: "hw", id: crypto.randomUUID(), isChecked: false },
    { title: "fix tv", id: crypto.randomUUID(), isChecked: false },
    { title: "run miles", id: crypto.randomUUID(), isChecked: false },
  ]);

  function handleAddCard(title: string) {
    setCards([
      ...cards,
      { title: title, id: crypto.randomUUID(), isChecked: false },
    ]);
  }

  const handleToggleCard = (cardId: string, newCheckedState: boolean) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isChecked: newCheckedState } : card,
      ),
    );
  };

  return (
    <div
      style={{ backgroundColor: `${column.background}` }}
      className="py-2 px-3 rounded-lg shadow-md/40 h-full max-h-[calc(100vh-18rem)] flex flex-col overflow-hidden"
    >
      <header className="flex justify-between items-center text-gray-300 shrink-0">
        <h1 className="font-bold pl-3">{column.title}</h1>
        <div className="flex items-center">
          {/* TODO: card count */}
          <span className="pr-1 select-none">{cards.length}</span>
          <Button>
            <ChevronsRightLeft color="#e2e8f0" />
          </Button>
          <Button>
            <Ellipsis color="#e2e8f0" />
          </Button>
        </div>
      </header>
      <ScrollArea className="flex-1  min-h-0 my-2 ">
        <div className="flex flex-col gap-1 pr-3">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              onToggleComplete={handleToggleCard}
            ></Card>
          ))}
        </div>
        <ScrollBar />
      </ScrollArea>
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
