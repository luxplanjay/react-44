import ReactPlayer from 'react-player/youtube';

export const VideoPlayer = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} controls />
    </div>
  );
};
