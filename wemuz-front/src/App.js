import './App.css';

function App() {
  const n = 11;

  return (
    <div className="App">
      {n === 12 && <span>n은 12</span> && <span>n</span>}
    </div>
  );
}

export default App;
