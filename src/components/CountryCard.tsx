import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard = ({ country, handleSelectCountry }: CountryCardProps) => {
  return (
    <div
      onClick={() => handleSelectCountry(country)}
      className="cursor-pointer px-3 py-2 border rounded shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center w-48 h-56"
    >
      <img
        src={country.flags.svg}
        className="w-42 h-28 object-fill"
        alt={`Flag of ${country.name.common}`}
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center mt-2">
        {country.name.common}
      </h3>
    </div>
  );
};

export default CountryCard;
