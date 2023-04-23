let rerenderEntireTree = () =>{
    console.log('state is changed');
}

let state = {
    profilePage:{
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It is my first post', likesCount: 11 },
        ],
        newPostText: 'Artem Glebov'
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

export const addPost = () => {
    let newPost = {
        id: 5, 
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state); 
}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state); 
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
}




export default state;