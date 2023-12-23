import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage";
import { useEffect, useState } from "react";

function App() {
  const [groupingValue, setgroupingValue] = useState(
    getGroupingFromLocalStorage() || "status"
  );
  const [orderingValue, setorderingValue] = useState(
    getOrdeingFromLocalStorage() || "title"
  );

  function saveGroupingToLocalStorage(state) {
    localStorage.setItem("groupValue", JSON.stringify(state));
    setgroupingValue(JSON.parse(localStorage.getItem("groupValue")));
  }

  function saveOrderingToLocalStorage(state) {
    localStorage.setItem("orderValue", JSON.stringify(state));
    setorderingValue(JSON.parse(localStorage.getItem("orderValue")));
  }

  function getGroupingFromLocalStorage() {
    const groupingState = localStorage.getItem("groupValue");
    if (groupingState) {
      return JSON.parse(groupingState);
    }
    return null;
  }

  function getOrdeingFromLocalStorage() {
    const orderingState = localStorage.getItem("orderValue");
    if (orderingState) {
      return JSON.parse(orderingState);
    }
    return null;
  }
  useEffect(() => {}, [groupingValue, orderingValue]);
  return (
    <div className="App">
      <NavBar
        groupingValue={groupingValue}
        orderingValue={orderingValue}
        saveGroupingToLocalStorage={saveGroupingToLocalStorage}
        saveOrderingToLocalStorage={saveOrderingToLocalStorage}
        getGroupingFromLocalStorage={getGroupingFromLocalStorage}
        getOrdeingFromLocalStorage={getOrdeingFromLocalStorage}
      />
      <HomePage
        groupingValue={groupingValue}
        orderingValue={orderingValue}
        setgroupingValue={setgroupingValue}
        setorderingValue={setorderingValue}
        saveGroupingToLocalStorage={saveGroupingToLocalStorage}
        saveOrderingToLocalStorage={saveOrderingToLocalStorage}
        getGroupingFromLocalStorage={getGroupingFromLocalStorage}
        getOrdeingFromLocalStorage={getOrdeingFromLocalStorage}
      />
    </div>
  );
}

export default App;
