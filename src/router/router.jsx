import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '../layout';
import { useSelector } from 'react-redux';
import { Home, Login, Profile } from '../pages';

const AppRouter = () => {
    const token = useSelector(state => state.authReducer.token);

    const routes = [
        {
            path: '/',
            element: token ? <Layout /> : <Navigate to='/login' />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: '/profile',
                    element: <Profile />,
                },
            ],
        },
        {
            path: '/login',
            element: token ? <Navigate to='/' /> : <Login />,
        },
        {
            path: '*',
            element: <Navigate to={token ? '/' : '/login'} />,
        },
    ];

    return createBrowserRouter(routes);
};

export default AppRouter;
