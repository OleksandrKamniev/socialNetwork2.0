import axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "3ecbcbae-843e-40f9-a3b9-9a5d5fdae2a8"
    }
});

export const userAPI={
    getUsers(currentPage=1, pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data);
    },
    follow(userId){
        return instance.post(`follow/${userId}`, {})
            .then(response=>response.data);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response=>response.data);
    },
    auth() {
        return instance.get(`/auth/me`)
            .then(response => response.data);
    }
}