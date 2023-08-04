'use client'

import NoteCard from "../NoteCard/NoteCard";

const NoteList = ({ notes, onEdit, onDelete }) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteCard
                    key={note.id}
                    note={note}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default NoteList;
