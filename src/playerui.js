import React from "react";

import { secondsToTime } from "./helpers";

export const PlayerUI = ({ state, playerRef }) => {
  return (
    <>
      <div className="timeline">
        <div>{secondsToTime(state.currentTime)}</div>
        <input
          className="range"
          type="range"
          name="timeline"
          min="0"
          max={Math.ceil(state.duration)}
          value={state.currentTime}
          onChange={({ target: { value } }) =>
            playerRef.current.setCurrentTime(value)
          }
        />
        <div>{secondsToTime(state.duration)}</div>
      </div>

      <button
        className="button"
        onClick={() => playerRef.current[state.isPlaying ? "pause" : "play"]()}
      >
        {state.isPlaying ? "pause" : "play"}
      </button>
    </>
  );
};
