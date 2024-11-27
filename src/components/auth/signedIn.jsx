import { useRouteContext } from '@tanstack/react-router'

export default function SignedIn({ children }) {
  const isAuthenticated = useRouteContext({ select: s => s.isAuthenticated })
  return <>{isAuthenticated ? children : null}</>
}
