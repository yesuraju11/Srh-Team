import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Players from './Components/Players';
/* player list */
import Player1 from './PlayersData/Player1';
import Player2 from './PlayersData/Player2';
import Player3 from './PlayersData/Player3';
import Player4 from './PlayersData/Player4';
import Player5 from './PlayersData/Player5';
import Player6 from './PlayersData/Player6';
import Player7 from './PlayersData/Player7';
import Player8 from './PlayersData/Player8';
import Player9 from './PlayersData/Player9';
import Player10 from './PlayersData/Player10';
import Player11 from './PlayersData/Player11';









 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/players",
      element: <Players/>,
    },
    {
      path: "/player1",
      element: <Player1/>,
    },
    {
      path: "/player2",
      element: <Player2/>,
    },
    {
      path: "/player3",
      element: <Player3/>,
    },
    {
      path: "/player4",
      element: <Player4/>,
    },
    {
      path: "/player5",
      element: <Player5/>,
    },
    {
      path: "/player6",
      element: <Player6/>,
    },
    {
      path: "/player7",
      element: <Player7/>,
    },
    {
      path: "/player8",
      element: <Player8/>,
    },
    {
      path: "/player9",
      element: <Player9/>,
    },
    {
      path: "/player10",
      element: <Player10/>,
    },
    {
      path: "/player11",
      element: <Player11/>,
    },
  ]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   { /*<App />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
