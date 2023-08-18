import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { HiMenu, HiSearch } from "react-icons/hi";
import { useRecoilState } from 'recoil';
import { isSidebarShowState } from "../../../store/sidebarStore";


function Header({ isShow, menuToggleClick }) {
    const [isSidebarShow, setIsSidebarShow] = useRecoilState(isSidebarShowState);

    const handleMenuToggleClick = () => {
        setIsSidebarShow(!isSidebarShow);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <h1 css={S.STitile}>Menu</h1>
                <button css={S.SToggleBtn} onClick={handleMenuToggleClick}><HiMenu/></button>
            </div>
            
            {isShow && (
                <div css={S.SSearchBox}>
                    <HiSearch css={S.SSearchIcon} />
                    <input type="search" css={S.SSearchInput} />
                </div>
            )}
        </div>        

    );
}

export default Header;