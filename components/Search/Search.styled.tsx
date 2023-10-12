import styled, { keyframes } from "styled-components";

const scaleIn = keyframes`
  0% {
      transform: scale(.97) translateX(-50%);
      opacity: 0;
  }
  20% {
      transform: scale(.97) translateX(-50%);
      opacity: 0;
  }
  100% {
      transform: scale(1) translateX(-50%);
      opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;

export const ItemType = styled.div<{ $type: string }>`
  margin-left: auto;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 4px;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;

  background: ${(props) => {
    switch (props.$type) {
      case "widget":
        return props.theme.violet;
      case "blog":
        return props.theme.orange;
      default:
        return "gray";
    }
  }};
`;

export const StInputWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px 16px;

  input {
    height: 28px;
    font-size: 18px;
    border: none;
    outline: none;
    padding: 0;
    flex: 1 1;
    background: transparent;
    width: 100%;
  }
`;

export const StListWrapper = styled.div`
  padding: 8px;
  max-height: 456px;
  overflow-y: auto;
  transition: height 0.1s ease;
`;

export const Wrapper = styled.div`
  padding: 100px 38px;
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;

  [cmdk-root] {
    width: 100%;
    max-width: 640px;
    transition: height 0.1s ease;
    position: fixed;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.02),
      0px 8px 16px -4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transform-origin: left;
    animation: ${scaleIn} 0.4s ease;

    transition: transform 0.1s ease;
    outline: none;
    z-index: 100;
  }

  [cmdk-item] {
    min-height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    font-size: 14px;
    /* font-weight: bold; */
    cursor: pointer;
    gap: 12px;
    scroll-margin: 8px 0;
    justify-content: space-between;

    &[data-selected="true"] {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;
