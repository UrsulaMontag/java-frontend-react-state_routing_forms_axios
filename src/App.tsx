import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import {useEffect, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";
import CreateCharacter from "./components/CreateCharacter.tsx";
import CharacterDetailPage from "./pages/CharacterDetailPage.tsx";
import axios from "axios";


export default function App() {
    const [data, setData] = useState<Character[]>([]);

    const fetchData = () => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setData(response.data.results)
                console.log(response.data)
            })
            .catch(error => console.error('Error fetching data', error));
    }
    useEffect(() => {
        fetchData();
        console.log(data)
    }, []);


    const addCreatedCharacter = (name: string, species: string, status: string) => {
        setData([...data, {
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
                <Route path={"/characters"} element={<CharacterGallery characters={data}/>}/>
                <Route path={"/characters/createCharacter"}
                       element={<CreateCharacter addCharacter={addCreatedCharacter}/>}/>
                <Route path={"/characters/:id"}
                       element={<CharacterDetailPage characters={data}/>}/>
            </Routes>


        </>
    );
}
