import { useState } from 'react';
import { useNotes } from '../_context/NotesContext';
import { splitContent } from '../_lib/formatNote';

export default function useAudioNote() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [timer, setTimer] = useState(60);
  const { getNotes } = useNotes();

  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.continuous = true;
  recognition.interimResults = true;

  function startRecording() {
    recognition.start();
    setIsRecording(true);
    setStartTime(Date.now());
    setTimer(60);

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          stopRecording();
          clearInterval(countdown);
        }
        return prev - 1;
      });
    }, 1000);
  }

  function stopRecording() {
    recognition.stop();
    setIsRecording(false);

    const endTime = Date.now();
    const duration = Math.floor((endTime - startTime) / 1000);

    if (transcript.trim()) {
      saveAudioNote(transcript, duration);
    }
  }

  recognition.onresult = (event) => {
    let finalTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i];
      finalTranscript += result[0].transcript;
    }
    setTranscript(finalTranscript);
  };

  async function saveAudioNote(note, duration) {
    const { title, content } = splitContent(note);

    const noteData = {
      title,
      content,
      noteType: 'audio',
      duration,
    };

    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      });

      if (res.ok) getNotes();
      else throw new Error(`Note not saved!`);
    } catch (error) {
      throw new Error(`Error saving note!`, error);
    }
  }

  return { isRecording, startRecording, stopRecording, saveAudioNote };
}
