import { css } from "@emotion/react";

export const SLayout = css`
    border-bottom: 1px solid #dbdbdb;
    padding: 20px 5px;
`;

export const STitle = css`
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;

`;

export const SListContainer = css`

`;

export const SListBox = (isSelected) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    ${isSelected && "background-color:#eaeaea;"}
    /* background-color: ${isSelected ? "#eaeaea" : "transparent"}; */
    cursor: pointer;
`;

export const SListName  = (isSelected) => css`
    display: inline-block;
    flex-grow: 1;
    margin-left: 5px;
    font-size: 14px;
    width: 100%;
    ${isSelected && "font-weight:600;"}
`;

export const SCount  = (isSelected) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 900;
    width: 40px;
    height: 20px;
    padding: 0px;
    background-color: ${isSelected ? "#fff" : "#eaeaea"};
`;