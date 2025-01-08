import { v4 as uuidV4 } from 'uuid'

export const quizCourses = [
  { value: 'All Courses', label: 'All Courses' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'Education', label: 'Education' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Science', label: 'Science' },
]

export const firstSectionData = [
  {
    date: 'October 1st',
    title: 'Monthly Quiz',
    topic: 'Covering concepts studied throughout the month',
    image: '/assets/topsection.png',
  },
  {
    date: 'October 29th',
    title: 'BiWeekly Quiz',
    topic: 'Covering concepts studied throughout the month',
    image: '/assets/topsection.png',
  },
]

export const dailyChallenges = [
  {
    id: 1,
    title: 'Test your coding skill',
    image: '/assets/recent1.png',
  },
  {
    id: 2,
    title: 'Strenghten your UI/UX skill',
    image: '/assets/recent2.png',
  },
  {
    id: 3,
    title: 'Test your Algorithm IQ',
    image: '/assets/recent3.png',
  },
  {
    id: 4,
    title: 'Frontend Web Development Quiz',
    image: '/assets/recent4.png',
  },
]

export const sampleQuiz = [
  {
    id: 1,
    question: 'What is the difference between null and undefined in javascript',
    code: null,
    options: [
      { id: uuidV4(), option: 'null is a value, while undefined is a type' },
      {
        id: uuidV4(),
        option: 'null is an object, while undefined is a primitive value',
      },
      {
        id: uuidV4(),
        option:
          'null represents an empty object, while undefined is an uninitialized variable',
      },
      { id: uuidV4(), option: 'Null and undefined are interchangeable terms' },
    ],
  },
  {
    id: 2,
    question: 'What is the primary purpose of javascript in web development',
    code: null,
    options: [
      { id: uuidV4(), option: 'null is a value, while undefined is a type' },
      {
        id: uuidV4(),
        option: 'null is an object, while undefined is a primitive value',
      },
      {
        id: uuidV4(),
        option:
          'null represents an empty object, while undefined is an uninitialized variable',
      },
      { id: uuidV4(), option: 'Null and undefined are interchangeable terms' },
    ],
  },
  {
    id: 3,
    question: 'What will be the ouptut of the followinf code',
   code:"let numbers = [1, 2, 3, 4, 5] ;  let sum = 0;  for (let i = 0;  i < numbers. lenght; i++) {    sum  += numbers[i];         }    console. log(sum) ;",
    options: [
      { id: uuidV4(), option: 'null is a value, while undefined is a type' },
      {
        id: uuidV4(),
        option: 'null is an object, while undefined is a primitive value',
      },
      {
        id: uuidV4(),
        option:
          'null represents an empty object, while undefined is an uninitialized variable',
      },
      { id: uuidV4(), option: 'Null and undefined are interchangeable terms' },
    ],
  },
]
