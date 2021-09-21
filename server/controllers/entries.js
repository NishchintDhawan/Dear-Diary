import EntryMessage from "../models/entryMessage.js";
import mongoose from 'mongoose';

export const getEntries = async (req, res) => { 
    try {
        const entryMessages = await EntryMessage.find();
                
        res.status(200).json(entryMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createEntry = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newEntryMessage = new EntryMessage({ title, message, selectedFile, creator, tags })

    try {
        await newEntryMessage.save();

        res.status(201).json(newEntryMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEntry = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedEntry = { creator, title, message, tags, selectedFile, _id: id };

    await EntryMessage.findByIdAndUpdate(id, updatedEntry, { new: true });

    res.json(updatedEntry);
}

export const deleteEntry = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await EntryMessage.findByIdAndRemove(id);
    res.json( { message: 'Post Deleted Succesfully' } );
}

export const likeEntry = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const entry = await EntryMessage.findById(id);
    const updatedEntry = await EntryMessage.findByIdAndUpdate(id, {likeCount: entry.likeCount+1} , {new: true});
    res.json(updatedEntry);
}