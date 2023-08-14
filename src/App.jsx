import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header className="header" />
      <div className="jobs-container">
        <Jobs /> {}
      </div>
      <Footer>{}</Footer>
    </div>
  );
}

export default App;
