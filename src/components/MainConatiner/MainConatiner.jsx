import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { isSidebarShowState, isRightSubSidebarSate } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';



function MainConatiner({ children }) {
    const [isSidebarShow, setIsSidebarShow] = useRecoilState(isSidebarShowState);
    const [isRightSubSidebar, setIsRightSubSidebar] = useRecoilState(isRightSubSidebarSate);

    useEffect(() => {
        setIsRightSubSidebar(false);
    },[]);

    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            {children}
        </div>
    );
}

export default MainConatiner;