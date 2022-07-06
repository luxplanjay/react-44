import { Component } from 'react';
import { HiAcademicCap, HiCalendar, HiArchive } from 'react-icons/hi';
// import { Alert } from './Alert';
import { Box } from './Box';

const options = [
  { label: 'a', icon: HiAcademicCap },
  { label: 'b', icon: HiCalendar },
  { label: 'c', icon: HiArchive },
];

export class App extends Component {
  state = {
    a: 1,
    b: 2,
    c: 3,
  };

  render() {
    return (
      <Box as="main" px={4}>
        {options.map(({ label, icon: Icon }) => {
          return (
            <button key={label}>
              <Icon />
              {label}
            </button>
          );
        })}
      </Box>
    );
  }
}
