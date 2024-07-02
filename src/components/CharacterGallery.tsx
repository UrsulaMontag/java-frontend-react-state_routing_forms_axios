import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import {useState} from "react";

type CharacterGalleryProps = {
    characters: Character[];
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const [searchText, setSearchText] = useState("");
    let filteredCharacters: Character[] = [];
    props.characters ?
        filteredCharacters = props.characters
            .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase())) : console.log(filteredCharacters);

    const cards = filteredCharacters?.map((character: Character) => <CharacterCard key={character.name}
                                                                                   character={character}/>);
    return (
        <div className="character-gallery">
            {cards.length > 0 ? <><input type="text" onChange={(e) => setSearchText(e.target.value)}
                                         placeholder="Search for a character"/>
                {cards}</> : <p>No characters found</p>}

        </div>
    );
}
