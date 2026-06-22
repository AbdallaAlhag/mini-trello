import { Header } from "./components/features/header";
import { Inbox } from "./components/features/inbox";
// import { Planner } from "./components/features/planner";
import { Board } from "./components/features/board";
import { Island } from "./components/features/island";

function App() {
  return (
    <div className="fixed inset-0 bg-[#1F1F21] text-white antialiased m-0 p-3 flex flex-col gap-3">
      <Header />
      <main className="relative flex gap-3 w-full pb-50">
        <Inbox />
        {/* <Planner /> */}
        <Board />
        <Island />
      </main>
    </div>
  );
}

export default App;
