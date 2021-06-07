import Func from './Func'
import './Func.css'
import FunClass from './FunClass'
function App() {
  let namesList = ["I'm", "a", "list"];
  return (
<div>
<h1>Hello and welcome</h1>
    <h2 className="test">To my React app!</h2>
    <h3>Have a fun time.</h3>
    <hr />
    <br />
    <Func n="not a func"/>
    <Func n=" a hidden func"/>
    <Func n= "an obvious func"/>
    {/*<FunClass name = "Function"/>*/}
    <FunClass names = {namesList} />
</div>
  );
}

export default App;
