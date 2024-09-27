import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import { listaCandidatos } from "../../dados/candidatos";

export default function TelaPrincipal(props) {
    const [selectedCandidato, setSelectedCandidato] = useState(null);

    const Select = (candidato) => {
        setSelectedCandidato(candidato);
    };

    const Back = () => {
        setSelectedCandidato(null); 
    };

    return (
        <Pagina>
            {
                selectedCandidato ? (
                    <DetalhesCandidato 
                        candidato={selectedCandidato} 
                        onBack={Back} 
                    />
                ) : (
                    <GridCandidatos 
                        listaCandidatos={listaCandidatos} 
                        onSelect={Select} 
                    />
                )
            }
        </Pagina>
    );
}
