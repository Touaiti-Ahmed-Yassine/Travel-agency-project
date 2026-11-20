import santorin from "../assets/santorini.jpg";
import bali from "../assets/bali.jpg";
import rome from "../assets/rome.jpg";
import istanbul from "../assets/istanbul.jpg";

export interface DestinationItem {
  id: number;
  nom: string;
  pays: string;
  image: string;
  description: string;
  prix: number;
}

export const destinationsData: DestinationItem[] = [
  {
    id: 1,
    image: santorin,
    nom: "Santorin",
    pays: "Grèce",
    description: "Découvrez les magnifiques paysages des îles grecques.",
    prix: 1200,
  },
  {
    id: 2,
    image: bali,
    nom: "Bali",
    pays: "Indonésie",
    description: "Profitez des plages paradisiaques de Bali.",
    prix: 1800,
  },
  {
    id: 3,
    image: rome,
    nom: "Rome",
    pays: "Italie",
    description: "Découvrez les monuments historiques de Rome.",
    prix: 950,
  },
  {
    id: 4,
    image: istanbul,
    nom: "Istanbul",
    pays: "Turquie",
    description: "Explorez les mosquées et les bazars d'Istanbul.",
    prix: 1100,
  },
];
