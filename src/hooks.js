import { useReducer, useRef, useEffect } from "react";

const initialState = {
  currentTime: 0,
  duration: 0,
  isPlaying: false
};

const reducer = (state, { type, payload = {} }) => {
  switch (type) {
    case "play": {
      return {
        ...state,
        isPlaying: true
      };
    }

    case "pause": {
      return {
        ...state,
        isPlaying: false
      };
    }

    case "timeupdate": {
      return {
        ...state,
        currentTime: payload.currentTime
      };
    }

    case "durationchange": {
      return {
        ...state,
        duration: payload.duration
      };
    }

    default: {
      return state;
    }
  }
};

export const usePlayerStateReducer = () => {
  return useReducer(reducer, initialState);
};

export const useMutatingState = state => {
  const ref = useRef(state);

  useEffect(
    () => {
      ref.current = state;
    },
    [state]
  );

  return ref;
};
