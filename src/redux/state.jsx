let store = {
    _state: {
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
},
_callSubscriber(){
    console.log('State changed');
},
getState(){
    return this._state
},
rerenderEntireTree() {
    console.log('state is changed');
},
addPost(){
    let newPost = {
        id: 5, 
        message: this._state.profilePage.newPostText,
        likesCount: 0
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state); 
},
updateNewPostText(newText){
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state); 
},
subscribe(observer){
    this._callSubscriber = observer;
}

}
export default store;
window.store = store;