import "./App.css";
import { ThemeProvider } from "./context/theme/ThemeContext.jsx";

import DessertsList from "./labs/lab1/DesertList";
import { desserts } from './data/deserts.js';
import RegistrationForm from "./labs/lab2/RegistrationForm.jsx";
import Context from "./labs/lab3/Context.jsx";
import GiftCardPage from "./labs/lab4/GiftCardPage.jsx";
import FetchRandomUser from "./labs/lab5/FetchRandomUser.jsx";
import WorkDay from "./labs/lab6/WorkDay.jsx";
import Radio from "./labs/lab7/Radio.jsx";
import MousePositionTracker from "./labs/lab8/MousePositionTracker.jsx";
import Feedback from "./labs/lab9/Feedback.jsx";
import Portfolio from "./labs/final-project/Portfolio.jsx";

import UncontrolledComponentForm from "./notes/uncontrolledComponent.jsx";
import ControlledComponentForm from "./notes/ControlledComponent.jsx";
import FetchingDataExample from "./notes/FetchingDataExample.jsx";
import ComponentComposition from "./notes/ComponentComposition.jsx";
import MousePositionTracker2 from "./notes/HigherOrderComponent.jsx";


function App() {
  return (
    <ThemeProvider>
      <div className="App">

        <div className="lab lab1">
          <h1 className="labNo">Lab - 1</h1>
          <h3>List of low calorie desserts:</h3>
          <DessertsList data={desserts} />
        </div>

        <div className="lab lab2">
          <h1 className="labNo">Lab - 2</h1>
          <RegistrationForm />
        </div>
        <div className="lab lab3">
          <h1 className="labNo">Lab - 3</h1>
          <Context />
        </div>
        <div className="lab lab4">
          <h1 className="labNo">Lab - 4</h1>
          <GiftCardPage />
        </div>
        <div className="lab lab5">
          <h1 className="labNo">Lab - 5</h1>
          <FetchRandomUser />
        </div>
        <div className="lab lab6">
          <h1 className="labNo">Lab - 6</h1>
          <WorkDay />
        </div>
        <div className="lab lab7">
          <h1 className="labNo">Lab - 7</h1>
          <Radio />
        </div>
        <div className="lab lab8">
          <h1 className="labNo">Lab - 8</h1>
          <MousePositionTracker />
        </div>
        <div className="lab lab9">
          <h1 className="labNo">Lab - 9</h1>
          <Feedback />
        </div>
        <div className="lab lab9">
          <h1 className="labNo">Final Project: PORTFOLIO</h1>
          <Portfolio />
        </div>

        <div className="notes">
          <h1 className="noteName">Uncontrolled Component</h1>
          <UncontrolledComponentForm />
        </div>

        <div className="notes">
          <h1 className="noteName">Controlled Component</h1>
          <ControlledComponentForm />
        </div>

        <div className="notes">
          <h1 className="noteName">Fetching BTC Data</h1>
          <FetchingDataExample />
        </div>
        
        <div className="notes">
          <h1 className="noteName">Component Composition</h1>
          <ComponentComposition />
        </div>
        <div className="notes">
          <h1 className="noteName">High Order Component</h1>
          <MousePositionTracker2 />
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;