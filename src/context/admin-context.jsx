import {
  adminAddQuizzes,
  adminChangePassword,
  adminDashboard,
  adminGetQuizzes,
  adminStudents,
} from '@/api/adminApiService'
import { toast } from '@/hooks/use-toast'
import { createContext, useContext, useReducer, useState } from 'react'

// Initial state
const initialState = {
  quize_category: null,
  quize_title: '',
  quize_description: '',
  quize_time_limit: '',
  quize_passingCriteria:null,
  quize_questions:[],
}

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'QUIZE_CATEGORY':
      return { ...state, quize_category: action.payload }
    case 'QUIZE_TITLE':
      return { ...state, quize_title: action.payload }
    case 'QUIZE_DESCRIPTION':
      return { ...state, quize_description: action.payload }
    case 'QUIZE_TIME_LIMIT':
      return { ...state, quize_time_limit: action.payload }
          case 'QUIZE_PASSING_CRITERIA':
      return { ...state, quize_passingCriteria: action.payload }
           case 'QUIZE_QUESTION':
      return { ...state, quize_questions: action.payload }
    default:
      return state
  }
}

const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state)

  const [dashboard, setDashboard] = useState(null)
  const [students, setStudents] = useState([])
  const [quizzes, setQuizzes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const loadDashboard = async (force = false) => {
    if (dashboard && !force) return //
    setLoading(true)
    try {
      const data = await adminDashboard()
      setDashboard(data.data)
    } catch (err) {
      if (!window.navigator.onLine) {
        setError(true)
      } else {
        setError(true)
      }
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const loadStudents = async () => {
    try {
      const data = await adminStudents()
      setStudents(data)
    } catch (error) {
      console.log(error)
    }
  }
  // change password

  const updatePassword = async data => {
    try {
      await adminChangePassword(data)
      toast({
        variant: 'destructive',
        title: 'Password updated successfully.',
        description: 'Password updated successfully.',
      })
    } catch (error) {
      return toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'password change failed, please try again.',
      })
    }
  }

  // get all quizzes

  const loadQuizzes = async () => {
    try {
      const data = await adminGetQuizzes()
      setQuizzes(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  // add quizzes

  const addQuizzes = async dataObj => {
    try {
      const data = await adminAddQuizzes(dataObj)
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AdminContext.Provider
      value={{
        dashboard,
        loadDashboard,
        loading,
        error,
        loadStudents,
        students,
        updatePassword,
        quizzes,
        addQuizzes,
        loadQuizzes,
        state,
        dispatch,
        // signUpAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) throw new Error('useAdmin must be used inside AuthProvider')
  return context
}
