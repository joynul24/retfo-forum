import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import MarkAssRead from "./components/MarkAssRead/MarkAssRead";

function App() {


  return (

    <>
      <Header></Header>
      <div className="md:flex container mx-auto gap-6 mt-10">
      <Cards></Cards>
      <MarkAssRead></MarkAssRead>
      </div>
    </>
    
  );
}

export default App;
