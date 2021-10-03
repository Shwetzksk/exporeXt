import React from 'react';
import { useStore } from '../../context/index.contex';
import FolderNamingPopup from './folder-naming-popup.component';
import FileNamingPopup from './file-naming.component';
import LockPopup from './lock-popup.component';

function Popups() {
    const { popups } = useStore();
    const { folder, file } = popups.create;
    const { status} = popups.lock;
    console.log(popups);
    return (
        <>
            {folder && <FolderNamingPopup />}
            {file && <FileNamingPopup />}
            {status && <LockPopup/>}
        </>
    )
}

export default Popups
