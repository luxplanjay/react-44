export const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map(({ name, flag }) => (
        <li key={name}>
          <img src={flag} alt={name} width="24" height="24" />
          {name}
        </li>
      ))}
    </ul>
  );
};
