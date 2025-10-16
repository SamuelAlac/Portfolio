import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getAuthenticatedUser, logoutUser } from "./api"
import { useDispatch } from "react-redux"
import { logout } from "./authSlice"

export const useAuthUser = () =>{
    return useQuery({
        queryKey: ['authUser'],
        queryFn: getAuthenticatedUser,
        retry: false,
        staleTime: 0,
    })
}

export const useLogout = () =>{
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const handleLogout = async () =>{
        await logoutUser();
        queryClient.invalidateQueries({ queryKey: ['authUser']});
        dispatch(logout())
    }
    return handleLogout;
}