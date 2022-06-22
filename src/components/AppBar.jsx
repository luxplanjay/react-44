import { Logo } from './Logo';
import { SearchBox } from './SeearchBox';
import { UserMenu } from './UserMenu';

const user = {
  isPremium: true,
  avatarURL: '',
};

export const AppBar = () => {
  return (
    <header>
      <Logo text={user.isPremium ? 'Premium' : 'YouTube'} />
      <SearchBox />
      <UserMenu avatar={user.avatarURL} />
    </header>
  );
};
