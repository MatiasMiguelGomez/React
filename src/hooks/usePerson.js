import { useState } from "react"

export const usePerson = () => {
    const [person, setPerson] = useState({
        name: '',
        lastName: '',
        email: '',
        confEmail: '',
        phoneNumber: '',
    });

    const handleData = e => {
        setPerson({ ...person, [e.target.id]: e.target.value });
    };

    return { handleData, person }
}