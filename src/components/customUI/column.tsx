import { ChevronsRightLeft, Ellipsis, Plus, SquarePlus } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "./card";
import { ScrollArea } from "../ui/scroll-area";

interface ColumnProps {
  column: {
    id: string;
    title: string;
    background: string;
  };
}

export function Column({ column }: ColumnProps) {
  const cards = ["hw", "run", "film edit"];
  return (
    <ScrollArea
      style={{ backgroundColor: `${column.background}` }}
      className="${columnBackground} py-2 px-3 rounded-lg shadow-md/40"
    >
      <header className="flex justify-between items-center text-gray-300">
        <h1 className="font-bold pl-3">{column.title}</h1>
        <div className="flex items-center">
          {/* TODO: card count */}
          <span className="pr-1">3</span>
          <Button>
            <ChevronsRightLeft color="#e2e8f0" />
          </Button>
          <Button>
            <Ellipsis color="#e2e8f0" />
          </Button>
        </div>
      </header>
      {/* All cards go in main */}
      <main>
        <div className="flex flex-col gap-1 ">
          {cards.map((card, index) => (
            <Card key={index}></Card>
          ))}
        </div>
      </main>
      <div className="flex items-center gap-1 pt-2">
        <Button className="flex-1 items-center justify-start p-1 rounded-sm">
          <Plus color="#e2e8f0" />

          <span className="pl-1">Add a card</span>
        </Button>
        <Button>
          <SquarePlus color="#e2e8f0" />
        </Button>
      </div>
    </ScrollArea>
  );
}
