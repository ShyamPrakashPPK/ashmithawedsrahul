'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import Image from 'next/image';

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // useEffect(() => {
    //     const audio = audioRef.current;
    //     if (!audio) return;

    //     const updateProgress = () => {
    //         if (audio.duration) {
    //             setProgress((audio.currentTime / audio.duration) * 100);
    //             setCurrentTime(audio.currentTime);
    //         }
    //     };

    //     audio.addEventListener('timeupdate', updateProgress);
    //     audio.addEventListener('loadedmetadata', () => {
    //         setDuration(audio.duration);
    //     });

    //     // Try autoplay (many browsers block it)
    //     const playPromise = audio.play();
    //     if (playPromise !== undefined) {
    //         playPromise.catch(() => {
    //             setIsPlaying(false);
    //         });
    //     }

    //     return () => {
    //         audio.removeEventListener('timeupdate', updateProgress);
    //     };
    // }, []);
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
                setCurrentTime(audio.currentTime);
            }
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);

        audio.load();

        const attemptPlay = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (err) {
                console.log("Autoplay blocked");
            }
        };

        attemptPlay();

        const unlockAudio = async () => {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (err) { }
        };

        document.addEventListener("click", unlockAudio, { once: true });
        document.addEventListener("touchstart", unlockAudio, { once: true });
        document.addEventListener("scroll", unlockAudio, { once: true });

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);

            document.removeEventListener("click", unlockAudio);
            document.removeEventListener("touchstart", unlockAudio);
            document.removeEventListener("scroll", unlockAudio);
        };
    }, []);
    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    };

    return (
        <div className="fixed inset-x-0 bottom-4 z-50 flex items-center justify-end  ">
            <div className="flex items-center gap-6 px-5 py-2 rounded-3xl 
                          bg-white/10 backdrop-blur-2xl border border-white/20 
                          shadow-2xl max-w-[200px] w-full mx-4">

                {/* Spinning CD */}
                {/* <div className="relative flex-shrink-0">
                    <div
                        className={`w-20 h-20 rounded-full overflow-hidden border-1 border-white/30 shadow-inner
                                   ${isPlaying ? 'animate-spin' : ''}`}
                        style={{ animationDuration: '8s' }}
                    >
                        <Image
                            src="/images/gallery5.png"
                            width={100}
                            height={100}
                            alt="Album Art"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white/90 rounded-full" />
                    </div>
                </div> */}
                {/* Play/Pause Button */}
                <div className="flex justify-center">
                    <button
                        onClick={togglePlay}
                        className="w-10 h-10 flex items-center justify-center 
                                     bg-white text-black rounded-full 
                                     hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        {isPlaying ?
                            <Pause size={28} fill="black" /> :
                            <Play size={28} fill="black" className="ml-0.5" />
                        }
                    </button>
                </div>
                {/* Controls & Timeline */}
                <div className="flex-1 flex flex-col gap-4">
                   

                    {/* Progress Bar */}
                    <div className="flex flex-col gap-1 text-white pt-3">
                        
                        <div
                            className="relative h-1 bg-white/20 rounded-full cursor-pointer"
                            onClick={handleProgressClick}
                        >
                            <div
                                className="absolute top-0 left-0 h-1 bg-white rounded-full transition-all duration-150"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="flex justify-between text-xs text-white/70 font-mono">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                src="/music/love.mp3"
                loop
                autoPlay
                preload="auto"
            />
        </div>
    );
}