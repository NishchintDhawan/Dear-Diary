import axios from 'axios';

const url='https://dear-diary-app-a.herokuapp.com/entries';

export const fetchEntries = () => axios.get(url);

export const createEntry = (newEntry) => axios.post(url,newEntry);

export const updateEntry= (id, updatedEntry) => axios.patch(`${url}/${id}`, updatedEntry);

export const deleteEntry = (id) => axios.delete(`${url}/${id}`);

export const likeEntry = (id) => axios.patch(`${url}/${id}/likeEntry`);