import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { CounterProvider } from "./context/Counter";
import NavBar from "./components/NavBar";
import Page from "./pages/Page";

function App() {
  return (
    <CounterProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </CounterProvider>
  );
}

export default App;
