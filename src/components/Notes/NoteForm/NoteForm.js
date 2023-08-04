'use client'

import { useState } from 'react';

const NoteForm = ({ onSubmit, onCancel, categories }) => {
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (body.trim() === '' || category.trim() === '') {
            return;
        }
        onSubmit({ body, category_id: parseInt(category) });
        setBody('');
        setCategory('');
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter note..."
            ></textarea>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>
            <div>
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default NoteForm;
