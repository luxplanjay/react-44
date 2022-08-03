import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // get all
    // setUsers(allUsers)
  }, []);

  addUser = async userInfo => {
    try {
      const user = await api.addUser(userInfo);
      const fullUserInfo = await api.getUser(user.id);
      setUsers(prev => [...prev, fullUserInfo]);
    } catch (error) {
      //
    }
  };

  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

Create CLOSED GitHub project for this test task.
The result should be a link to the working application and your GitHub project.
Open your GitHub project for our mentors:
https://github.com/wallwhite
https://github.com/lequanvn89
https://github.com/Shramkoweb
