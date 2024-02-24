import Header from "./Components/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full  pt-20 min-h-screen bg-neutral-200 dark:bg-neutral-900">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
