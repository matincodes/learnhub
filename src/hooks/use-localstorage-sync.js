import { useState, useEffect, useCallback } from 'react'

function useLocalStorageSync(key, initialValue) {
  // Helper to read directly from storage
  const readValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }, [key, initialValue])

  const [storedValue, setStoredValue] = useState(readValue)

  const setValue = useCallback(
    value => {
      try {
        // Read current value to avoid stale closure
        const currentValue = readValue()
        const newValue = value instanceof Function ? value(currentValue) : value

        // 1. Save to local storage
        window.localStorage.setItem(key, JSON.stringify(newValue))

        // 2. Update React State (for the component that called this)
        setStoredValue(newValue)

        // 3. Dispatch a CUSTOM event so other components in THIS tab usually know
        // (This fixes the "same tab" silence issue)
        window.dispatchEvent(new Event('local-storage'))
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, readValue],
  )

  useEffect(() => {
    setStoredValue(readValue())

    const handleStorageChange = () => {
      setStoredValue(readValue())
    }

    // Listen for changes from OTHER tabs
    window.addEventListener('storage', handleStorageChange)

    // Listen for the custom event we dispatch for THIS tab
    window.addEventListener('local-storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('local-storage', handleStorageChange)
    }
  }, [readValue])

  return [storedValue, setValue]
}

export default useLocalStorageSync
