const USER_KEY = 'learnhub-user'
const ACCESS_KEY = 'accessToken'
const REFRESH_KEY = 'refreshToken'

export const saveAuthData = (user, tokens) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  localStorage.setItem(ACCESS_KEY, tokens.access)
  localStorage.setItem(REFRESH_KEY, tokens.refresh)
}

export const getAuthData = () => ({
  user: JSON.parse(localStorage.getItem(USER_KEY)),
  accessToken: localStorage.getItem(ACCESS_KEY),
  refreshToken: localStorage.getItem(REFRESH_KEY),
})

export const clearAuthData = () => {
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(ACCESS_KEY)
  localStorage.removeItem(REFRESH_KEY)
}
