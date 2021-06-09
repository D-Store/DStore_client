import { useState } from "react";

export const usePending = (func: () => Promise<void>) => {
  const [isPending, setIsPending] = useState(false);

  const pendingFunc = async () => {
    setIsPending(true);
    console.log("Hello");
    await func();
    setIsPending(false);
  };

  return { isPending, pendingFunc };
};
