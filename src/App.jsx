import { Suspense, useState } from "react";
import "./App.css";
import DaisyNav from "./components/Daisynav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOption from "./components/pricingOption/PricingOption";
import ResultRechart from "./components/resultRechart/ResultRechart";
import axios from "axios";
import MarksChert from "./MarksChert";
import Users from "./Users";
import MarksReChart from "./components/MarksRechart/MarksReChart";

const pricingPromise = fetch('pricingData.json').then(res => res.json());

const marksPromise = axios.get('MarksData.json');

function App() {

  return (
    <>
    <header>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
     <main>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>
      
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <MarksChert marksPromise={marksPromise}></MarksChert>
      </Suspense>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <MarksReChart marksPromise ={marksPromise}></MarksReChart>
      </Suspense>
      <ResultRechart></ResultRechart>

     </main>
    </header>
    </>
  );
}

export default App;
