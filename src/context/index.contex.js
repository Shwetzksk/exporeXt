import React,{ useContext, createContext,useState } from "react";

const StorageProvider = createContext();
export const useStore = function () {
    return useContext(StorageProvider);
}

function Storage(props) {
    const [createPopup, setCreatePopup] = useState({ file: false, folder: false });
    const [folder, setFolder] = useState({ name: '', type: '', docs: [], parent: null });
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
    function addBreadCrumbs(bread) {
        setBreadcrumbs(prevValue=>[...prevValue,bread]);
    }
    function removeBreadCrumbs(bread) {
        setBreadcrumbs(prevValue => {
            prevValue.pop(bread);
            return [...prevValue];
        });
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
            docs: [
                {
                    name: 'Fender',
                    type: 'folder',
                    docs: [
                        {
                            name: 'Acoustic',
                            type: 'folder',
                            docs: [],
                            parent: 'Fender',
                        }
                    ],
                    parent: 'Instrument',
                },
                {
                    name: 'Yamaha',
                    type: 'folder',
                    docs: [
                        {
                            name: 'Acoustic',
                            type: 'folder',
                            docs: [],
                            parent: 'Yamaha',
                        }
                    ],
                    parent: 'Instrument',
                }
            ],
            parent: null,
            
        },
        activeFolder: {},
        breadcrumbs,
        addBreadCrumbs,
        removeBreadCrumbs
        
    };
    return (
        <StorageProvider.Provider value={value}>
            {props.children}
        </StorageProvider.Provider>
    )
}

export default Storage;
