import logo from './logo.svg';
import './App.css';
import CalculateScore from "./CalculateScore"
function App() {
  return (
    <div className="App">
      <CalculateScore name="David" school = "St. Joseph's High School" total="879" goal = "1000"/>
    </div>
  );
}

export default App;
