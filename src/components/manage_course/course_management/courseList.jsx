import CourseCard from '../../cards/CourseCard'
import Filter from '../filter_courses/filter'

const totalCourse = [
  {
    id: 1,
    src: '/assets/coursesImages/image1.svg',
    title: 'Web Wizardry: Mastering Frontend Development',
  },
  {
    id: 2,
    src: '/assets/coursesImages/image2.svg',
    title: 'Software Development with Javascript and libaries',
  },
  {
    id: 3,
    src: '/assets/coursesImages/image3.svg',
    title: 'Full Stack Developer: From Frontend to Backend',
  },
  {
    id: 4,
    src: '/assets/coursesImages/image4.svg',
    title: 'Backend Builder: Architecting Scalable APIs',
  },
  {
    id: 5,
    src: '/assets/coursesImages/image5.svg',
    title: 'Mobile App Development with React Native',
  },
]
function CourseList() {
  return (
    <div className="h-[464px] w-full bg-white px-4 py-3">
      <Filter />
      <div className="mt-7 grid grid-cols-4 gap-[29px]">
        {totalCourse.map(item => (
          <CourseCard key={item.id} e={item} />
        ))}
      </div>
    </div>
  )
}

export default CourseList
