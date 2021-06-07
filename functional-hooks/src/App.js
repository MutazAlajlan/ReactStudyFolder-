import logo from './logo.svg';
import './App.css';
import SecondCom from './SecondCom';
import {useState, useEffect} from 'react'
import Car from './Car'

function App() {
  const [increment, setIncrement] = useState(1)
  const [age, setAge] = useState("15")
  const [showCar, setShowCar] = useState(false)
//              function         the dependant
  useEffect( ()=> {console.log("inside useEffect increment"); changeValue() }, [increment])


const changeValue = ()=>{
  setIncrement(5); setAge(100);
}

const toggleCar = () => {
  setShowCar(!showCar);
}
  return (
    <div className="App">
      <SecondCom name={"Ahmed"}></SecondCom>
      this state value: {increment}
      <p>Your age is: {age}</p>
      <button onClick = {()=> setIncrement(increment+1)}> input</button>
      <button onClick = {toggleCar}> show car</button>
      {showCar? <Car/>: <h1>No cars are available!</h1>}
      <Car/>
    </div>
  );
}

export default App;
