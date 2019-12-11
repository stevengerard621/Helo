const initialState = {
    username: '',
    //need id//
    profile_pic: ''
}

const USERNAME = 'USERNAME'

export function username(userObj){
    return{
        type: USERNAME,
        payload: userObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case USERNAME:
            return {...state, username: payload}
        default:
            return state;
    }
}

