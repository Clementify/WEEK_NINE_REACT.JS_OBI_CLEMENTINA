import './App.css';
import Button from './components/Button';

function App() {
  const alerter =()=>{
    alert('successful')
  }
  return (
    <div className="App">
      
         <Button label = 'my button' onclick = {alerter}/>
    </div>
  );
}

export default App;
