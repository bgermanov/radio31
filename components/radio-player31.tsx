"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Radio,
  Disc3,
  Music,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface NowPlayingData {
  station: {
    name: string;
    listen_url: string;
  };
  live: {
    is_live: boolean;
    streamer_name: string;
  };
  now_playing: {
    song: {
      title: string;
      artist: string;
      album: string;
      art: string;
    };
    elapsed: number;
    duration: number;
  };
  listeners: {
    current: number;
  };
}

const STREAM_URL = "https://radio.bgermanov.eu/listen/radio_31/radio.mp3";
const API_URL = "https://radio.bgermanov.eu/api/nowplaying/1";

export function RadioPlayer31() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fetchNowPlaying = useCallback(async () => {
    try {
      const response = await fetch(API_URL, {
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Failed to fetch");
      const data: NowPlayingData = await response.json();
      setNowPlaying(data);
      setIsOnline(true);
      setError(null);
    } catch {
      setIsOnline(false);
      setError("Unable to connect to station");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 5000);
    return () => clearInterval(interval);
  }, [fetchNowPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Playback error:", err);
        setError("Unable to play stream");
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (value[0] > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const songTitle = nowPlaying?.now_playing?.song?.title || "Unknown Track";
  const artistName = nowPlaying?.now_playing?.song?.artist || "Unknown Artist";
  const albumArt = nowPlaying?.now_playing?.song?.art;
  const listeners = nowPlaying?.listeners?.current || 0;

  return (
    <div
      id="player"
      className="flex min-h-screen flex-col items-center justify-center px-4 pt-20"
    >
      <audio ref={audioRef} src={STREAM_URL} preload="none" />

      {/* Status indicator */}
      <div className="mb-8 flex items-center gap-2">
        <span
          className={cn(
            "relative flex h-3 w-3",
            isOnline ? "text-primary" : "text-destructive",
          )}
        >
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              isOnline ? "bg-primary" : "bg-destructive",
            )}
          ></span>
          <span
            className={cn(
              "relative inline-flex h-3 w-3 rounded-full",
              isOnline ? "bg-primary" : "bg-destructive",
            )}
          ></span>
        </span>
        <span
          className={cn(
            "text-sm font-semibold uppercase tracking-widest",
            isOnline ? "text-primary" : "text-destructive",
          )}
        >
          {isOnline ? "Live" : "Offline"}
        </span>
        {isOnline && (
          <span className="ml-2 text-sm text-muted-foreground">
            {listeners} {listeners === 1 ? "listener" : "listeners"}
          </span>
        )}
      </div>

      {/* Album Art / Visual */}
      <div className="relative mb-8">
        <div
          className={cn(
            "relative h-64 w-64 overflow-hidden rounded-2xl border border-border bg-secondary shadow-2xl shadow-primary/20 sm:h-80 sm:w-80",
            isPlaying && "animate-pulse",
          )}
        >
          {albumArt ? (
            <img
              src={albumArt}
              alt={`${songTitle} album art`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary">
              <Disc3
                className={cn(
                  "h-24 w-24 text-muted-foreground",
                  isPlaying && "animate-spin",
                )}
                style={{ animationDuration: "3s" }}
              />
            </div>
          )}
        </div>

        {/* Glow effect */}
        <div
          className={cn(
            "absolute inset-0 -z-10 rounded-2xl bg-primary/30 blur-3xl transition-opacity duration-500",
            isPlaying ? "opacity-60" : "opacity-0",
          )}
        />
      </div>

      {/* Now Playing Info */}
      <div className="mb-8 text-center">
        {isLoading ? (
          <div className="space-y-2">
            <div className="mx-auto h-7 w-48 animate-pulse rounded bg-secondary" />
            <div className="mx-auto h-5 w-32 animate-pulse rounded bg-secondary" />
          </div>
        ) : error ? (
          <div className="text-muted-foreground">{error}</div>
        ) : (
          <>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
              {songTitle}
            </h1>
            <p className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <Music className="h-4 w-4" />
              {artistName}
            </p>
          </>
        )}
      </div>

      {/* Play Button */}
      <Button
        size="lg"
        onClick={togglePlay}
        disabled={!isOnline}
        className="mb-8 h-20 w-20 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 disabled:opacity-50"
      >
        {isPlaying ? (
          <Pause className="h-8 w-8" />
        ) : (
          <Play className="ml-1 h-8 w-8" />
        )}
      </Button>

      {/* Volume Control */}
      <div className="flex w-full max-w-xs items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="text-muted-foreground hover:text-foreground"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume]}
          max={100}
          step={1}
          onValueChange={handleVolumeChange}
          className="flex-1"
        />
        <span className="w-10 text-right text-sm text-muted-foreground">
          {isMuted ? 0 : volume}%
        </span>
      </div>

      {/* Station Info */}
      <div className="mt-12 flex items-center gap-2 text-muted-foreground">
        <Radio className="h-4 w-4" />
        <span className="text-sm">{nowPlaying?.station?.name || "Radio2"}</span>
      </div>
    </div>
  );
}
