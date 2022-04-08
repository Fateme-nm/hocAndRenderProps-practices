import React, {useState} from 'react';

const Storage = (props) => {
    const [localStorageAvailabe, setLocalStorageAvailabe] = useState(true)
    
    const load = (key) => {
        if (localStorageAvailabe) {
            return localStorage.getItem(key)
        }
    }

    const save = (key, data) => {
        if (localStorageAvailabe) {
            return localStorage.setItem(key, data)
        }
    }

    const remove = (key) => {
        if (localStorageAvailabe) {
            return localStorage.removeItem(key)
        }
    }

    return (
        <div>
            {props.render({
                load: load,
                save: save,
                remove: remove})   
            }
        </div>
    );
}

export default Storage;
