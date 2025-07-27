import axios from 'axios'
// import { useState } from 'react';

const API_URL = 'https://learnhub-backend.up.railway.app'
let coursesError


const fetchCourses = async () => {
  try {
    const received = await axios.get(`${API_URL}/courses/`);
    return received.data; 
  } catch (error) {
    console.error('Error fetching courses:', error);
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