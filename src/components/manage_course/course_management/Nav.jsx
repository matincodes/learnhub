import { Link } from '@tanstack/react-router'
import { Button } from '../../ui/button'

function Nav() {
  return (
    <div className="flex h-[79px] w-full items-center justify-between">
      <h1 className="text-3xl font-[600] text-[#303031]">
        Course management
      </h1>
      <Link to="/admin/dashboard/course-management/new-course">
        <Button className="bg-[#F7AE30] px-2">
          <span className="text-white"> Create new Course</span>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5999 4.1333V20.6666"
              stroke="white"
              strokeWidth="1.55"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.33325 12.3999H20.8666"
              stroke="white"
              strokeWidth="1.55"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </Link>
    </div>
  )
}

export default Nav
