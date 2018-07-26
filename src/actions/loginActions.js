import api from "../api";



export const userLoggedin = user => ({
    type: "USER_LOGIN",
    user
})


const loginActions =cred => dispatch => api.user.login(cred).then(user =>{ dispatch(userLoggedin(user))})




// (state,actions) => {

    

//     switch(actions.type) {
//         case '' : state = {
//                       ...this.state
//         }
//         break;
//     }

//     return state;
// }

export default loginActions;