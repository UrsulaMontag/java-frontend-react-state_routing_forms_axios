import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import {useParams} from "react-router-dom";

type CharacterDetailPageProps = {
    characters: Character[]
}

export default function CharacterDetailPage(props: Readonly<CharacterDetailPageProps>) {
    const params = useParams();
    const detailCard = props.characters.find((card) => card.id.toString() === params.id)

    return (
        <>
            {detailCard
                ? <CharacterCard character={detailCard}/>
                : <p>No character found</p>
            }
        </>
    )
}