import axios from 'axios';
const API_URL = 'http://localhost:5000/api/events';

export const getEvents = () => axios.get(API_URL);
export const createEvent = (data) => axios.post(API_URL, data);
export const updateEvent = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteEvent = (id) => axios.delete(`${API_URL}/${id}`);
