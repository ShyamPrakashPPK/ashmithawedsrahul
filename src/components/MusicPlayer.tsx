'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
    shouldPlay: boolean;
}

export default function MusicPlayer({ shouldPlay }: MusicPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setCurrentTime(audio.currentTime);

            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const updateDuration = () => {
            if (audio.duration && !isNaN(audio.duration)) {
                setDuration(audio.duration);
            }
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('durationchange', updateDuration);
        audio.addEventListener('canplay', updateDuration);

        // Handle cached audio files
        if (audio.readyState >= 1) {
            updateDuration();
        }

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('durationchange', updateDuration);
            audio.removeEventListener('canplay', updateDuration);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (shouldPlay) {
            audio
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => { });
        }
    }, [shouldPlay]);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleProgressClick = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        const audio = audioRef.current;
        if (!audio || !audio.duration) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;

        audio.currentTime = percent * audio.duration;
    };

    const formatTime = (time: number) => {
        if (!time || isNaN(time)) return '0:00';

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center md:justify-end">
            <div
                className="
                    flex items-center gap-4
                    px-4 py-2
                    rounded-3xl
                    bg-white/10
                    backdrop-blur-2xl
                    border border-white/20
                    shadow-2xl
                    max-w-[150px]
                    w-full
                    mx-4
                "
            >
                <button
                    onClick={togglePlay}
                    className="
                        w-6 h-6
                        flex items-center justify-center
                        bg-white
                        text-black
                        rounded-full
                        hover:scale-105
                        active:scale-95
                        transition-all
                    "
                >
                    {isPlaying ? (
                        <Pause size={16} fill="black" />
                    ) : (
                        <Play size={16} fill="black" />
                    )}
                </button>

                <div className="flex-1 pt-2">
                    <div
                        className="relative h-1 bg-white/20 rounded-full cursor-pointer"
                        onClick={handleProgressClick}
                    >
                        <div
                            className="absolute left-0 top-0 h-1 bg-white rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <div className="flex justify-between mt-2 text-xs text-white/70 font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <span>
                            -{formatTime(duration - currentTime)}
                        </span>
                    </div>
                </div>
            </div>

            <audio
                ref={audioRef}
                src="/music/love.mp3"
                preload="metadata"
                loop
            />
        </div>
    );
}