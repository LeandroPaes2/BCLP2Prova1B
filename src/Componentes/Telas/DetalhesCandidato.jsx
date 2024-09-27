import { Container, Button, Form, Table } from "react-bootstrap";
import { useState } from "react";

export default function DetalhesCandidato(props) {
    const { candidato, onBack } = props;
    const [novoQuestion, setNovoQuestionamento] = useState("");
    const [questionamentos, setQuestionamentos] = useState(candidato.questionamentos || []);

    const Questionamento = () => {
        if (novoQuestion.trim()) {
            setQuestionamentos([...questionamentos, novoQuestion]);
            setNovoQuestionamento(""); 
        }
    };


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

            <h2>Registrar Questionamento</h2>
            <Form.Group className="mb-3">
                <Form.Label>Digite sua dúvida:</Form.Label>
                <Form.Control
                    type="text"
                    value={novoQuestion}
                    onChange={(e) => setNovoQuestionamento(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" onClick={Questionamento}>Adicionar Questionamento</Button>
            
            <h2>Lista de Questionamentos</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Questionamento</th>
                    </tr>
                </thead>
                <tbody>
                    {questionamentos.map((question, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{question}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button variant="secondary" onClick={onBack}>Voltar</Button>
        </Container>
    );
}
