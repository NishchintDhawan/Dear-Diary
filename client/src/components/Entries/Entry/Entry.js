import React from 'react';
import useStyles from './styles';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteEntry, likeEntry } from '../../../actions/entries';

const Entry= ({entry, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
       <Card className={classes.card}>
           <CardMedia className={classes.media} image={entry.selectedFile} title={entry.title}/>
               <div className={classes.overlay}>
                   <Typography variant={"h6"}>{entry.creator}</Typography>
                   <Typography variant={"body2"}>{moment(entry.createdAt).fromNow()}</Typography>
               </div>
               <div className={classes.overlay2}>
                   <Button style={{color: 'white'}} size="small" onClick={()=>setCurrentId(entry._id)}>
                       <EditIcon fontSize="default"/> 
                   </Button>
               </div>
               <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{entry.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">{entry.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{entry.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                   <Button size="small" color="primary" onClick={()=>{dispatch(deleteEntry(entry._id))}}>
                    <DeleteIcon fontSize="small" />
                    &nbsp; Delete 
                   </Button>
               </CardActions>
       </Card>
    );
}

export default Entry;
