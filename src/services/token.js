import api from './api';

const TOKEN_KEY = "@AprovaJa:token"

/** Funções auxiliares para manipular o token ao longo do aplicativo
 */
export const getStoragedToken = () => {
  let token = ''
  try {
    token = localStorage.getItem(TOKEN_KEY)
  }
  catch(err) {
    console.log(err)
  }
  return token
}

export const setStoragedToken = value => localStorage.setItem(TOKEN_KEY, value)

export const storagedTokenIsValid = async () => {
  let response = false
  await api.get('auth/token?token=' + getStoragedToken())
    .then(result => { response = result.data.valid })
    .catch(error => console.log(error))
  return response
}

export const cleanStoragedToken = () => localStorage.removeItem(TOKEN_KEY)