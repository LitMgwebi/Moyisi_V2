import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import FineArtIndex from "./pages/Portfolio/Fine/FineArtIndex";
import BackgroundIndex from "./pages/Portfolio/Digital/Background/BackgroundIndex";
import ConceptIndex from "./pages/Portfolio/Digital/Concept/ConceptIndex";
import AddConcept from "./pages/Portfolio/Digital/Concept/AddConcept";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/fine-art" element={<FineArtIndex />} />
          <Route path="/portfolio/background" element={<BackgroundIndex />} />
          
          <Route path="/portfolio/concept" element={<ConceptIndex />} />
          <Route path="/portfolio/concept/add" element={<AddConcept/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
