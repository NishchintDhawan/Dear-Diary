import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core' ;
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';
import { createEntry, updateEntry } from '../../actions/entries';

//get current id of the page for updating.

const Form = ({currentId, setCurrentId}) => {
    const [entryData,setentryData] = useState({creator: '', title: '', message: '' , tags: '', selectedFile: ''})
    const classes = useStyles();
    const dispatch = useDispatch();
    const entry  = useSelector((state)=> currentId? state.entries.find((p)=> p._id===currentId) : null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updateEntry(currentId, entryData));
        }else{
            dispatch(createEntry(entryData));
        }
        clear();
    }
    
    useEffect(()=>{
        if(entry) setentryData(entry)
    }, [entry])

    const clear = () => {
        setCurrentId(null);
        setentryData({creator: '', title: '', message: '' , tags: '', selectedFile: ''});
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit your' : 'Create an'} Entry</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={entryData.creator} onChange={(e) => setentryData({ ...entryData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={entryData.title} onChange={(e) => setentryData({ ...entryData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="Message" multiline rows={4} fullWidth value={entryData.message} onChange={(e) => setentryData({ ...entryData, message: e.target.value})} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated and no spaces)" fullWidth value={entryData.tags} onChange={(e) => setentryData({ ...entryData, tags: e.target.value.split(',') })} />
                
                 <div className={classes.fileInput}>
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setentryData({...entryData,selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    );
}


export default Form;
