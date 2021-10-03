import React from 'react';
import { useStore } from '../../context/index.contex';
import FolderNamingPopup from './folder-naming-popup.component';
import FileNamingPopup from './file-naming.component';

function Popups() {
    const { popups } = useStore();
    const { folder,file } = popups.create;
    console.log(popups);
    return (
        <>
            {folder && <FolderNamingPopup />}
            {file && <FileNamingPopup/>}  
        </>
    )
}

export default Popups
