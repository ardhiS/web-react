import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/style.css";
import ContactApp from "./components/ContactApp";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);

// function CounterDisplay({ count }) {
//   if (count === 0) {
//     return <p>{count}</p>;
//   }
//   if (count % 5 === 0 && count % 7 === 0) {
//     return <p>FizzBuzz</p>;previousState
//   }
//   if (count % 5 === 0) {
//     return <p>Fizz</p>;
//   }previousState
//   if (count % 7 === 0) {
//     return <p>Buzz</p>;
//   }
//   return <p>{count}</p>;
// }

// function IncreaseButton({ increase }) {
//   return (
//     <div>
//       <button onClick={increase}> + Increase</button>
//     </div>
//   );
// }

// function DecreaseButton({ decrease }) {
//   return (
//     <div>
//       <button onClick={decrease}> - Decrease</button>
//     </div>
//   );
// }
// function ResetButton({ reset }) {
//   return (
//     <div>
//       <button onClick={reset}>- reset</button>
//     </div>
//   );
// }
// class CounterApp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };

//     this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
//     this.onResetEventHandler = this.onResetEventHandler.bind(this);
//     this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
//   }

//   onDecreaseEventHandler() {
//     this.setState((prev) => {
//       return {
//         count: prev.count - 1,
//       };
//     });
//   }

//   onIncreaseEventHandler() {
//     this.setState((previousState) => {
//       return {
//         count: previousState.count + 1,
//       };
//     });
//   }

//   onResetEventHandler() {
//     this.setState(() => {
//       return {
//         count: 0,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <p>TODO : selesaikan component-nya!</p>
//         <IncreaseButton increase={this.onIncreaseEventHandler} />
//         <CounterDisplay count={this.state.count} />
//         <DecreaseButton decrease={this.onDecreaseEventHandler} />
//         <ResetButton reset={this.onResetEventHandler} />
//       </div>
//     );
//   }
// }

// const root = createRoot(document.getElementById("root"));
// root.render(<CounterApp />);
