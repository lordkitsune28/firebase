import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { types } from "../types/types"

export const registroEmailPasswordNombre = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { diplayName: name })
                dispatch(actionRegister(user.email, user.uid, user.displayName))
                console.log(user);
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const actionRegister = (email, pass1, nombre) => {
    return {
        type: types.register,
        payload: {
            email,
            pass1,
            nombre
        }
    }
}