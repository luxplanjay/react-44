import { getCustomerById } from 'fakeApi';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }

  const { id, name } = customer;
  const backLinkHref = location.state?.from ?? '/customers';

  return (
    <main>
      <Link to={backLinkHref}>Back to customers</Link>
      <p>id: {id}</p>
      <p>Username: {name}</p>
    </main>
  );
};

export default CustomerDetails;
