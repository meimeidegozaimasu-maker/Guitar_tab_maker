import { useRef } from 'react';

export interface History<T> {
  past: T[];
  present: T;
  future: T[];
}

export const useUndo = <T,>(initial: T) => {
  const history = useRef<History<T>>({
    past: [],
    present: initial,
    future: [],
  });

  const set = (state: T) => {
    history.current = {
      past: [...history.current.past, history.current.present],
      present: state,
      future: [],
    };
  };

  const undo = () => {
    const { past, present, future } = history.current;
    if (!past.length) return present;
    const previous = past[past.length - 1];
    history.current = {
      past: past.slice(0, -1),
      present: previous,
      future: [present, ...future],
    };
    return previous;
  };

  const redo = () => {
    const { past, present, future } = history.current;
    if (!future.length) return present;
    const next = future[0];
    history.current = {
      past: [...past, present],
      present: next,
      future: future.slice(1),
    };
    return next;
  };

  return { state: history.current.present, set, undo, redo };
};
