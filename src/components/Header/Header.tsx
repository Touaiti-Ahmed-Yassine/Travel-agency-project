type Props = {
  page: string;
  setPage: (page: string) => void;
};

function Header({ page, setPage }: Props) {
  const lien = (nom: string, label: string) => (
    <button
      onClick={() => setPage(nom)}
      className={`hover:text-orange-400 transition-colors ${
        page === nom ? "text-orange-400 font-bold underline" : ""
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="bg-[#17405a] text-white px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => setPage("accueil")}
      >
        ✈️ Travel Agency
      </h1>
      <nav className="flex gap-4 text-sm font-medium">
        {lien("accueil", "Accueil")}
        {lien("destinations", "Destinations")}
        {lien("reservation", "Réservation")}
        {lien("contact", "Contact")}
      </nav>
    </header>
  );
}

export default Header;
