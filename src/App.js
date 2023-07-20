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
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book"
      />
      <Course
        image={Bootstrap}
        title="Bootstrap"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book"
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
