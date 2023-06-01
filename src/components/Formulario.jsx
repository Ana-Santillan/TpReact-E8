import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
    const datosLS = JSON.parse(localStorage.getItem('listaDatos')) || [];
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");
    const [datos, setDatos] = useState(datosLS);

    useEffect(() => {
        localStorage.setItem('listaDatos', JSON.stringify(datos));
    }, [datos])

    const handleSubmit = (e) => {       
        e.preventDefault();
        let ObjetoDatos = {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            email: email
        }
        setDatos([...datos, ObjetoDatos])
        setNombre("");
        setApellido("");
        setDni("");
        setEmail("");
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="datos">
                <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un apellido" onChange={(e) => setApellido(e.target.value)} value={apellido} />
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese un DNI" onChange={(e) => setDni(e.target.value)} value={dni} />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese un email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <Button variant="primary" type="submit" className="mt-3">Enviar</Button>
                </Form.Group>
            </Form>
            
        </>
    );
};

export default Formulario;