import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { SearchBox } from './SearchBox';
import { fetchCountries } from '../fetchCountries';
import { CountryList } from './CountryList';
import { CountryInfo } from './CountryInfo';

export const App = () => {
  const [countryName, setCountryName] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (countryName === '') {
      return;
    }

    async function getCountries() {
      try {
        const countries = await fetchCountries(countryName);
        setCountries(countries);
      } catch (error) {
        console.log(error);
      }
    }

    getCountries();
  }, [countryName]);

  useEffect(() => {
    if (countries.length >= 10) {
      toast.error('Очень много стран, давай уточни там в инпуте ага?');
    }
  }, [countries.length]);

  const shouldRenderCountryList =
    countries.length >= 2 && countries.length < 10;
  const shouldRenderCountryInfo = countries.length === 1;

  return (
    <>
      <Box
        as="main"
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SearchBox onSearch={setCountryName} />
        {shouldRenderCountryList && <CountryList countries={countries} />}
        {shouldRenderCountryInfo && <CountryInfo country={countries[0]} />}
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
    </>
  );
};
