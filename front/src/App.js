import Index from './Components';
import Horarios from './Components/Horarios';
import Malla from './Components/Malla';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Horarios' element={<Horarios />} />
          <Route path='/MallaInteractiva' element={<Malla />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
