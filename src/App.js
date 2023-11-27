import logo from './logo.svg';
import './App.css';

function PrintHello(){
  return (
        <div>
          <h1>Python</h1>
          <p>Java</p>
        </div>
        )
}

var PrintHello1 = function(){
  return (
    <div>
      <h1>Python</h1>
      <p>Java</p>
    </div>
    )
}

// arrow function
var PrintHello2 = () =>(
    <div>
      <h1>Python</h1>
      <p>Java</p>
    </div>
    )

var spread_example = (a, ...params) => (
  <div>
    <h1>{a}</h1>
    <h2>{params.join(', ')}</h2>
  </div>
)


function App() {
  const paramsArray = ['param1', 'param2', 'param3'];
  const a = 'Hello';
  return (
    <div className="App">
      <header className="App-header">
        <PrintHello2/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {spread_example(a, ...paramsArray)}
    
      </header>
  
    </div>
  );
}

export default App;