import './App.css';
import Hello from './component/Hello';

function App() {
  return (
    <div>
      <Hello age={10}/>
      <Hello age={20}/>
      <Hello age={30}/>
    </div>
  );
}

export default App;
