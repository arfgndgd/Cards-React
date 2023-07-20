import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Cssharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";


function App() {
  return (
    <div className="App">
      <Course
        image={Angular}
        title="Angular"
        description="Loremfdasfasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      fdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfadsfafad"
      />
      <Course
        image={Bootstrap}
        title="Bootstrap"
        description="Loremfdasfasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      fdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfadsfafad"
      />
      <Course
        image={Cssharp}
        title="Ccsharp"
        description="Loremfdasfasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      fdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfadsfafad"
      />
      <Course
        image={KompleWeb}
        title="KompleWeb"
        description="Loremfdasfasfasfasfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      fdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfadsfafad"
      />
    </div>
  );
}

export default App;
