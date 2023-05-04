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
    acceptFollow(userId){
        return instance.post(`follow/${userId}`, {})
            .then(response=>response.data);
    },
    acceptUnfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response=>response.data);
    },
    auth() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => response.data);
    },
    getProfile(userId){
    return instance.get(`profile/${userId}`)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
    }
}
export const authAPI={
    me() {
        return instance.get(`auth/me`)
    }
}