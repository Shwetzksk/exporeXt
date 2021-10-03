import React,{ useContext, createContext,useState } from "react";

const StorageProvider = createContext();
export const useStore = function () {
    return useContext(StorageProvider);
}

function Storage(props) {
    const [createPopup, setCreatePopup] = useState({file:false,folder:false});
    
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
    const value = {
        popups: {
            create: {
                ...createPopup,
                createFolder,
                createFile,
                doneCreating: closeCreatePopup,
                close:closeCreatePopup
            },         
        },
        folder: {
            name: 'Instrument',
            type: 'folder',
            docs: [{name:'Fender', type:'folder',docs:[],parent:'Instrument',}],
            parent:null
        }
        
    };
    return (
        <StorageProvider.Provider value={value}>
            {props.children}
        </StorageProvider.Provider>
    )
}

export default Storage;
