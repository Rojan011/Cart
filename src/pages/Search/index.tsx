import { useEffect, useState } from "react";
import logo from "./RojanNET.png";
import "./styles.css";
import { names } from "../../data/names";

const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Header: React.FC = () => <img src={logo} alt="Joegle Logo" />;

const Footer: React.FC = () => (
  <>
    <div className="auto-suggest-buttons">
      <button>RojanNET Search</button>
      <button>I'm Feeling Lucky</button>
    </div>
    <p>
      <a href="/store">Shop final Black Friday device deals</a> on the RojanNET
      Store today.
    </p>
  </>
);

interface AutoSuggestProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  results: string[];
  search: string;
}

const AutoSuggest: React.FC<AutoSuggestProps> = ({
  onSearch,
  results,
  search,
}) => (
  <div className="auto-suggest">
    <input
      type="text"
      placeholder="Search RojanNET or type a URL"
      className="w-96 p-3 text-lg border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      value={search}
      spellCheck={false}
      onInput={onSearch}
    />
    <div className="menu">
      <div className="text-white">
        {results.map((name) => (
          <button key={name}>{name}</button>
        ))}
      </div>
    </div>
  </div>
);

export const AutoSuggestExample: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const [results, setResults] = useState<string[]>([]);

  const debounced = useDebounce(search, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  useEffect(() => {
    const namesCopy = [...names]; // Assuming names is an array of strings
    setResults(
      namesCopy.filter(
        (n) => search === "" || n.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [debounced]);

  return (
    <section className="page auto-suggest-page ">
      <Header />
      <AutoSuggest search={search} onSearch={handleSearch} results={results} />
      <Footer />
    </section>
  );
};
