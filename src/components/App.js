import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { authOperations } from '../redux/auth';
import { useAuth } from 'hooks';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const TodosView = lazy(() => import('../views/TodosView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={<HomeView />} />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              restricted
              redirectTo="/todos"
              component={<RegisterView />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectTo="/todos"
              component={<LoginView />}
            />
          }
        />
        <Route
          path="/todos"
          element={
            <PrivateRoute redirectTo="/login" component={<TodosView />} />
          }
        />
      </Route>
    </Routes>
  );
};
