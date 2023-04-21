import { rerenderEntireTree } from "../render";

let state = {
    profilePage:{
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It is my first post', likesCount: 11 },
        ]
    },
    dialogsPage:{
    messages:[
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hi' }
    ],
    dialogs:[
        { id: 1, name: 'Artem' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' }
    ]
    },
    sidebar:{}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5, 
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state); 
}



export default state;