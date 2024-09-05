import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./Pages/error-page"
import BatmanQuote from "./Pages/batman-random-page"
import Markdown from "./Pages/markdown-previewer"
import DrumMachine from "./Pages/drum-machine"
import Calculator from "./Pages/calculator"
import Clock from "./Pages/clock"


const router = createBrowserRouter([
    {
        path: "/",
        element:<Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/batman",
                element:<BatmanQuote />,
            }, {
                path: "/markdown",
                element:<Markdown />,
            },{
                path: "/drumMachine",
                element:<DrumMachine />,
            },{
                path: "/calculator",
                element:<Calculator />,
            },{
                path: "/clock",
                element:<Clock />,
            }
        ]
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
