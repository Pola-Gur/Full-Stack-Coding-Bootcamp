import './App.css';

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <p>{ myelement }</p>
      <p>React is {sum} times better with JSX</p>
     </div>
  );
}

export default App;
