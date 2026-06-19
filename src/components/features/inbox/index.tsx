import { Button } from "@/components/ui/button";
import { Ellipsis, Inbox as InboxIcon, ListFilter } from "lucide-react";
// scroll area
export function Inbox() {
  const cards = ["hw", "run", "fix car", "film edit"];
  return (
    <div className="flex flex-col border-2 border-solid border-gray-700 rounded-xl w-[30%]">
      <header className="flex items-center justify-between bg-[#142238] rounded-t-xl h-20">
        <div className="flex p-3 gap-3 items-center">
          <InboxIcon />
          <span className="font-bold text-lg">Inbox</span>
        </div>
        <div className="flex p-3 gap-3">
          <ListFilter />
          <Ellipsis />
        </div>
      </header>
      {/* scroll area, add card button, then create cards component */}
      <main className="bg-[#182E51] h-full rounded-b-xl flex flex-col p-2">
        <Button className="bg-[#242528] border border-gray-700!">
          Add a card
        </Button>
      </main>
    </div>
  );
}
