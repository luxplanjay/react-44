import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';

const fitlerSlice = createSlice({
  initialState: {
    value: '',
  },
});

const contactsApi = createApi();




configureStore({
  reducers: {
    contacts: combineReducers({
      items: contactsApi.reducerPath,
      filter: fitlerSlice.reducer
    })
  }
})

const useFilteredContacts = () => {
  const { contacts } = useGetContactsQuery();
  const filter = useSelector(state => state.contacts.filter.value);

  return contacts.filter(...)
}

export const App = () => {
  const contacts = useFilteredContacts()

  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <button onClick={() => {
        dispatch(contactsApi.util.resetApiState())
      }}>Logout</button>
    </>
  );
};





