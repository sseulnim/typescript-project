import { Country } from "../types/country";

interface CountyCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountyCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div onClick={() => handleSelectCountry(country)}>
      <img src={country.flags.svg} style={{ width: "40px", height: "40px" }} />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
