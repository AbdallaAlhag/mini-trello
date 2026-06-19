import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  CircleQuestionMark,
  CircleUserRound,
  LayoutDashboard,
  Megaphone,
  Search,
  SquareKanban,
} from "lucide-react";

export function Header() {
  const iconStyle = "size-6 stroke-1";
  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <Button variant="trello" size="trelloNav">
          <LayoutDashboard className={iconStyle} />
        </Button>
        <Button variant="trello" size="trelloNav">
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="size-6 mr-2"
            xmlns="http://w3.org"
          >
            <title>Trello</title>
            {/* 1. Main Outer Container - Filled Blue */}
            <path
              fill="#0055cc"
              d="M19.43 0H4.57A4.58 4.58 0 0 0 0 4.57v14.86A4.58 4.58 0 0 0 4.57 24h14.86A4.58 4.58 0 0 0 24 19.43V4.57A4.58 4.58 0 0 0 19.43 0z"
            />
            {/* 2. Left Short Column - Filled White */}
            <path
              fill="#ffffff"
              d="M8.57 3.43H5.15A1.72 1.72 0 0 0 3.43 5.15v12a1.72 1.72 0 0 0 1.72 1.72h3.42a1.72 1.72 0 0 0 1.72-1.72v-12a1.72 1.72 0 0 0-1.72-1.72z"
            />
            {/* 3. Right Tall Column - Filled White */}
            <path
              fill="#ffffff"
              d="M18.85 3.43h-3.42a1.72 1.72 0 0 0-1.72 1.72v6.85a1.72 1.72 0 0 0 1.72 1.72h3.42a1.72 1.72 0 0 0 1.72-1.72V5.15a1.72 1.72 0 0 0-1.72-1.72z"
            />
          </svg>
          <span>MiniTrello</span>
        </Button>
      </div>
      <div className="flex">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full pl-9 pr-3 py-2 rounded-sm bg-transparent border-2 border-gray-400 text-sm text-white focus-visible:border-blue-300 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
          />
        </div>
        <Button className="bg-[#669DF1] hover:bg-[#86B0FF] rounded-sm mx-2 text-black font-normal text-md">
          Create
        </Button>
      </div>
      <div className="flex">
        <Button variant="trello" size="trelloNav">
          <Megaphone className="size-6 stroke-1" />
        </Button>
        <Button variant="trello" size="trelloNav">
          <Bell className="size-6 stroke-1" />
        </Button>
        <Button variant="trello" size="trelloNav">
          <CircleQuestionMark className="size-6 stroke-1" />
        </Button>
        <Button variant="trello" size="trelloNav">
          <CircleUserRound className="size-6 stroke-1 " />
        </Button>
      </div>
    </div>
  );
}
