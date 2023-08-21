import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    margin: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 15px 20px;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
`;

export const SIcon = css`
    margin-right: 20px;
    & * {
        color: #dbdbdb;
    }
`;

export const SName = css`
    font-weight: 600;
    & * {
        color: #dbdbdb;
    }
`;