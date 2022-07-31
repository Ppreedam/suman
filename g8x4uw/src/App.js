import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
const [page,setPage]=useState(1)

  const prevhandler=()=>{
  if(page>1 && page<=data.length)
  {
    setPage(page-1)
  }
  }
  const nexthandler=()=>{
    if(page>=1 && page<data.length)
    {
      setPage(page+1)
    }
    }
  

  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide data={data} page={page}/>
      <button data-testid="prev" onClick={prevhandler}  >Prev</button>
      <button data-testid="next" onClick={nexthandler}  >Next</button>
    </div>
  );
}
