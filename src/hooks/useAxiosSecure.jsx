import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = ()=>{
    const {logOut} = useAuth()
    axiosSecure.interceptors.request.use(
        function(config){
            const token = localStorage.getItem('access-token')
            config.headers.authorization = `Bearer ${token}`
            return config
        },
        function(error){
            return Promise.reject(error)
        }
    )
    axiosSecure.interceptors.response.use(
        function(response){
            return response
        },
        function(error){
            const status = error?.response?.status
            console.log(status)
            if(status===401||status===403){
                logOut()
                .then(res=>console.log(res.user))
            }
            return Promise.reject(error)
        }
    )
    return axiosSecure

}
export default useAxiosSecure