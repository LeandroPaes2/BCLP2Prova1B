import { Container, Button } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    const { candidato, onBack } = props;

    return (
        <Container>
            <h1>Detalhes do Candidato: {candidato.nome}</h1>
            <img src={candidato.avatar} alt={candidato.nome} height="300" />
            <p>Email: {candidato.email}</p>
            <h2>Propostas:</h2>
            <ul>
                {candidato.propostas.map((proposta, index) => (
                    <li key={index}>{proposta}</li>
                ))}
            </ul>
            <Button variant="secondary" onClick={onBack}>Voltar</Button>
        </Container>
    );
}
