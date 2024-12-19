import React, { useEffect, useState } from 'react';

function Greet({ name, course }) {
    // useState
//   const [count, setCount] = useState(0);
//   const [userName, setUserName] = useState("Maham");
//   function increment() {
    // setCount(count + 1);
//   }
  
// useEffect
//   useEffect(() => {
    // console.log("hello");
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json))

//   }, [count]);

  return (
    <>
      {/* Props */}
      {/* <p>Hello {name} {course}</p> */}

      {/* useState */}
      {/* <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increase</button>
      </div>

      <p>{userName}</p>
      <button onClick={() => setUserName("Kanwal")}>Change</button> */}


    </>
  );
}

export default Greet;
