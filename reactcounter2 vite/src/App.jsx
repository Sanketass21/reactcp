import { useState } from "react";
function App() {
	const [count, setCount] =useState(0)
	function isPrime(count) {
		if(count == 1 || count == 0 ) {
			return false
		}
		for(let i=2; i<count; i++) {
		if(count % i === 0)	{
			return false
		}
		return true
	}
		
}
	return (
	  <div>
		<div>
		  <button className="minusonebtn" disabled={count==0} onClick={()=>setCount(count  - 1)}>-1</button>
		  <button className="plusonebtn" onClick={()=>setCount(count + 1)}>+1</button>
		<div>
		  <button className="resetbtn" onClick={()=>setCount(0)}>Reset Count</button>
		</div>
		</div>
		<span className="counter" >Count : {count}</span>
		<div>
		  <span className="odd-or-even">This number is: {count % 2 === 0 ? "Even" : "Odd"}</span>
		  <br />
		  <span className="is-prime">Prime number : {isPrime(count) ? "true" : "false"}</span>
		</div>
	  </div>
	);
  }
  export default App;