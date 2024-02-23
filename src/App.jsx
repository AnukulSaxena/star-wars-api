import { useEffect } from "react";
import Planets from "./Components/Planets/Planets.jsx";
import Header from "./Components/Header/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPlanets } from "./store/homeSlice.js";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => dispatch(setPlanets(res?.data)))
      .catch((res) => console.error(res))
      .finally(window.scroll(0, 0));
  }, [url]);

  return (
    <div className="w-full py-20 min-h-screen bg-neutral-200 dark:bg-neutral-900">
      <Header />
      <Planets />
    </div>
  );
}

export default App;
