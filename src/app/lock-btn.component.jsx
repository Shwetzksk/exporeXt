import React from 'react'
import Btn from '../components/button/button.component';
import { useStore } from '../context/index.contex';
function LockBtn() {
    const { popups } = useStore();
    const { openLock } = popups.lock;

    return (
        <Btn onClick={openLock}>Lock</Btn>
    )
}

export default LockBtn
