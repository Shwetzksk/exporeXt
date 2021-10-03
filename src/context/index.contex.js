import React,{ useContext, createContext,useState } from "react";

const StorageProvider = createContext();
export const useStore = function () {
    return useContext(StorageProvider);
}

function Storage(props) {
    const [createPopup, setCreatePopup] = useState({ file: false, folder: false });
    const folders = { Instrument: { name: 'Instrument', type: 'folder', docs:[]}};
    const [lock, setLock] = useState(false);
    const [folderBranch, setFolderBranch] = useState([{name:'Instruments',type:'folder',docs:[{name:'Fender',type:'folder',docs:[{name:'Electric Guitar',type:'folder',docs:[]},{name:'Accoustic',type:'folder',docs:[]}]},{name:'White',type:'file',data:''}]}]);
    const [activeFolder, setActiveFolder] = useState({docs:[]});
    const [breadcrumbs,setBreadcrumbs] = useState([]);
    
    function createFolder() {
        console.log('CREATE_FOLDER');
        setCreatePopup({file:false,folder:true})
    }
    function createFile() {
        console.log('CREATE_FILE');
        setCreatePopup({file:true,folder:false})
    }
    function closeCreatePopup() {
        console.log('CLOSED_FOLDER/FILE_CREATE_POPUP');
        setCreatePopup({file:false,folder:false})
    }
    function openLock() {
        setLock(true);
    }
    function closeLock() {
       setLock(false); 
    }
    function addBreadCrumbs(bread) {
        setBreadcrumbs(prevValue=>[...prevValue,bread]);
    }
    function removeBreadCrumbs(bread) {
        setBreadcrumbs(prevValue => {
            prevValue.pop(bread);
            return [...prevValue];
        });
    }

    function addActiveFolder(data) {
        setActiveFolder(data);
    }

    function createNewFolder(data) {
        if (!breadcrumbs.length) {
            folders[data.name]={name:data.name,type:'folder',docs:[]}
            setFolderBranch(prevValue=>[...prevValue,{name:data.name,type:'type',docs:[]}])
        } else {
            if(breadcrumbs)
            setFolderBranch(prevValue=>[...prevValue,{name:data.name,type:'type',docs:[]}])
        }

    }

    function searchFoldername(name) {
        
    }

    const value = {
        popups: {
            create: {
                ...createPopup,
                newFolder:createFolder,
                newFile:createFile,
                doneCreating: closeCreatePopup,
                close:closeCreatePopup
            },
            lock: {
                status: lock,
                openLock,
                closeLock,
            }
        },
        folders,
        folderBranch,
        createNewFolder,
        activeFolder,
        addActiveFolder,
        breadcrumbs,
        addBreadCrumbs,
        removeBreadCrumbs,
        
    };
    return (
        <StorageProvider.Provider value={value}>
            {props.children}
        </StorageProvider.Provider>
    )
}

export default Storage;
