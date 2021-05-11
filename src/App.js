import './App.css';
import Button from './components/button/usingfunction';
import ClassButton from './components/button/usingclass';

function App() {
  return (
    <div className="container mx-auto">
      <Button/>
      <ClassButton/>
    </div>
  );
}

export default App;
