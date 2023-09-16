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

    return (
        <div>
            {contact && (
                <div>
                    <p>
                        <b>Name:</b> {contact.name}
                    </p>
                    <p>
                        <b>Username:</b> {contact.username}
                    </p>
                    <p>
                        <b>Email:</b> {contact.email}
                    </p>
                    <p>
                        <b>Phone:</b> {contact.phone}
                    </p>
                    <p>
                        <b>Website:</b> {contact.website}
                    </p>
                    <div>
                        <p>
                            <b>Address: </b>
                            {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>Company:</b> {`${contact.company.name}: ${contact.company.catchPhrase}`}
                        </p>
                    </div>
                </div>

            )}

            <button onClick={() => {
                setSelectedContactId(null);
            }}>Back</button>

        </div>
    )
}


export default SelectedContact