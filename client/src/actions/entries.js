import * as api from '../api';
import {FETCH_ALL,CREATE,DELETE,UPDATE} from '../constants/actionTypes';

//Action Creators
export const getEntries = () => async(dispatch) => {
    try{
        const {data} = await api.fetchEntries();
        dispatch({type: FETCH_ALL, payload: data});
    } catch(error){
        console.log(error.message);
    }
}

export const createEntry = (post) => async(dispatch) => {
    try{
        const { data} = await api.createEntry(post);
        dispatch({type: CREATE, payload: data})

    } catch(error){
        console.log(error.message);
    }
}

export const updateEntry = (id, post) => async(dispatch) => {

    try{
       const {data} = await api.updateEntry(id, post);
       dispatch({type: UPDATE, payload: data});
    }

    catch(error){
        console.log(error.message);
    }
}

export const deleteEntry = (id) => async(dispatch) => {

    try{
        await api.deleteEntry(id);
        dispatch({ type: DELETE, payload: id});
    }

    catch(error){
        console.log(error);
    }
}

export const likeEntry = (id) => async(dispatch) => {
    try{
        const {data} = await api.likeEntry(id);

        dispatch({type: UPDATE, payload: data});
    }

    catch(error){
        console.log(error);
    }
}