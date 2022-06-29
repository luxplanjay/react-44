import VimeoPlayer from 'react-player/vimeo';

export const Player = ({ url }) => {
  return <VimeoPlayer url={url} controls />;
};
