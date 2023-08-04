import { domainUrl } from '../../host';

const BASE_URL = domainUrl

// Función para obtener todas las notas
export const fetchNotes = () => {
    return fetch(`${BASE_URL}/notes`)
        .then((response) => response.json())
        .catch((error) => console.error('Error fetching notes:', error));
};

// Función para obtener todas las categorías
export const fetchCategories = () => {
    return fetch(`${BASE_URL}/categories`)
        .then((response) => response.json())
        .catch((error) => console.error('Error fetching categories:', error));
};

// Función para crear una nueva nota
export const createNote = (data) => {
    return fetch(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).catch((error) => console.error('Error creating note:', error));
};

// Función para actualizar una nota existente
export const updateNote = (id, data) => {
    return fetch(`${BASE_URL}/notes/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).catch((error) => console.error('Error updating note:', error));
};

// Función para archivar o desarchivar una nota
export const toggleArchiveNote = (id, archived) => {
    return fetch(`${BASE_URL}/notes/${id}/toggle_archive`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ archived }),
    }).catch((error) => console.error('Error toggling archive:', error));
};

// Función para eliminar una nota
export const deleteNote = (id) => {
    return fetch(`${BASE_URL}/notes/${id}`, {
        method: 'DELETE',
    }).catch((error) => console.error('Error deleting note:', error));
};
