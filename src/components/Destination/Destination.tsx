import { useState } from "react";
import styles from "./Destination.module.css";

type Props = {
  image: string;
  nom: string;
  pays: string;
  description: string;
  prix: number;
};

function Destination({ image, nom, pays, description, prix }: Props) {
  // TD 4 - Activité 1 : État pour afficher ou masquer les détails (initialisé à false)
  const [afficherDetails, setAfficherDetails] = useState<boolean>(false);

  // TD 4 - Activité 2 : État pour marquer la destination en favori (initialisé à false)
  const [estFavori, setEstFavori] = useState<boolean>(false);

  // TD 4 - Bonus du défi : Message d'avertissement si déjà en favoris
  const [messageBonus, setMessageBonus] = useState<string>("");

  // Activité 1 : Inverse la valeur de afficherDetails au clic
  const toggleDetails = () => {
    setAfficherDetails(!afficherDetails);
  };

  // Activité 2 : Inverse la valeur de estFavori au clic (+ gestion bonus si déjà favori)
  const toggleFavori = () => {
    if (estFavori) {
      // Bonus : afficher un message si l'utilisateur clique une 2ème fois alors qu'elle est déjà en favoris
      setMessageBonus("Cette destination est déjà dans vos favoris !");
      setTimeout(() => {
        setMessageBonus("");
      }, 3000);
      setEstFavori(false);
    } else {
      setMessageBonus("");
      setEstFavori(true);
    }
  };

  // TD 4 - Défi facultatif : Réinitialiser l'état des détails et des favoris
  const reinitialiser = () => {
    setAfficherDetails(false);
    setEstFavori(false);
    setMessageBonus("");
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={nom} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{nom}</h2>
        <p className={styles.pays}>{pays}</p>

        {/* Activité 1 : Afficher la description uniquement lorsque afficherDetails vaut true */}
        {afficherDetails && (
          <p className={styles.description}>{description}</p>
        )}

        <h3 className={styles.prix}>{prix} DT</h3>

        {/* Activité 3 : Boutons stylisés avec Destination.module.css */}
        <div className={styles.actions}>
          {/* Activité 1 : Bouton pour afficher / masquer les détails */}
          <button onClick={toggleDetails} className={styles.btnDetails}>
            {afficherDetails ? "Masquer les détails" : "Voir les détails"}
          </button>

          {/* Activité 2 : Bouton pour les favoris */}
          <button
            onClick={toggleFavori}
            className={`${styles.btnFavori} ${
              estFavori ? styles.btnFavoriActif : ""
            }`}
          >
            {estFavori ? "⭐ Dans mes favoris" : "♡ Ajouter aux favoris"}
          </button>

          {/* Bonus du défi */}
          {messageBonus && (
            <div className={styles.messageFavori}>{messageBonus}</div>
          )}

          {/* Défi facultatif : Réinitialiser */}
          <button onClick={reinitialiser} className={styles.btnReset}>
            🔄 Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destination;
