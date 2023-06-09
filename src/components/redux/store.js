import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store={
    _state: {
        profilePage: {
            postsData: [
                {message: "Wow", likesAmount: "20", id: "1"},
                {message: "How are you?!", likesAmount: "8", id: "2"},
                {message: "What's up?!", likesAmount: "15", id: "3"},
                {message: "I feel good", likesAmount: "31", id: "4"},
                {message: "Don't stop me now", likesAmount: "10", id: "5"},
                {message: "I am throwing the ball", likesAmount: "34", id: "6"},
            ],
            newPostText: "Text here smth",
        },
        dialogsPage: {
            authorsMessagesData: [
                {name: "Sveta", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "1"},
                {name: "Vera", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "2"},
                {name: "Nika", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "3"},
                {name: "Veronika", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "4"},
                {name: "Alex", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "5"},
                {name: "King", avatarImageLink: "https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg", id: "6"},
            ],
            messagesContentData: [
                {message: "Wow", id: "1"},
                {message: "Bello", id: "2"},
                {message: "Hola", id: "3"},
                {message: "Hold on", id: "4"},
                {message: "Hi", id: "5"},
                {message: "Hello", id: "6"},
            ],
            newMessageText: "",
        },
        usersPage:{
            usersData:[
                {userName: "Alex", subscribersAmount:"110", id:"1"},
                {userName: "Josh", subscribersAmount:"80", id:"2"},
                {userName: "Boris", subscribersAmount:"60", id:"3"},
                {userName: "Katya", subscribersAmount:"78", id:"4"},
                {userName: "Jana", subscribersAmount:"132", id:"5"},
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        alert("State changed")
    },

    subscribe(observer){
        this._callSubscriber=observer;
    },
    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }
}
window.store=store;


export default store;