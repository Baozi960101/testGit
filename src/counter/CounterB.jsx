import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function CounterB() {
  const apiData = useSelector((state) => state.counter.apiData);

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  return (
    <div>
      <h1>這是B頁面</h1>
      <p>
        Go to <Link to="/A">A</Link>
      </p>
      <p>
        Go to <Link to="/">Home</Link>
      </p>
      <p>{apiData?.title}</p>
    </div>
  );
}
