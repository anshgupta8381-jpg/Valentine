
import './App.css'
import No from './components/No';
import Yes from './components/Yes';
import First from './components/First'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Gift1 from './Gift1';
import Gift2 from './Gift2';
import Gift3 from './Gift3';
import Diary from './components/Diary';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <First/>
    },

    {
      path: "/yes",
      element: <Yes/>
    },

    {
      path: "/no",
      element: <No/>
    },

     {
      path: "/gift1",
      element: <Gift1/>
    },

     {
      path: "/gift2",
      element: <Gift2/>
    },

     {
      path: "/gift3",
      element: <Gift3/>
    },

    {
      path: "/diary",
      element: <Diary/>
       },

  ]
)

function App() {

  return (
   <div>
       <RouterProvider router={router} />
   </div>
  )
}

export default App
