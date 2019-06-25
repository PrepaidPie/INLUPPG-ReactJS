import actions from '../actions/types'
import initialState from '../store'

const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                currentUser: action.currentUser,
                statusMessage: "Inloggning lyckades",
                errorMessage: null
            }

        case actions.LOGIN_FAILED:
            return {
                ...state,
                token: null,
                currentUser: null,
                statusMessage: "Inloggning misslyckades",
                errorMessage: action.errorMessage
            }

            case actions.REGISTER_SUCCESS:
            return {
                ...state,
                token: action.token,
                currentUser: action.currentUser,
                statusMessage: "Registrering lyckades",
                errorMessage: null
            }

        case actions.REGISTER_FAILED:
            return {
                ...state,
                token: null,
                currentUser: null,
                statusMessage: "Registrering misslyckades",
                errorMessage: action.errorMessage
            }

        case actions.LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                currentUser: null,
                statusMessage: "Du är nu utloggad",
                errorMessage: null
            }

        case actions.LOGOUT_FAILED:
            return {
                ...state,
                statusMessage: "Utloggning misslyckades",
                errorMessage: action.errorMessage
            }
    
        default:
            return state
    }
}

export default authReducer