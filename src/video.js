import React, { useRef, useEffect, useImperativeHandle } from "react";

export const Video = ({ playerRef, events }) => {
  const videoRef = useRef();

  useEffect(() => {
    const eventNames = Object.keys(events);
    const callbacks = eventNames.reduce((acc, name) => {
      acc[name] = event => events[name](event.target);
      return acc;
    }, {});

    eventNames.map(name =>
      videoRef.current.addEventListener(name, callbacks[name])
    );

    return () => {
      eventNames.map(name =>
        videoRef.current.removeEventListener(name, callbacks[name])
      );
    };
  }, []);

  useImperativeHandle(playerRef, () => ({
    play: async () => videoRef.current.play(),
    pause: async () => videoRef.current.pause(),
    setCurrentTime: time => (videoRef.current.currentTime = time)
  }));

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      src="https://www.html5rocks.com/ru/tutorials/video/basics/Chrome_ImF.mp4"
    />
  );
};
