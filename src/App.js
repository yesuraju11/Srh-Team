import './App.css';
import NavigationBar from './Components/NavigationBar';
import Team from './Components/Team';
import Footers from './Components/Footers';
import Sliding from './Components/Sliding';
import Footer2 from './Components/Footer2';

function App() {
  return (
    <div className="App">
      < NavigationBar/>
      <Sliding />
      <br></br>
      <Team />
      <br></br>
      <Footers />
      <Footer2/>

    </div>
  );
}

export default App;
