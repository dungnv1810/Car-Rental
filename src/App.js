import { useEffect } from "react";
import Aos from "aos"
import React from "react";
import Layout from "./components/Layout/Layout";
function App() {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <>
      <Layout/>
    </>
  );
}

export default App;
