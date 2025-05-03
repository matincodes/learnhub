import BottomNav from '@/components/bottomNav/bottomNav';
import Error from '@/components/error/Error'; 
import SideNav from '@/components/sideNav/sideNav';
import Spinner from '@/components/spinner/Spinner'; 
import TopNav from '@/components/topNav/topNav';
import { UserProfile } from '@/context/user-context';
import { cn } from '@/lib/utils';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/(userDashboard)/_dashboardLayout')({
  component: DashboardComponent,
  beforeLoad: ({ context, location }) => {
    // This authentication check is crucial and correctly implemented
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          // Pass the original intended path to redirect back after login
          redirect: location.href,
        },
      });
    }
    // No return needed if user is authenticated, proceeds to load component
  },
});

function DashboardComponent() {
  // Destructure loading states and error state from context
  const { error, loading } = UserProfile();

  // Determine if the main profile data is loading
  const isProfileLoading = loading.userProfile;

  // NOTE: The 'error' state currently triggers on EITHER profile fetch OR update failure.
  // Consider refining context/error handling if you need different UI for fetch vs update errors.

  return (
    <div className="relative h-full w-full bg-gray-100 font-montserrat text-[13px] sm:text-[15px]">
      {/* Show full-screen spinner ONLY during initial profile load */}
      {isProfileLoading && (
        <div className="flex h-screen w-full items-center justify-center">
          <Spinner />
        </div>
      )}

      {/* Show full-screen error if ANY context error occurred (fetch or update) */}
      {/* Consider making this more granular if needed */}
      {!isProfileLoading && error && <Error />}

      {/* Render the main layout ONLY if profile is NOT loading and there's NO error */}
      {!isProfileLoading && !error && (
        <>
          <TopNav />
          <div
            // Using cn is fine, useful if you add conditional classes later
            className={cn(
              'relative h-full overflow-scroll bg-gray-100 px-2 pb-14 max-lg:mb-24 sm:px-4 lg:float-right lg:h-fit lg:w-[calc(100%-280px)] lg:px-10 lg:pt-28',
            )}
          >
            {/* Child route components render here */}
            <Outlet />
          </div>
          <SideNav />
          <BottomNav />
        </>
      )}
    </div>
  );
}