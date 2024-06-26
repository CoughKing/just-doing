import React from "react";
import ReactDOM from "react-dom/client";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import DnD from "./Components/DnD";
import Start from "./Components/Start";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={
          <>
            <AddTodo />
            <Todos />
          </>
        }
      />
      <Route path="dnd" element={<DnD />} />
      <Route path="start" element={<Start />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
