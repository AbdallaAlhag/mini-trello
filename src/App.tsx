import { MainContent } from "./MainContent.tsx";
import { ColumnProvider } from "./ColumnProvider.tsx";
function App() {
  return (
    <ColumnProvider>
      <MainContent></MainContent>
    </ColumnProvider>
  );
}

export default App;
