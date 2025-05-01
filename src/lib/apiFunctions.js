import axios from 'axios'
import { useState } from 'react';

const API_URL = 'https://learnhub.up.railway.app'
let coursesError


const fetchCourses = async (token) => {
  try {
    const received = await axios.get(`${API_URL}/courses/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return received.data; // Assuming you want the data from the response
  } catch (error) {
    console.error('Error fetching courses:', error);
    coursesError = error
//     return error
  }
};

const fetchLeaderBoard = async (token) => {
  try {
    const received = await axios.get(`${API_URL}/leaderboard/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return received.data; // Assuming you want the data from the response
  } catch (error) {
    console.error('Error fetching courses:', error);
//     return error
  }
};



export {fetchCourses, fetchLeaderBoard, coursesError}