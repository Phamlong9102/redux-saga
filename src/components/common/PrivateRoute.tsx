import { Navigate, RouteProps, Route } from 'react-router-dom';

export function PrivateRoute (props: RouteProps) { 
    const isLoggedIn = Boolean(localStorage.getItem('access_token'))
    if (!isLoggedIn) return <Navigate to="/login" replace />
    return <Route {...props}/>
}