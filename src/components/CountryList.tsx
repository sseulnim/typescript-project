import React from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error("Failed to fetch country information.", error);
        setError(
          "Failed to fetch country information. Please try again later."
        );
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      <h1 className="text-3xl font-extrabold mb-10 text-center">
        Selected Countries
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6 mb-10">
        {selectedCountries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
      <h1 className="text-3xl font-extrabold mb-10 text-center">
        Country List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6">
        {countries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
