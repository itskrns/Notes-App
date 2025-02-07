import useAudioNote from '../_hooks/useAudioNote';
import useRecording from '../_hooks/useAudioNote';

export default function AudioInput() {
  const { isRecording, stopRecording, startRecording } = useAudioNote();
  return (
    <button
      onClick={isRecording ? stopRecording : startRecording}
      className="rounded-full bg-red-500 px-2 py-1 text-xs text-white"
    >
      {isRecording ? 'Stop Recording' : 'Start Recording'}
    </button>
  );
}
