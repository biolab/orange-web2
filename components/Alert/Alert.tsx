import {
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import React from "react";
import styled from "styled-components";

export enum AlertType {
  SUCCESS = "success",
  ERROR = "error",
}

const Alert = ({
  show,
  type,
  text,
}: {
  show: boolean;
  type: AlertType;
  text: string;
}) => {
  if (!show) {
    return null;
  }
  return (
    <StNotice $type={type}>
      {type === "success" ? (
        <AiOutlineInfoCircle />
      ) : (
        <AiOutlineExclamationCircle />
      )}
      {text}
    </StNotice>
  );
};

const StNotice = styled.p<{ $type?: AlertType }>`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  color: ${(props) =>
    props.$type === AlertType.ERROR ? "#e91e62" : "#4BB543"};
  background-color: ${(props) =>
    props.$type === AlertType.ERROR ? "#e91e6211" : "#4bb54310"};
`;
export default Alert;
