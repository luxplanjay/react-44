const db = {
  invoices: [
    {
      id: '172987',
      recipient: 'Jacob Mercer',
      account: 20138714,
      total: 8000,
      date: {
        created: '2011-10-05T14:48:00.000Z',
        due: '2011-10-12T00:00:00.000Z',
      },
    },
    {
      id: '173851',
      recipient: 'Adrian Cross',
      account: 30986127,
      total: 11000,
      date: {
        created: '2017-07-01T12:18:00.000Z',
        due: '2017-08-14T00:00:00.000Z',
      },
    },
    {
      id: '186541',
      recipient: 'Solomon Fokes',
      account: 78615230,
      total: 82000,
      date: {
        created: '2019-03-17T10:12:00.000Z',
        due: '2019-04-02T00:00:00.000Z',
      },
    },
    {
      id: '185744',
      recipient: 'Artemis Tau',
      account: 82719051,
      total: 17000,
      date: {
        created: '2022-09-28T10:57:00.000Z',
        due: '2022-11-02T00:00:00.000Z',
      },
    },
  ],
  customers: [
    { id: 1, name: 'Mischa Hopkins' },
    { id: 2, name: 'Anis Cresswell' },
    { id: 3, name: 'Milla Wagner' },
    { id: 4, name: 'Faizan Gillespie' },
    { id: 5, name: 'Roy Mays' },
    { id: 6, name: 'Leanne Knott' },
    { id: 7, name: 'Debbie Fitzgerald' },
    { id: 8, name: 'Phebe Reyes' },
    { id: 9, name: 'Lola-Mae Kouma' },
    { id: 10, name: 'Krish Marsh' },
    { id: 11, name: 'Sienna Rodgers' },
    { id: 12, name: 'Harper-Rose Schroeder' },
    { id: 13, name: 'Pippa Gill' },
    { id: 14, name: 'Effie Shaffer' },
    { id: 15, name: 'Eshal Nixon' },
    { id: 16, name: 'Phyllis Dunlop' },
    { id: 17, name: 'Efe Valenzuela' },
    { id: 18, name: 'Roman Mcleod' },
    { id: 19, name: 'Mikayla Ibarra' },
    { id: 20, name: 'Fatma Yu' },
  ],
};

export const getInvoices = () => {
  return Promise.resolve(db.invoices);
};

export const getInvoiceById = invoiceId => {
  return Promise.resolve(db.invoices.find(invoice => invoice.id === invoiceId));
};

export const getCustomers = () => {
  return Promise.resolve(db.customers);
};

export const getCustomerById = id => {
  return Promise.resolve(db.customers.find(customer => customer.id === id));
};
