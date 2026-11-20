import Destination from "../Destination/Destination";
import { destinationsData } from "../../data/destinations";

function Destinations() {
  return (
    <section id="destinations" className="p-5">
      <h2 className="text-xl font-bold text-[#17405a] mb-4">Nos destinations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {destinationsData.map((destination) => (
          <Destination
            key={destination.id}
            image={destination.image}
            nom={destination.nom}
            pays={destination.pays}
            description={destination.description}
            prix={destination.prix}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;
