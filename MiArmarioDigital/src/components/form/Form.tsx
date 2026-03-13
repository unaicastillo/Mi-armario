import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../Button"; 
import { Input } from "./Input";

export const Form = () => {
    // Estadoslistos para Supabase
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validaciones básicas
        if (!correo || !password) {
            setError("Por favor, rellena todos los campos.");
            return;
        }

        try {
            // TODO: Aquí irá código de Supabase
            console.log("Todo validado. Listo para iniciar sesión en Supabase:", { correo, password });

            // Redirección a la página de usuario iniciado
            navigate("/home");

        } catch (err) {
            setError("Ocurrió un error inesperado.");
        }
    };

    return (
        <div className="form-style">
            <div className='header-form'>
                <h1>Inicia Sesión</h1>
            </div>

            <form className="inputs-form" onSubmit={handleSubmit}>
                
                {error && <p style={{ color: "#d9534f", fontWeight: "bold", textAlign: "center", marginBottom: "15px" }}>{error}</p>}
                
                <Input
                    tipo="email"
                    nombreInput="Correo"
                    texto={correo}
                    ph="Introduce tu correo electrónico"
                    onChange={(e: any) => setCorreo(e.target.value)}
                />

                <Input
                    tipo="password"
                    nombreInput="Contraseña"
                    texto={password}
                    ph="Introduce tu contraseña"
                    onChange={(e: any) => setPassword(e.target.value)}
                />

                <Button nombre="Iniciar sesión" class="btn" tipo="submit" />
            </form>

            {/* Enlace para ir al registro */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ color: "#71717A", fontSize: "14px", margin: 0 }}>
                    ¿No tienes cuenta?{" "}
                    <Link to="/register" style={{ color: "#C026D3", textDecoration: "none", fontWeight: "bold" }}>
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </div>
    );
};