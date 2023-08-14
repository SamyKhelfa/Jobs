import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
// N'oubliez pas d'importer le composant Footer si nécessaire
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Jobs /> {}
      <Footer>{}</Footer>
    </div>
  );
}

export default App;
