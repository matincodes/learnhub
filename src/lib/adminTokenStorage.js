const ADMIN_USER_KEY = 'learnhub-admin-user'
const ADMIN_ACCESS_KEY = 'learnhub-admin-access-token'
const ADMIN_REFRESH_KEY = 'learnhub-admin-refresh-token'

export const saveAdminAuthData = tokens => {
  if (!tokens?.access) return
  localStorage.setItem(ADMIN_ACCESS_KEY, tokens.access)
  if (tokens.refresh) {
    localStorage.setItem(ADMIN_REFRESH_KEY, tokens.refresh)
  }
}

export const getAdminAuthData = () => ({
  user: JSON.parse(localStorage.getItem(ADMIN_USER_KEY)),
  accessToken: localStorage.getItem(ADMIN_ACCESS_KEY),
  refreshToken: localStorage.getItem(ADMIN_REFRESH_KEY),
})

export const clearAdminAuthData = () => {
  localStorage.removeItem(ADMIN_USER_KEY)
  localStorage.removeItem(ADMIN_ACCESS_KEY)
  localStorage.removeItem(ADMIN_REFRESH_KEY)
}
