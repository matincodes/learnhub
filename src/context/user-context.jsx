import axiosInstance from '@/api/axiosInstance';
import { useUser } from '@/hooks/use-user'; // Assuming this provides { id: userId, ... }
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

// --- Configuration ---
// Endpoints remain the same, but use userId passed to functions
const userEndpoints = {
  profileByid: (id) => `/student/profile/${id}/`,
  updateProfile: (id) => `/student/profile/${id}/`,
};

// --- Context Definition ---
// Create the context with a default value matching the original structure
const UserContext = createContext();

// --- Provider Component ---
export const UserProvider = ({ children }) => {
  // --- State ---
  // Use original state variable names
  const [getUserById, setGetUserById] = useState(null);
  const [loading, setLoading] = useState({
    userProfile: false, // Initialize with false, useEffect will trigger initial load
    updateUserProfile: false,
  });
  const [error, setError] = useState(false); // Original boolean error state

  // --- Hooks ---
  const user = useUser(); // Get user info (id, etc.)
  const userId = user?.id; // Safely access user ID

  // --- API Call Logic (Memoized with useCallback, using original names) ---

  // Function to fetch the user profile (Original Name: getUserProfile)
  const getUserProfile = useCallback(async () => {
    // Only fetch if userId is available
    if (!userId) {
      console.log('User ID not available yet. Skipping profile fetch.');
      // Clear previous data if user ID is lost (e.g., logout)
      // setGetUserById(null);
      return;
    }

    const token = localStorage.getItem('accessToken');
    if (!token) {
        console.error('No access token found.');
        setError(true); // Set original boolean error
        return;
    }

    console.log(`Workspaceing profile for user ID: ${userId}`);
    setLoading(prev => ({ ...prev, userProfile: true })); // Update loading state
    setError(false); // Clear previous errors (reset boolean)

    try {
      const { data } = await axiosInstance.get(
        userEndpoints.profileByid(userId), // Use correct endpoint function
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setGetUserById(data); // Update state using the original setter name
      console.log('Profile fetched successfully:', data);
    } catch (err) {
      console.error('Failed to fetch user profile:', err);
      setError(true); // Set original boolean error on failure
    } finally {
      setLoading(prev => ({ ...prev, userProfile: false })); // Reset loading state
    }
  }, [userId]); // Dependency: re-create only if userId changes

  // Function to update the user profile (Original Name: updateUserProfile)
  const updateUserProfile = useCallback(async (updates) => {
    if (!userId) {
        console.error('Cannot update profile without User ID.');
        setError(true);
        return null;
    }
    const token = localStorage.getItem('accessToken');
     if (!token) {
        console.error('No access token found for update.');
        setError(true);
        return null;
    }

    console.log(`Updating profile for user ID: ${userId}`, updates);
    setLoading(prev => ({ ...prev, updateUserProfile: true })); // Update loading state
    setError(false); // Clear previous errors

    try {
      const { data } = await axiosInstance.patch(
        userEndpoints.updateProfile(userId), // Use correct endpoint function
        updates,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Profile updated successfully:', data);

      // Re-fetch the profile after successful update using the original function name
      await getUserProfile();

      return data; // Return response data
    } catch (err) {
      console.error('Failed to update user profile:', err);
      setError(true); // Set original boolean error on failure
      return null;
    } finally {
      setLoading(prev => ({ ...prev, updateUserProfile: false })); // Reset loading state
    }
    // Add getUserProfile here because it's used inside this callback
  }, [userId, getUserProfile]);

  // --- Effect for Initial Fetch ---
  // Use useEffect to call getUserProfile when the component mounts or userId changes
  useEffect(() => {
    if (userId) {
      getUserProfile(); // Call the fetch function (using original name)
    } else {
      // Handle case where user logs out or ID becomes unavailable
      setGetUserById(null); // Clear data if user logs out
      console.log("User ID not available, clearing profile data.");
    }
    // Include getUserProfile in dependencies because it's defined outside the effect
    // useCallback ensures it's stable unless userId changes.
  }, [userId, getUserProfile]);

  // --- Context Value ---
  // Memoize the context value using original variable names
  const contextValue = useMemo(() => ({
    getUserById,         
    loading,             
    error,               
    getUserProfile,      
    updateUserProfile,   
  }), [getUserById, loading, error, getUserProfile, updateUserProfile]);

  // --- Render Provider ---
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// --- Consumer Hook ---
// Export the consumer hook with the original name: UserProfile
export const UserProfile = () => useContext(UserContext);