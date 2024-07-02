import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import {characters} from "./Characters.ts";
import {useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import CreateCharacter from "./components/CreateCharacter.tsx";
import CharacterDetailPage from "./pages/CharacterDetailPage.tsx";


export default function App() {
    const [chars, setChars] = useState<Character[]>(characters);
    const addCreatedCharacter = (name: string, species: string, status: string) => {
        setChars([...chars, {
            id: (Math.floor(Math.random()) * 10),
            name: name,
            status,
            species,
            type: "",
            gender: "",
            origin: {name: '', url: ''},
            location: {name: '', url: ''},
            image: "",
            episode: [],
            url: "",
            created: Date.toString()
        }])
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={chars}/>}/>
                <Route path={"/characters/createCharacter"}
                       element={<CreateCharacter addCharacter={addCreatedCharacter}/>}/>
                <Route path={"/characters/:id"}
                       element={<CharacterDetailPage characters={chars}/>}/>
            </Routes>
        </>
    );
}
