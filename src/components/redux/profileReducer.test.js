import profileReducer, {addPostAC, deletePostAC} from "./profileReducer";
import React from "react";
let state = {
    postsData: [
        { message: "Wow", likesAmount: "20", id: "1" },
        { message: "How are you?!", likesAmount: "8", id: "2" },
        { message: "What's up?!", likesAmount: "15", id: "3" },
        { message: "I feel good", likesAmount: "31", id: "4" },
        { message: "Don't stop me now", likesAmount: "10", id: "5" },
        { message: "I am throwing the ball", likesAmount: "34", id: "6" },
    ],
};
it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostAC("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(7);

});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostAC("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData[6].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePostAC(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(5);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePostAC(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.postsData.length).toBe(6);
});