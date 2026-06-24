import {
  useState,
  type ReactNode,
  isValidElement,
  cloneElement,
  useEffect,
  useRef,
} from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { X } from "lucide-react";

interface ButtonToggleProps {
  columnId: string;
  placeHolder: string;
  cancel?: boolean;
  background?: boolean;
  children: ReactNode;
  addFn: (columId: string, title: string) => void;
}

export function ButtonToggle({
  columnId,
  placeHolder,
  cancel = false,
  background = false,
  children,
  addFn,
}: ButtonToggleProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    console.log("Adding card:", inputValue);
    addFn(columnId, inputValue);
    setInputValue("");
    setIsEditing(false);
  };
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEditing) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsEditing(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEditing]);

  const backgroundColor = background == true ? "#111827" : "transparent";

  if (isEditing) {
    return (
      <div
        ref={containerRef}
        style={{ backgroundColor: `${backgroundColor}` }}
        className="flex flex-col w-full rounded-sm"
      >
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeHolder}
          className=" bg-[#242528] min-h-10 resize-none rounded-md"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleAdd();
            }
          }}
          autoFocus
        />
        <div
          style={{ backgroundColor: `${backgroundColor}` }}
          className="flex items-center gap-1 p-2 rounded-b-lg"
        >
          <Button
            onClick={handleAdd}
            className="bg-blue-400 hover:bg-blue-300 text-black shrink-0 rounded-md"
          >
            Add card
          </Button>
          <Button
            onClick={() => setIsEditing(false)}
            variant="ghost"
            className="text-gray-400 hover:text-gray-400 hover:bg-gray-800 rounded-md"
          >
            {cancel ? "Cancel" : <X />}
          </Button>
        </div>
      </div>
    );
  }

  if (isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      onClick: () => setIsEditing(true),
    });
  }

  return children;
}
