import axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3ecbcbae-843e-40f9-a3b9-9a5d5fdae2a8"
    }
});

export const usersAPI={
    getUsers(currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data);
    },
    acceptFollow(userId:number){
        return instance.post(`follow/${userId}`, {})
            .then(response=>response.data);
    },
    acceptUnfollow(userId:number){
        return instance.delete(`follow/${userId}`)
            .then(response=>response.data);
    },

    getProfile(userId:number){
        console.warn("Absolute method. Please profileAPI object")
        return profileAPI.getProfile(userId);

    }
}
export const profileAPI={

    getProfile(userId:number){
        return instance.get(`profile/${userId}`)

    },
    getStatus(userId:number){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`, {status: status})
    }
}
export const authAPI={
    me() {
        return instance.get(`auth/me`)
    }
}