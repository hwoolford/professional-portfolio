// import './App.css'

import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#d8dbe2",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

function App() {
  return (
      <Background>
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
      </Background>
  );
}

export default App;
