import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState();
    useEffect(() => {
        async function selectedContactIds() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
                //setSelectedContactId(result);
            } catch (error) {
                console.error(error);
            }
        }
        selectedContactIds()
    }, []);
    return (
        <>
            <p>{contact?.name}</p>
            <p>{contact?.email}</p>
            <p>{contact?.phone}</p>
        </>
    )
}