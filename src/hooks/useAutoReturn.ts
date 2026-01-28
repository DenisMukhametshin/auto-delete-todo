import { useRef } from "react";

type useAutoReturnProps = {
  timerCallback: (id: string) => void;
  timeDelay: number;
};

export const useAutoReturn = ({
  timerCallback,
  timeDelay,
}: useAutoReturnProps) => {
  const timers = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  const addTimer = (id: string) => {
    const timer = setTimeout(() => {
      timerCallback(id);
      timers.current.delete(id);
    }, timeDelay);
    timers.current.set(id, timer);
  };

  const removeTimer = (id: string) => {
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  };

  return {
    addTimer,
    removeTimer,
  };
};
