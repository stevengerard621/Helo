const initialState = {
    username: '',
    id: 0,
    profile_pic: ''
}

const GETUSER = 'GETUSER'

export function getUser(userObj){
    return{
        type: GETUSER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action){
    // const {type, payload} = action;
    switch(action.type){
        case GETUSER:
            const {username, id, profile_pic} = action.payload
            return {...state, username, id, profile_pic}
        default:
            return state;
    }
}

