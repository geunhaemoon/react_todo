import { css } from "@emotion/react";

// Layout -> Container -> Box

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const STitile = css`
    font-weight: 600;
    font-size: 18px;
    cursor: default;

`;

export const SToggleBtn = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding:0px;
    background-color:transparent; // 배경 제거 코드
    cursor: pointer;

    font-size: 20px;
    height: 100%;


`;
export const SSearchBox = css`
    width: 90%; 
    padding: 5px 5px 5px 30px;
    margin: 10px 0px;
    border: 1px solid #dbdbdb;
    border-radius: 6px;
    display: flex;
    position: relative;
`;

export const SSearchIcon = css`
    transform: translateY(-50%);
    top: 50%;
    left: 5%;
    position: absolute;
`;

export const SSearchInput = css`
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
`;