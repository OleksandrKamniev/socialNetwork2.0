import {authAPI} from "../api/api";


const SET_USER_DATA="SET_USER_DATA";
export type InitialStateType={
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState:InitialStateType={
    userId:null,
    email:null,
    login:null,
    isAuth: false
}
const authReducer=(state=initialState, action:any):InitialStateType=>{
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
                }
        }

        default:
            return state;
    }
}

export const SetAuthUserDataAC=(userId:number, email:string, login:string)=>({type: SET_USER_DATA, data:{userId, email, login}});
export const getAuthUserData=()=>(dispatch:any)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email}= response.data.data;
                dispatch(SetAuthUserDataAC(id, email, login))
            }
        });
}

export default authReducer;