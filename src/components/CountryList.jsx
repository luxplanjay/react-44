export const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map(({ name, flag }) => (
        <li key={name.common}>
          {/* <img src={flag} alt={name.common} width="24" height="24" /> */}
          {name.common}
        </li>
      ))}
    </ul>
  );
};
