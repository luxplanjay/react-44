// https://www.npmjs.com/package/react-debounce-input

export const SearchBox = ({ onSearch }) => {
  return (
    <div>
      <input type="text" onChange={e => onSearch(e.target.value)} />
    </div>
  );
};
