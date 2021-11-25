import './App.css';
import Routed from './Pages/Routed/Routed';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

function App() {
  return (
    <div className="App">
      <Routed></Routed>
     
    </div>
  );
}

export default App;
