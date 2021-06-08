import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

import "./App.css";

import Header from "./components/Header";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>{logged ? "Welcome" : "You have to login first"}</h3>
    </>
  );
}

export default App;
