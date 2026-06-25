import { SquarePen } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

import type { CardInterface } from "../../types.ts";
import { twMerge } from "tailwind-merge";
import { useSortable } from "@dnd-kit/react/sortable";

interface CardProps {
  card: CardInterface;
  onToggleComplete: (columnId: string, id: string, isChecked: boolean) => void;
  isDragging?: boolean;
  isOverlay?: boolean;
  index: number;
  columnId: string;
}
interface CardStaticProps {
  card: CardInterface;
  onToggleComplete: (columnId: string, id: string, isChecked: boolean) => void;
  isDragging?: boolean;
  isOverlay?: boolean;
  ref?: (element: Element | null) => void; // Added here
  columnId: string;
}
export function Card({ card, onToggleComplete, index, columnId }: CardProps) {
  const { ref, isDragging } = useSortable({
    id: card.id,
    data: card,
    index: index,
  });
  return (
    <CardStatic
      columnId={columnId}
      ref={ref}
      card={card}
      isDragging={isDragging}
      onToggleComplete={onToggleComplete}
    />
  );
}
export function CardStatic({
  columnId,
  card,
  isDragging,
  isOverlay,
  onToggleComplete,
  ...props
}: CardStaticProps) {
  return (
    <div
      {...props}
      className={twMerge(
        `group flex justify-between items-center bg-[#242528] shadow-sm shadow-black/25 h-10 
        text-sm text-gray-400 transition-all hover:ring-1 hover:ring-blue-300 p-1 
        cursor-pointer group/button shrink-0 rounded-md border border-transparent 
        bg-clip-padding font-medium whitespace-nowrap outline-none select-none 
        focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 
        disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive 
        aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 
        dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 
        [&_svg:not([class*='size-'])]:size-4`,
        isDragging ? "opacity-50 pointer-events-none" : "", // The ghost style left behind
        isOverlay
          ? "opacity-100 scale-102 shadow-xl shadow-black/50 cursor-grabbing"
          : "", // The floating style
      )}
    >
      <div className="flex items-center gap-1 -translate-x-3 group-hover:translate-x-1 has-data-[state=checked]:translate-x-1 transition-all duration-250 ease-out">
        <Checkbox
          className="opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-150 ease-in rounded-xl border-white bg-transparent data-[state=checked]:bg-[#82B536] data-[state=checked]:border-[#82B536] data-[state=checked]:text-black data-[state=checked]:opacity-100"
          id={`card-${card.id}`}
          checked={card.isChecked}
          onCheckedChange={(checked) =>
            onToggleComplete?.(columnId, card.id, !!checked)
          }
        />
        <span className="text-normal font-bold">{card.title}</span>
      </div>
      <Button className="bg-transparent pr-0 mr-0 opacity-0 group-hover:opacity-100">
        <SquarePen />
      </Button>
    </div>
  );
}
