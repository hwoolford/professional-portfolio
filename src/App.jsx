import './App.css'

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
