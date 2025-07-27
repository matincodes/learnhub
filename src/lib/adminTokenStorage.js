const USER_KEY = 'learnhub-user'
const ADMIN_ACCESS_KEY = 'accessToken'
const REFRESH_KEY = 'refreshToken'

export const saveAdminAuthData = tokens => {
  console.log(tokens)
  localStorage.setItem(ADMIN_ACCESS_KEY, tokens.access)
  localStorage.setItem(REFRESH_KEY, tokens.refresh)
}

export const getAdminAuthData = () => ({
  user: JSON.parse(localStorage.getItem(USER_KEY)),
  accessToken: localStorage.getItem(ADMIN_ACCESS_KEY),
  refreshToken: localStorage.getItem(REFRESH_KEY),
})

export const clearAdminAuthData = () => {
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(ADMIN_ACCESS_KEY)
  localStorage.removeItem(REFRESH_KEY)
}
