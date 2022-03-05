import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { google } from "../../firebase/firebaseConfig";
import {types} from '../types/types'

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(actionLogin(user.uid, user.displayName))
                console.log(user)
                console.log('Bienvenida')
            })
            .catch(e => {
                console.log(e)
            })


    }
}


export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(actionLogin(user.uid, user.displayName)
                )
                alert('inicio sesion de manera satisfactoria')
            })
            .catch(e => {
                alert('usuario incorrecto')
            })
    }
}

export const actionLogin = (id, displayname) => {
  return{
      type: types.login,
      payload: {
          id,
          displayname
      }
  }
}
