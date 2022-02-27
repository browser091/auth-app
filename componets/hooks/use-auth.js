import {useSelector} from "react-redux";

const useAuth=()=>{
    const {username, id}=useSelector(state => state.authUser)
    return{
        isAuth:!!username,
        id,
    }
}