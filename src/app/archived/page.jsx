'use client'

import { useEffect, useState } from 'react';
import NavMaster from "@/components/shared/NavMaster/NavMaster";
import NoteCard from '@/components/Notes/NoteCard/NoteCard';
import {fetchNotes} from '../../config/api/notes/api'

export default function ArchivedNotes() {
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    fetchNotes()
      .then((data) => {
        const archivedNotes = data.filter((note) => note.archived);
        setArchivedNotes(archivedNotes);
      })
      .catch((error) => console.error('Error fetching archived notes:', error));
  }, []);

  return (
    <>
      <NavMaster />
      <div className="archived-notes">
        {archivedNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}
