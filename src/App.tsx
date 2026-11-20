import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Destinations from "./components/Destinations/Destinations";
import Reservation from "./components/Reservation/Reservation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/login";

function App() {
  const [page, setPage] = useState("accueil");

  return (
    <div className="max-w-2xl mx-auto my-6 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
      <Header page={page} setPage={setPage} />

      {page === "accueil" && (
        <>
          <Banner />
          <Destinations />
          {/* Étape 1 du TD 5 : Afficher Reservation après la section destinations */}
          <Reservation />
          <Login/>
        </>
      )}
      {page === "destinations" && (
        <>
          <Destinations />
          <Reservation />
          <Login/>
        </>
      )}
      {page === "reservation" && <Reservation />}
      {page === "contact" && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
