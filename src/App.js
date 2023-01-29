import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact element={<Home />} path="/" />
              <Route exact element={<Details />} path="/details" />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </main>

  );
}

export default App;
