import { SquarePen } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export function Card() {
  return (
    // change to outer button to div in order to allow inner buttons working
    <div
      className="group flex justify-between items-center bg-[#242528] shadow-sm/25  h-10 text-md text-gray-400 transition-all hover:ring-1 hover:ring-blue-300  p-1 
      cursor-pointer group/button  shrink-0   rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap  outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([className*='size-'])]:size-4"
    >
      <div className="flex items-center gap-1 -translate-x-3 group-hover:translate-x-1 has-data-[state=checked]:translate-x-1 transition-all duration-250 ease-out">
        <Checkbox
          className="opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-150 ease-in rounded-xl border-white bg-transparent data-[state=checked]:bg-[#82B536] data-[state=checked]:border-[#82B536] data-[state=checked]:text-black data-[state=checked]:opacity-100 "
          id="card-complete"
          defaultChecked={false}
        />
        <span className="text-normal font-bold">Card title goes here</span>
      </div>
      <Button className="bg-transparent  pr-0 mr-0 opacity-0 group-hover:opacity-100">
        <SquarePen />
      </Button>
    </div>
  );
}
