import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import MainConatiner from '../../components/MainConatiner/MainConatiner';
import Header from '../../components/MainConatiner/Header/Header';
import AddNewTaskButton from '../../components/Buttons/AddNewTasckButton/AddNewTaskButton';
import TaskList from '../../components/Lists/TaskList/TaskList';
import RightSubSidebar from '../../components/RightSubSidebar/RightSubSidebar';


function Today(props) {
    // let target = null;

    const [target, setTarget] = useState(null);

    return (
        <>
            <MainConatiner>
                <Header title={"Today"} count={5} />
                <AddNewTaskButton target={target} setTarget={setTarget} />
                <TaskList target={target} setTarget={setTarget} />
            </MainConatiner>

            <RightSubSidebar>

            </RightSubSidebar>

        
        </>
    );
}

export default Today;