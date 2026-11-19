import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Destinations from "./components/Destinations/Destinations";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [page, setPage] = useState("accueil");

  return (
    <div className="max-w-xl mx-auto my-6 rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
      <Header page={page} setPage={setPage} />

      {page === "accueil" && (
        <>
          <Banner />
          <Destinations />
        </>
      )}
      {page === "destinations" && <Destinations />}
      {page === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;