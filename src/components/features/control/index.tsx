import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FolderKanban,
  Inbox as InboxIcon,
  NotepadText,
  SquareKanban,
} from "lucide-react";

export function Control() {
  const buttonStyle =
    "flex items-center justify-center h-12 p-2 px-3 bg-[#1C2B42] rounded-md  hover:bg-blue-700";
  const iconColor = "#5888D0";
  const textStyle = "text-[#5888D0] font-bold text-base";

  // 2. Define the data array for the items you want to repeat
  const navItems = [
    { label: "Inbox", Icon: InboxIcon },
    { label: "Planner", Icon: NotepadText },
    { label: "Board", Icon: SquareKanban },
  ];
  return (
    <div className="absolute bottom-15 left-1/2 -translate-x-1/2 z-10 w-11/12 max-w-lg p-2 bg-[#18191A] border border-gray-800 rounded-xl shadow-xl ">
      <div className="flex gap-2.5 ">
        {navItems.map((item, index) => {
          const { Icon, label } = item;
          return (
            <Button key={index} className={buttonStyle}>
              <Icon color={iconColor} className="size-10" />
              <span className={textStyle}>{label}</span>
            </Button>
          );
        })}
        <Separator className="h-5 self-center!" orientation="vertical" />
        <Button className="flex items-center justify-center h-12 p-2 bg-transparent rounded-md  hover:bg-zinc-800">
          <FolderKanban color="white" className="size-10" />
          <span className="text-white font-bold text-base">Switch boards</span>
        </Button>
      </div>
    </div>
  );
}
