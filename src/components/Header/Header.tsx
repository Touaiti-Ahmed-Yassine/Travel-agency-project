type Props = {
  page: string;
  setPage: (page: string) => void;
};

function Header({ page, setPage }: Props) {
  const lien = (nom: string, label: string) => (
    <button
      onClick={() => setPage(nom)}
      className={`hover:text-orange-400 ${
        page === nom ? "text-orange-400 font-bold underline" : ""
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="bg-[#17405a] text-white px-5 py-4">
      <h1 className="text-lg font-bold">✈️ Travel Agency</h1>
      <nav className="mt-1 flex gap-3 text-sm">
        {lien("accueil", "Accueil")}
        {lien("destinations", "Destinations")}
        {lien("contact", "Contact")}
      </nav>
    </header>
  );
}

export default Header;