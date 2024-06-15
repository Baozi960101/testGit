import { Counter } from "./counter/Counter";
import { CounterB } from "./counter/CounterB";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/A", element: <Counter /> },
  { path: "/B", element: <CounterB /> },
]);

function HomePage() {
  return (
    <div>
      <h1>這是開發線2.0</h1>
      <h1>這是一個新功能</h1>
      <p>
        Go to <Link to="/A">A</Link>
      </p>
      <p>
        Go to <Link to="/B">B</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
