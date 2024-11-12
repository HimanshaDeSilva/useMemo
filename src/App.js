import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  // console.log("Component re-rendered");

  const expensiveCalculation = (n) => {
    // console.log("Expensive function re-rendered");
    let total = 0;
    for (let i = 1; i < n; i++) {
      total += i;
    }
    return total;
  };

  // const sum = expensiveCalculation(age);
  //-----------use memo
  const sum = useMemo(() => 
    expensiveCalculation(age)
  , [age]);


  //------------part 2 (object , arrays)
  const myName = name;
  useEffect(()=>{
    // console.log(myName,'rendered----------------------')
  },[myName])

  // ------------ Object
  // const myObj={
  //   name:name ? name:"Enter name"
  // }

  const myObj= useMemo(
    ()=>({
    name:name ? name:"Enter name"
  }),[name])


  useEffect(()=>{
    console.log("Object rendered")
  },[myObj])
  
//-------------------------------------------
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      <br />

      <label>{sum}</label>
    </div>
  );
}

export default App;
