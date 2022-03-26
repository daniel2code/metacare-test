import { useState, useEffect } from "react";
import RouterHelper from "./common/router";
import Loader from "./components/loaders/index";

function App() {
  const [openLoader, setOpenLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpenLoader(false);
    }, 4500);
  });

  return (
    <div className="App">
      {/* Displays loader for some seconds */}
      {openLoader === true ? <Loader /> : <RouterHelper />}
    </div>
  );
}

export default App;
