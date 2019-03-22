import React, { useRef } from "react";

import { Video } from "./video";
import { PlayerUI } from "./playerui";
import { usePlayerStateReducer, useMutatingState } from "./hooks";

export const Player = ({ externalCounter }) => {
  const playerRef = useRef();
  const [state, dispatch] = usePlayerStateReducer();

  const couterRef = useMutatingState(externalCounter);

  return (
    <>
      <Video
        playerRef={playerRef}
        events={{
          play: () => {
            dispatch({ type: "play" });
          },
          pause: () => {
            dispatch({ type: "pause" });
          },
          timeupdate: ({ currentTime }) => {
            dispatch({ type: "timeupdate", payload: { currentTime } });

            // what if I need to access external state inside event listeners?
            // is useMutatingState the right way?
            // externalCounter is always the same first value
            // while couterRef is updated
            console.log("externalCounter", externalCounter, couterRef.current);
          },
          durationchange: ({ duration }) => {
            dispatch({ type: "durationchange", payload: { duration } });
          },
          ended: () => {
            dispatch({ type: "onend" });
            playerRef.current.setCurrentTime(0);
          }
        }}
      />
      <PlayerUI state={state} playerRef={playerRef} />
    </>
  );
};
