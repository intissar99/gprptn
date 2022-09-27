//first action 
export const LoginStart = () => ({
    type: "LoginStart"
})
//
export const LoginSuccess = (user) => ({
    type: "LoginSuccess", payload: user

})
//
export const LoginFailure = () => ({
    type: "LoginFailure"

})
export const LogOut = () => ({
    type: "LogOut"

})

//login admin 
export const LoginStartAdmin = () => ({
    type: "LoginStartAdmin"
})
//
export const LoginSuccessAdmin = (admin) => ({
    type: "LoginSuccessAdmin", payload: admin

})
//
export const LoginFailureAdmin = () => ({
    type: "LoginFailureAdmin"

})
export const LogOutAdmin = () => ({
    type: "LogOutAdmin"

})

//Update
export const UpdateStart = () => ({
    type: "UpdateStart"
})
//
export const UpdateSuccess = (user) => ({
    type: "UpdateSuccess", payload: user

})
//
export const UpdateFailure = () => ({
    type: "UpdateFailure"

})
//populate the data
export const addUsers = (users) => ({
    type: "addUsers", payload: users

})
export const addProducts = (products) => ({
    type: "addProducts", payload: products

})
export const addReclamations = (reclamations) => ({
    type: "addReclamations", payload: reclamations

})