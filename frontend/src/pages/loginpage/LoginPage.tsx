import { loginUser } from "@/features/auth/api";
import { loggedIn, loginFailed, logout } from "@/features/auth/authSlice";
import { GoogleLogin } from "@react-oauth/google"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

const LoginPage = () => {
    const dispatch = useDispatch();
    //const { user, loading, isAuthenticated } = useSelector((state: any) => state.auth)
    
    const handleSuccess = async (cred: any) =>{
        try {
            const { credential } = cred
            const res = await loginUser(credential)
            console.log('Login successful:', res?.data.user)
            dispatch(loggedIn({ user: res?.data.user }))
        } catch (error) {
            console.log(`Something went wrong: ${error}`)
            dispatch(loginFailed())
        }
    }

    const handleLogout = () =>{
        console.log('logging out')
        dispatch(logout())
        console.log()
    }

    const handleError = () =>{
        console.log('Google Login Failed')
    }

  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center">
        <GoogleLogin onSuccess={handleSuccess} onError={handleError}/>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LoginPage