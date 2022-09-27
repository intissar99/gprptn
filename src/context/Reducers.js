const Reducers = (state, action) => {
  switch (action.type) {
    case "LoginStart":
      return {
        user: null,
        isFetching: true,
        error: false,
      }
    case "LoginSuccess":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      }
    case "LoginFailure":
      return {
        user: null,
        isFetching: false,
        error: true,
      }
    case "LoginOut":
      return {
        user: null,
        isFetching: false,
        error: false,
      }
    case "LoginStartAdmin":
      return {
        admin: null,
        isFetching: true,
        error: false,
      }
    case "LoginSuccessAdmin":
      return {
        admin: action.payload,
        isFetching: false,
        error: false,
      }
    case "LoginFailureAdmin":
      return {
        admin: null,
        isFetching: false,
        error: true,
      }
    case "LogOutAdmin":
      return {
        admin: null,
        isFetching: false,
        error: false,
      }
    case "UpdateStart":
      return {
        user: state.user,
        isFetching: true,
        error: false,
      }
    case "UpdateSuccess":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      }
    case "UpdateFailure":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      }
    case "addUsers":
      return {
        users: action.payload,
        isFetching: false,
        error: false,
      }
    case "addProducts":
      return {
        products: action.payload,
        isFetching: false,
        error: false,
      }
    case "addReclamations":
      return {
        reclamations: action.payload,
        isFetching: false,
        error: false,
      }
    default: return state

  }

}
export default Reducers