import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  fetchDate,
} from "./counterSlice";
import { useGetPokemonByNameQuery,useGetPokemonQuery } from "../services/testServices";
import { Link } from "react-router-dom";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const apiData = useSelector((state) => state.counter.apiData);
  const { data, error, isLoading } = useGetPokemonQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDate(data));
  }, [data, dispatch]);

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  return (
    <div>
      <h1>這是A頁面</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button aria-label="" onClick={() => dispatch(incrementByAmount(10))}>
          超多
        </button>
      </div>
      <p>
        Go to <Link to="/B">B</Link>
      </p>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
    </div>
  );
}
