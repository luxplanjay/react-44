import { useState, useEffect, useRef } from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

const Gallery = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <GalleryItem key={item.name} item={item} />
      ))}
    </div>
  );
};

const GalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>{item.name}</div>
      {isModalOpen && (
        <Modal itemName={item.name} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

const Modal = ({ itemName, onClose }) => {
  return (
    <div>
      Modal: {itemName}
      <br />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export const App = () => {
  const [items, setItems] = useState([{ name: 1 }, { name: 2 }, { name: 3 }]);

  return (
    <>
      <Box as="main" px={4}>
        <Gallery items={items} />
      </Box>
      <GlobalStyle />
    </>
  );
};
