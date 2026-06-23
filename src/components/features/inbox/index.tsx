import { Card } from "@/components/customUI/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Ellipsis, Inbox as InboxIcon, ListFilter } from "lucide-react";
import { useState } from "react";
import { ButtonToggle } from "@/components/customUI/buttonToggle";

// scroll area
const cards = [
  "hw",
  "run",
  "fix car",
  "film edit",
  "run",
  "fix car",
  "film edit",
  "run",
];
export function Inbox() {
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
          placeHolder="Enter a title"
          cancel={true}
          background={true}
        >
          <Button className="bg-[#242528] border border-gray-700 shadow-sm justify-start h-10 text-md text-gray-400 hover:bg-zinc-600 hover:border-gray-500 text-lg rounded-md">
            Add a card
          </Button>
        </ButtonToggle>
        <ScrollArea className="flex-1 min-h-0 pt-3">
          <div className="flex flex-col gap-3 m-1 mb-15 mr-4">
            {cards.map((card, index) => (
              <Card key={index}></Card>
            ))}
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
