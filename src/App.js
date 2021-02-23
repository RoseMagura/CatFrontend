import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
          Cat Pictures
      </h1>
      <button onclick={fetchAll}>See All</button>
      <button onclick={fetchById}>Pick By Id</button>
    </div>
  );
}

export default App;
