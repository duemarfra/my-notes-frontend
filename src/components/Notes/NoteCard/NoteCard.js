'use client'

import { BsPencil, BsTrash, BsArchive, BsArchiveFill } from 'react-icons/bs';

import { toggleArchiveNote } from '../../../config/api/notes/api'

const NoteCard = ({ note, onEdit, onDelete, onArchiveToggle }) => {

    const handleArchiveToggle = () => {
        toggleArchiveNote(note.id, !note.archived)
            .then(() => {
                onArchiveToggle(note.id, !note.archived);
            })
            .catch((error) => console.error('Error toggling archive:', error));
    };

    return (
        <div className={`note-card ${note.archived ? 'archived' : ''}`}>
            <p>{note.body}</p>
            <div className="note-actions">
                <button className="action-btn" onClick={() => onEdit(note)}>
                    <BsPencil />
                </button>
                <button className="action-btn" onClick={() => onDelete(note.id)}>
                    <BsTrash />
                </button>
                <button className="action-btn" onClick={handleArchiveToggle}>
                    {note.archived ? <BsArchiveFill /> : <BsArchive />}
                </button>
            </div>
        </div>
    );
};

export default NoteCard;
