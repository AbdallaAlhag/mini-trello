import { Column } from "@/components/customUI/column";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ArrowDown,
  Ellipsis,
  ListFilter,
  Plus,
  SquareDashedKanban as SquareDashedKanbanIcon,
  Star,
  UserRoundArrowLeft,
  Users,
} from "lucide-react";

const columns = [
  { id: crypto.randomUUID(), title: "Today", background: "#533F04" },
  { id: crypto.randomUUID(), title: "Today", background: "#164B35" },
];
export function Board() {
  return (
    <div className="flex flex-col border-2 border-solid border-gray-700 rounded-xl w-full">
      <header className="flex items-center justify-between bg-linear-to-r from-violet-900 to-gray-700 rounded-t-xl h-20">
        <div className="flex p-3 gap-3 items-center">
          <span className="font-bold text-xl">My Trello board</span>
          <Button>
            <SquareDashedKanbanIcon />
            <ArrowDown />
          </Button>
        </div>
        <div className="flex p-[.5] gap-1">
          <Button>
            <ListFilter />
          </Button>
          <Button>
            <Star />
          </Button>
          <Button>
            <Users />
          </Button>
          {/* TODO: Fix this hover/bg issue */}
          <Button className="bg-gray-100 !hover:bg-gray-50">
            <UserRoundArrowLeft color="#6B7280" />
            <span className="text-gray-500 font-bold">Share</span>
          </Button>
          <Button>
            <Ellipsis />
          </Button>
        </div>
      </header>
      <main className="bg-linear-to-br from-violet-900 to-fuchsia-700  rounded-b-xl flex flex-col p-2 min-h-0 overflow-x-auto">
        <ScrollArea className="w-full min-h-0 overflow-x-auto overflow-y-hidden">
          <div className="flex w-max gap-1 items-start pb-3">
            {columns.map((column) => (
              <div className="w-64" key={column.id}>
                <Column column={column}></Column>
              </div>
            ))}
            <Button className="w-64 flex-1 items-center justify-start p-1 rounded-sm shrink-0">
              <Plus color="#e2e8f0" />
              <span className="pl-1">Add a card</span>
            </Button>{" "}
            <Button className="w-64 flex-1 items-center justify-start p-1 rounded-sm shrink-0">
              <Plus color="#e2e8f0" />
              <span className="pl-1">Add a card</span>
            </Button>{" "}
            <Button className="w-64 flex-1 items-center justify-start p-1 rounded-sm shrink-0">
              <Plus color="#e2e8f0" />
              <span className="pl-1">Add a card</span>
            </Button>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </main>
    </div>
  );
}
