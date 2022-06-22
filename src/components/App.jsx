import { AppBar } from './AppBar';
import { VideoInfo } from './VideoInfo';
import { VideoPlayer } from './VideoPlayer';

export const App = () => {
  return (
    <div>
      <AppBar />
      <VideoPlayer url="https://youtu.be/Pj-h6MEgE7I" />
      <VideoInfo
        title="You Are Not Where You Think You Are"
        views="5,709,844"
        uploadDate="May 17, 2022"
      />
    </div>
  );
};
