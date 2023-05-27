import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';


const LoadModal = ({Contact}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://contact.mediusware.com/api-doc/')
            .then(res => res.json())
            .then(data => setItems(data));

    }, [])
    return (
        <div>
           {
                    items.map(item => <Contact
                        item={item}
                        Contact={Contact}
                    ></Contact>)
                }
        </div>
    );
};

export default LoadModal;