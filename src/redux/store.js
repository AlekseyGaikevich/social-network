import profileReducer from "./profile-reducer"; 
import dialogsReducer from "./dialogs-reducer"; 
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        
        profilePage: {
            
            posts: [
                { id: 1, message: 'Hi! How are you?', likesCount: 0 },
                { id: 2, message: "It's my first post", likesCount: 23 },
            ],
            newPostText: ''
        },

        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Lesha' },
                { id: 2, name: 'Katya' },
                { id: 3, name: 'Misha' },
                { id: 4, name: 'Zhenya' },
                { id: 5, name: 'Dima' }
            ],

            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'All ok!' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo!' },
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;