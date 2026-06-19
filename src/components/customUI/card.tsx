import { SquarePen } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export function Card() {
  return (
    // change to outer button to div in order to allow inner buttons working
    <Button className="group flex justify-between items-center bg-[#242528] shadow-sm/25  h-12 text-md text-gray-400 transition-all hover:ring-3 hover:ring-blue-300 mr-5">
      <div className="flex items-center gap-1 -translate-x-3 group-hover:translate-x-0 transition-all duration-250 ease-out">
        <Checkbox
          className="opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-250 ease-in rounded-xl border-white bg-transparent data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 data-[state=checked]:text-primary-foreground"
          id="card-complete"
          defaultChecked={false}
        />
        <span>Card title goes here</span>
      </div>
      <Button className="bg-transparent  pr-0 mr-0 opacity-0 group-hover:opacity-100">
        <SquarePen />
      </Button>
    </Button>
  );
}
