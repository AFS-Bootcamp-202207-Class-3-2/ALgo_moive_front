import { Navigate } from 'react-router-dom'
import SearchPage from "../pages/SearchPage";
export default
[
    {
        path: '/',
        element: <SearchPage />
    },
    {
        path: '/',
        element: <Navigate to="/" />
    }
]
