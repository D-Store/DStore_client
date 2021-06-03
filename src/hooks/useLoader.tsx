import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  .modal-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

const useLoader = () => {
  const [loaderOpened, setLoaderOpened] = useState(false);

  const startLoading = () => {
    setLoaderOpened(true);
  };
  const endLoading = () => {
    setLoaderOpened(false);
  };

  const LoaderPortal: React.FC = () => {
    const ref = useRef<Element | null>();
    const [mouted, setMouted] = useState(false);

    useEffect(() => {
      setMouted(true);
      if (document) {
        const dom = document.querySelector("#root-loader");
        ref.current = dom;
      }
    }, []);

    if (ref.current && mouted && loaderOpened) {
      return createPortal(<Container>Loading</Container>, ref.current);
    }
    return null;
  };

  return {
    startLoading,
    endLoading,
    LoaderPortal,
  };
};

export default useLoader;
