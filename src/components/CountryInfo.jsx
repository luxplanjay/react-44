const formatLanguages = langs => {
  return Object.values(langs).join(', ');
};

export const CountryInfo = ({ country }) => {
  const { flag, name, capital, population, languages } = country;

  return (
    <div>
      <h2>
        {/* <img src={flag} alt={name} width="40" height="40" /> */}
        {name.common}
      </h2>

      <p>
        <b>Capital:</b> {capital[0]}
      </p>
      <p>
        <b>Population:</b> {population}
      </p>
      <p>
        <b>Languages:</b> {formatLanguages(languages)}
      </p>
    </div>
  );
};
