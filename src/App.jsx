import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
      <DiscoButton />
    </div>
  );
}

export default App;
