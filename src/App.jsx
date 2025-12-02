import reactLogo from "./assets/react.svg";
import fine from "./assets/fine.gif";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={fine} className="this_is_fine" alt="This is fne gif" />
        <h1>Hello from Amplify</h1>
        <p>Learning AWS is going great!!!!!</p>
      </header>
    </div>
  );
}
export default App;