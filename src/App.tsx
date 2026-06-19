import { Header } from "./components/features/header";
import { Inbox } from "./components/features/inbox";
import { Planner } from "./components/features/planner";
import { Board } from "./components/features/board";
import { Control } from "./components/features/control";

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen  bg-[#1F1F21] text-white antialiased m-0 p-3 flex flex-col gap-3">
      <Header />
      <main className="relative flex h-full">
        <Inbox />
        <Planner />
        <Board />
        <Control />
      </main>
    </div>
  );
}

export default App;
