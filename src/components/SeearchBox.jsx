export const SearchBox = () => {
  return (
    <form autoComplete="off">
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};
