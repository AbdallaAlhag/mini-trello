import { Header } from "./components/features/header";
import { Inbox } from "./components/features/inbox";
import { Planner } from "./components/features/planner";
import { Board } from "./components/features/board";
import { Control } from "./components/features/control";

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-black text-white antialiased m-0 p-0 flex flex-col">
      <Header />
      <main className="flex">
        <Inbox />
        <Planner />
        <Board />
        <Control />
      </main>
    </div>
  );
}

export default App;
