import { Navigate, Route, Routes } from "react-router"
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout showHero>{<HomePage/>}</Layout>}></Route>
            <Route path='/auth-callback' element={<Layout>{<AuthCallbackPage/>}</Layout>}></Route>
            <Route element={<ProtectedRoute/>}>
                <Route path="/user-profile" element={<Layout>{<UserProfilePage/>}</Layout>}></Route>
            </Route>
            <Route path="*" element={<Navigate to='/'></Navigate>}></Route>
        </Routes>
    )
}
export default AppRoutes