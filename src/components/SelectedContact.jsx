import { useState, useEffect } from 'react'

function SelectedContact({
    selectedContactId,
    setSelectedContactId
}) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data);

            } catch (error) {
                console.error(error)
            }
        }

        fetchSelectedContact();
    }, []);


}






export default SelectedContact