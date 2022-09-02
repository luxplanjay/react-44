import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 */

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
