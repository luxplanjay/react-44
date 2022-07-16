const formatLanguages = langs => {
  return langs.map(lang => lang.name).join(', ');
};

export const CountryInfo = ({ country }) => {
  const { flag, name, capital, population, languages } = country;

  return (
    <div>
      <h2>
        <img src={flag} alt={name} width="40" height="40" />
        {name}
      </h2>

      <p>
        <b>Capital:</b> {capital}
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
