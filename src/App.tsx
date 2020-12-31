import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinePlot from './components/LinePlot';
import PiePlot from './components/PiePlot';
import BarPlot from './components/BarPlot';
import RaderPlot from './components/RaderPlot';
import BubbleChart from './components/BubbleChart';

function App() {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RaderPlot />
      <BubbleChart />
    </div>
  );
}

export default App;
