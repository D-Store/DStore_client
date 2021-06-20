import { AxiosResponse } from "axios";
import { useState } from "react";

export const useLoading = (func: (...args: any[]) => void) => {
  const [isLoading, setIsLoading] = useState<boolean>();

  try {
    setIsLoading(true);
    func();
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
  }

  return isLoading;
};
