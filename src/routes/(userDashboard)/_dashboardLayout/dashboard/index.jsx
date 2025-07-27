import { createFileRoute } from '@tanstack/react-router';
import Inventory from '@/components/inventory/inventory';
import RecentCourseCard from '@/components/widgets/recent_course_card';
import { ChevronsUp } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { fetchCourses } from '@/lib/apiFunctions';
import NullState from '@/components/nullState/nullState';
import { UserProfile } from '@/context/user-context'; 
// import { Skeleton } from '@/components/ui/skeleton'; 


export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/',
)({
  component: DashboardIndexComponent,
});

function DashboardIndexComponent() {
  // State for recent courses data, loading, and error
  // const [recentCourses, setRecentCourses] = useState([]);
  // const [loadingCourses, setLoadingCourses] = useState(true); 
  // const [errorCourses, setErrorCourses] = useState(null);

  // Get user profile data AND loading state from context
  const { getUserById, loading: loadingProfile } = UserProfile(); // Destructure loading state

  // --- Fetch Recent Courses Effect ---
  // useEffect(() => {
  //   const getCourses = async () => {
  //     setLoadingCourses(true); // Set loading true before fetch
  //     setErrorCourses(null); // Clear previous errors
  //     try {
  //       // Assuming fetchCourses gets *recent* courses based on state name
  //       const coursesData = await fetchCourses();
  //       console.log('Fetched courses:', coursesData);
  //       setRecentCourses(coursesData || []); // Ensure it's always an array
  //     } catch (err) {
  //       console.error('Failed to fetch recent courses:', err);
  //       setErrorCourses(
  //         err.message || 'An error occurred while fetching courses.',
  //       );
  //       setRecentCourses([]); // Set empty array on error
  //     } finally {
  //       setLoadingCourses(false); // Set loading false after fetch attempt
  //     }
  //   };

  //   getCourses();
  // }, []); 

  const recentCourses = getUserById?.ongoing_courses || [];
  // --- Safe Data Calculation ---
  // Calculate total courses safely, defaulting to 0 if context data is loading/null
  const totalCourses =
    (getUserById?.ongoing_courses ?? 0) + (getUserById?.completed_courses ?? 0);

  // Safely format productivity, show loading state from context
  const productivityMetric = loadingProfile
    ? '...' // Or use a Skeleton component
    : `${getUserById?.student_productivity ?? 0}%`; // Default to 0 if null/undefined

  // Helper to Render Recent Courses Section
  const renderRecentCourses = () => {
    {/*if (loadingProfile) {
      // Show skeleton loaders while fetching courses
      return (
        <div className="flex w-full items-start gap-x-5 sm:gap-x-8">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-[150px] w-[250px] rounded-lg" />
          ))}
        </div>
      );
    }*/}


    if (recentCourses.length > 0) {
      return (
        <div className="flex w-full items-start gap-x-5 sm:gap-x-8">
          {recentCourses.map((item) => (
            <RecentCourseCard key={item.id || item.title} {...item} />
          ))}
        </div>
      );
    }

    // Only show NullState if not loading, no error, and no courses
    return (
       <NullState
          image={'/assets/empty.png'}
          mainText="No recent courses yet."
          miniText="Add courses to continue your learning journey."
          button={true}
          handleButtonClick={() => {
            // Navigate to courses page or handle button click
            window.location.href = '/courses'; // Example navigation
          }}
       />
    );
  };


  return (
    <div className="w-full space-y-6 sm:space-y-10">
      {/* Inventory Section */}
      <div className="grid w-full grid-cols-2 gap-4 sm:gap-8 lg:gap-20">
        <Inventory
          title={'Total Courses'}
          // Show loading state from context or calculated value
          metrics={loadingProfile ? '...' : totalCourses}
          image="/assets/courses.png"
        />
        <Inventory
          title={'Productivity'}
          metrics={productivityMetric} // Uses already calculated safe value
          image={'/assets/fi-br-bulb.png'}
          analytics={
             /* Static analytics part remains */
            <div className="flex items-center gap-x-2 text-sm font-semibold sm:text-base">
              <p>0.00</p>
              <img src="/assets/fi-br-chat-arrow-grow.png" alt="" />
            </div>
          }
        />
      </div>

      {/* Recent Courses Section */}
      <div className="grid w-full grid-cols-1 gap-y-4 rounded-lg bg-white p-4 sm:p-6">
        <h2 className="text-base font-[300] sm:text-xl">Recent Courses</h2>
        <div className="w-full">
          <div className="no-scrollbar w-full overflow-x-auto">
            <div className="w-full min-w-max">
              {renderRecentCourses()}
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard & Upcoming Sessions Section */}
      <div className="flex w-full flex-col-reverse items-start gap-6 sm:flex-row">
        {/* Leaderboard Section - Placeholder for future implementation */}
        <div className="grid w-full grid-cols-1 gap-y-4 rounded-lg bg-white p-4 sm:w-[65%] sm:p-6">
          <h2 className="text-base font-semibold sm:text-xl">Leader Board</h2>
          {/* TODO: Implement Leaderboard data fetching, state, loading, error handling */}
          <NullState
            image={'/assets/trophy.png'}
            mainText="Leaderboard Coming Soon!"
            miniText="Check back later for rankings."
          />
          {/* Original header structure for reference when implementing
           <div className="w-full space-y-4">
             <div className="grid w-full grid-cols-6 border-b px-2 text-[9px] font-semibold uppercase text-gray-500 sm:text-[13px]">
                <p>Rank</p> // ... headers ...
             </div>
             // Map over actual leaderboard data here
           </div> */}
        </div>

        {/* Upcoming Sessions Section - Placeholder */}
        <div className="grid w-full grid-cols-1 gap-y-4 rounded-lg bg-white p-4 sm:w-[35%] sm:p-6">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <h2 className="text-base font-semibold sm:text-xl">
              Upcoming Sessions
            </h2>
            <ChevronsUp size={40} color="#7f7f7f" />
          </div>
           {/* TODO: Implement Upcoming Sessions data fetching, state, loading, error handling */}
           <NullState
              image={'/assets/timer.png'}
              mainText="Upcoming Sessions Coming Soon!"
              miniText="Check back later for scheduled events."
           />
           {/* Original mapping structure for reference when implementing
           <div className="mt-4 flex w-full flex-col items-start gap-y-8 sm:gap-y-12">
              // Map over actual session data here
           </div> */}
        </div>
      </div>
    </div>
  );
}