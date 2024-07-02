import {ChangeEvent, FormEvent, useState} from "react";

type CreateCharacterProps = {
    addCharacter: (name: string, species: string, status: string) => void;
}
export default function CreateCharacter(props: Readonly<CreateCharacterProps>) {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [status, setStatus] = useState('alive');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addCharacter(name, species, status);
        setName('')
        setSpecies('')
        setStatus('alive')
    }
    return (
        <form onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
            <label>Name:
                <input type={"text"} value={name}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}/></label>
            <label>Species:
                <input type={"text"} value={species}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setSpecies(event.target.value)}/></label>
            <label>Status:
                <select value={status}
                        onChange={(event: ChangeEvent<HTMLSelectElement>) => setStatus(event.target.value)}>
                    <option value={'alive'}>Alive</option>
                    <option value={'dead'}>Dead</option>
                    <option value={'unknown'}>Unknown</option>
                </select></label>
            <button>Create</button>
        </form>
    )
}