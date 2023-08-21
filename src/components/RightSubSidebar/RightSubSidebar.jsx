import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { useRecoilState } from 'recoil';
import { isRightSubSidebarSate } from '../../store/sidebarStore';




function RightSubSidebar({ children }) {
    const [rightSubSidebar, setRightSubSidebar] = useRecoilState(isRightSubSidebarSate);
    
    return (
        <div css={S.SLayout(rightSubSidebar)}>
            {children}
        </div>
    );
}

export default RightSubSidebar;
