import { useState, FormEvent } from "react";
import styles from "./Reservation.module.css";

interface ReservationData {
  nom: string;
  email: string;
  telephone: string;
  destination: string;
  dateDepart: string;
  nbVoyageurs: number | string;
  typeVoyage: string;
  demandesParticulieres: string;
}

function Reservation() {
  // Étape 3 – Déclaration des états avec useState
  const [nom, setNom] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [dateDepart, setDateDepart] = useState<string>("");
  const [nbVoyageurs, setNbVoyageurs] = useState<number | string>(1);
  const [typeVoyage, setTypeVoyage] = useState<string>("Économique");
  const [demandesParticulieres, setDemandesParticulieres] = useState<string>("");

  // Étape 6 – État pour stocker la réservation soumise (initialisé à null)
  const [reservation, setReservation] = useState<ReservationData | null>(null);

  // Étape 5 & 7 – Gestion de la soumission et validation
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Étape 7 – Contrôles de validation
    if (nom.trim() === "") {
      alert("Veuillez saisir votre nom !");
      return;
    }

    if (email.trim() === "") {
      alert("Veuillez saisir votre adresse e-mail !");
      return;
    }

    if (destination === "") {
      alert("Veuillez sélectionner une destination !");
      return;
    }

    if (dateDepart === "") {
      alert("Veuillez renseigner la date de départ !");
      return;
    }

    if (!nbVoyageurs || Number(nbVoyageurs) < 1) {
      alert("Le nombre de voyageurs doit être supérieur ou égal à 1 !");
      return;
    }

    // Enregistrement des données dans l'état reservation
    const nouvelleReservation: ReservationData = {
      nom,
      email,
      telephone,
      destination,
      dateDepart,
      nbVoyageurs,
      typeVoyage,
      demandesParticulieres,
    };

    setReservation(nouvelleReservation);
    alert("Réservation enregistrée !");
  }

  // Fonction pour réinitialiser le formulaire
  function handleReset() {
    setNom("");
    setEmail("");
    setTelephone("");
    setDestination("");
    setDateDepart("");
    setNbVoyageurs(1);
    setTypeVoyage("Économique");
    setDemandesParticulieres("");
    setReservation(null);
  }

  return (
    <section id="reservation" className={styles.container}>
      <h2 className={styles.title}>📋 Réservation de voyage</h2>
      <p className={styles.subtitle}>
        Remplissez le formulaire ci-dessous pour réserver votre séjour.
      </p>

      {/* Étape 5 – Formulaire avec onSubmit */}
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Champ Nom et prénom */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Nom et prénom <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            placeholder="Ex : Ahmed Ben Ali"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* Champ Adresse e-mail */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Adresse e-mail <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            placeholder="Ex : ahmed@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* Champ Téléphone */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Téléphone</label>
          <input
            type="tel"
            placeholder="Ex : 22123456"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* Champ Destination */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Destination <span className={styles.required}>*</span>
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={styles.select}
          >
            <option value="">-- Choisir une destination --</option>
            <option value="Santorin">Santorin</option>
            <option value="Bali">Bali</option>
            <option value="Rome">Rome</option>
            <option value="Istanbul">Istanbul</option>
          </select>
        </div>

        {/* Champ Date de départ */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Date de départ <span className={styles.required}>*</span>
          </label>
          <input
            type="date"
            value={dateDepart}
            onChange={(e) => setDateDepart(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* Champ Nombre de voyageurs */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Nombre de voyageurs <span className={styles.required}>*</span>
          </label>
          <input
            type="number"
            min="1"
            value={nbVoyageurs}
            onChange={(e) => setNbVoyageurs(e.target.value)}
            className={styles.input}
          />
        </div>

        {/* Champ Type de voyage (Radio buttons) */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Type de voyage</label>
          <div className={styles.radioGroup}>
            {["Économique", "Confort", "Luxe"].map((type) => (
              <label key={type} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="typeVoyage"
                  value={type}
                  checked={typeVoyage === type}
                  onChange={(e) => setTypeVoyage(e.target.value)}
                  className={styles.radioInput}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Champ Demandes particulières */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Demandes particulières</label>
          <textarea
            rows={3}
            placeholder="Ex : Chambre avec vue sur mer, repas végétarien..."
            value={demandesParticulieres}
            onChange={(e) => setDemandesParticulieres(e.target.value)}
            className={styles.textarea}
          />
        </div>

        {/* Boutons d'action */}
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.btnSubmit}>
            ✈️ Réserver
          </button>
          <button
            type="button"
            onClick={handleReset}
            className={styles.btnReset}
          >
            🔄 Réinitialiser
          </button>
        </div>
      </form>

      {/* Étape 6 – Affichage du récapitulatif si reservation existe */}
      {reservation && (
        <div className={styles.recapitulatif}>
          <h3 className={styles.recapTitle}>
            ✅ Réservation confirmée !
          </h3>
          <p className={styles.recapText}>
            <strong>Récapitulatif de votre réservation : </strong>
            {reservation.nom} – {reservation.email}
            {reservation.telephone ? ` – ${reservation.telephone}` : ""} –{" "}
            {reservation.destination} – {reservation.dateDepart} –{" "}
            {reservation.nbVoyageurs}{" "}
            {Number(reservation.nbVoyageurs) > 1 ? "voyageurs" : "voyageur"} –{" "}
            {reservation.typeVoyage}
            {reservation.demandesParticulieres
              ? ` – ${reservation.demandesParticulieres}`
              : ""}
            .
          </p>

          <div className={styles.recapDetails}>
            <div className={styles.recapItem}>
              <strong>Client :</strong> {reservation.nom}
            </div>
            <div className={styles.recapItem}>
              <strong>Contact :</strong> {reservation.email}{" "}
              {reservation.telephone && `(${reservation.telephone})`}
            </div>
            <div className={styles.recapItem}>
              <strong>Destination :</strong> {reservation.destination}
            </div>
            <div className={styles.recapItem}>
              <strong>Départ :</strong> {reservation.dateDepart}
            </div>
            <div className={styles.recapItem}>
              <strong>Voyageurs :</strong> {reservation.nbVoyageurs}
            </div>
            <div className={styles.recapItem}>
              <strong>Formule :</strong> {reservation.typeVoyage}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Reservation;
