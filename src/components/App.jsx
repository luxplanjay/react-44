import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

class Popover extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return <div>Super popover menu</div>;
  }
}

export class App extends Component {
  state = {
    isOpen: false,
    modal: null,
  };

  togglePopover = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <Box as="main" px={4}>
          <Box as="header" mb={4}>
            <button onClick={this.togglePopover}>
              {isOpen ? 'Close' : 'Open'}
            </button>
            {isOpen && <Popover onClose={this.togglePopover} />}
          </Box>

          <button onClick={() => this.setState({ modal: 'edit' })}>
            Open first
          </button>
          <button onClick={() => this.setState({ modal: 'create' })}>
            Open second
          </button>
          <button onClick={() => this.setState({ modal: 'delete' })}>
            Open third
          </button>
          {this.state.modal === 'edit' && <div>First modal</div>}
          {this.state.modal === 'create' && <div>Second modal</div>}
          {this.state.modal === 'delete' && <div>Third modal</div>}
        </Box>
        <GlobalStyle />
      </>
    );
  }
}
