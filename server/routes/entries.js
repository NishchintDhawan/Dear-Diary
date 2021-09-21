import express from 'express';
import {getEntries, createEntry, updateEntry, deleteEntry, likeEntry} from '../controllers/entries.js';

const router = express.Router();

router.get('/', getEntries);
router.post('/', createEntry);
router.patch('/:id', updateEntry);
router.delete('/:id', deleteEntry);
router.patch('/:id/likeEntry',likeEntry);
export default router;