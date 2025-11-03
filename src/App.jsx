import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";

function App() {
  const fetchCountries = async () => {
    const rest = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population"
    );
    return rest.json();
  };

  const fetchPromise = fetchCountries();

  return (
    <>
      <h1>Hello react</h1>
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Countries fetchPromise={fetchPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
