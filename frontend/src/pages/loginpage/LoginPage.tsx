import { loginUser } from "@/features/auth/api";
import { loggedIn, loginFailed } from "@/features/auth/authSlice";
import { useLogout } from "@/features/auth/hooks";
import { GoogleLogin } from "@react-oauth/google"
import { useState } from "react";
import { useDispatch } from "react-redux"

const LoginPage = () => {
    const dispatch = useDispatch();
    const logout = useLogout();
    const [passcode, setPasscode] = useState('')
    //const { user, loading, isAuthenticated } = useSelector((state: any) => state.auth)
    
    const handleSuccess = async (cred: any) =>{
        try {
            const { credential } = cred
            const res = await loginUser(credential, passcode)
            if(res.success){
                console.log('Login successful:', res?.user)
                dispatch(loggedIn({ user: res?.user }))
            }else{
                alert(res.message);
                console.log('login failed')
                dispatch(loginFailed());
            }
        } catch (error) {
            console.log(`Something went wrong: ${error}`)
            dispatch(loginFailed())
        }
    }

    const handleError = () =>{
        console.log('Google Login Failed')
    }

  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center space-y-4">
        <input className="bg-amber-50 p-1.5 w-45 text-black"
        type="password" placeholder="Enter Passcode" 
        value={passcode} onChange={(e) => setPasscode(e.target.value)}/>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError}/>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default LoginPage