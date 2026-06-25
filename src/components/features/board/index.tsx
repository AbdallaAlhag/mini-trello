import { ButtonToggle } from "@/components/customUI/buttonToggle";
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
import { useColumns } from "../../../ColumnProvider";
import { useDroppable } from "@dnd-kit/react";
import type { ColumnInterface } from "@/types";

export function Board() {
  const { columns, handleAddColumn } = useColumns();
  const filteredColumns: ColumnInterface[] = columns.filter(
    (col) => col.indexColumn === true,
  );
  const { ref } = useDroppable({ id: "0000" });
  return (
    <div className="flex flex-col border-2 border-solid border-gray-700 rounded-xl overflow-hidden w-full">
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
      <main className="bg-linear-to-br from-violet-900 to-fuchsia-700  rounded-b-xl flex flex-1 flex-col p-2 min-h-0 ">
        <ScrollArea className="w-full flex-1 min-h-0 mb-7 ">
          <div ref={ref} className="flex w-max gap-3 h-full pb-8 ">
            {filteredColumns.map((column: ColumnInterface) => (
              <div className="w-64 h-full shrink-0" key={column.id}>
                <Column column={column}></Column>
              </div>
            ))}
            <div className="w-64">
              <ButtonToggle
                // I could make this optional but for now this is fine
                columnId={"000"}
                placeHolder="Enter a title"
                background={true}
                addFn={handleAddColumn}
              >
                <Button className="w-64 h-10 items-center justify-start p-3 rounded-sm shrink-0 bg-gray-400 opacity-85">
                  <Plus color="#e2e8f0 " />
                  <span className="pl-1">Add another list</span>
                </Button>
              </ButtonToggle>
            </div>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </main>
    </div>
  );
}
