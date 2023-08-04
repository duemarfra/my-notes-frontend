'use client'

import { useEffect, useState } from 'react';
import NavMaster from "@/components/shared/NavMaster/NavMaster"

import NoteList from '@/components/Notes/NoteList/NoteList';
import NoteForm from '@/components/Notes/NoteForm/NoteForm';
import FilterOptions from '@/components/Notes/FilterOptions/FilterOptions';
import {fetchNotes, fetchCategories, createNote, updateNote, deleteNote} from '../../config/api/notes/api'

export default function page() {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    fetchNotes()
      .then((data) => {
        setNotes(data);
        setFilteredNotes(data);
      })
      .catch((error) => console.error('Error fetching notes:', error));

    fetchCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleAddNote = () => {
    setShowForm(true);
    setEditingNote(null);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id)
      .then(() => {
        fetchNotes()
          .then((data) => setNotes(data))
          .catch((error) => console.error('Error fetching notes:', error));
      })
      .catch((error) => console.error('Error deleting note:', error));
  };

  const handleFormSubmit = (data) => {
    if (editingNote) {
      updateNote(editingNote.id, data)
        .then(() => {
          fetchNotes()
            .then((data) => {
              setNotes(data);
              setShowForm(false);
            })
            .catch((error) => console.error('Error fetching notes:', error));
        })
        .catch((error) => console.error('Error updating note:', error));
    } else {
      createNote(data)
        .then(() => {
          fetchNotes()
            .then((data) => {
              setNotes(data);
              setShowForm(false);
            })
            .catch((error) => console.error('Error fetching notes:', error));
        })
        .catch((error) => console.error('Error creating note:', error));
    }
  };

  const handleFilter = (categoryId) => {
    if (categoryId !== '') {
        setFilteredNotes(
            notes.filter((note) => note.category_id === parseInt(categoryId))
        );
    } else {
        setFilteredNotes(notes);
    }
  };

  const handleArchiveFilter = (showArchived) => {
    if (showArchived) {
        setFilteredNotes(notes.filter((note) => note.archived));
    } else {
        setFilteredNotes(notes);
    }
  };

  return (
    <div className="app">
      <NavMaster/>
      <h1>Notes App</h1>
      <FilterOptions
        categories={categories}
        onFilter={handleFilter}
        onArchiveFilter={handleArchiveFilter}
      />
      <NoteList
        notes={filteredNotes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
      />
      {showForm && (
        <NoteForm
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
          categories={categories}
        />
      )}
      <button className="add-btn" onClick={handleAddNote}>
        +
      </button>
    </div>
  );
}
