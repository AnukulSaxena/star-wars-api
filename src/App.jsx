import { useEffect } from "react";
import Header from "./Components/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPlanets, setPeople } from "./store/homeSlice.js";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { planetUrl, peopleUrl } = useSelector((state) => state.home);

  useEffect(() => {
    axios
      .get(planetUrl)
      .then((res) => dispatch(setPlanets(res?.data)))
      .catch((res) => console.error(res))
      .finally(window.scroll(0, 0));
  }, [planetUrl]);

  useEffect(() => {
    axios
      .get(peopleUrl)
      .then((res) => dispatch(setPeople(res?.data)))
      .catch((res) => console.error(res))
      .finally(window.scroll(0, 0));
  }, [peopleUrl]);

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
