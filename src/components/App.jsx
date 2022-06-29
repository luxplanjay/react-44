import { Component } from 'react';
import { Box } from './Box';
import { Videos } from './Videos';
import { Player } from './Player';
import videos from '../videos.json';

export class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;

    return (
      <Box as="main" px={4}>
        <Videos
          items={videos}
          onSelect={this.selectVideo}
          selected={selectedVideo}
        />
        {selectedVideo && <Player url={selectedVideo} />}
      </Box>
    );
  }
}
