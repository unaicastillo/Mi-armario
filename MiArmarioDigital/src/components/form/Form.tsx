import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../Button"; 
import { Input } from "./Input";
import { supabase } from "../../supabase/client"; 

export const Form = () => {
    // Estados para Supabase
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
            // 2. Llamada real a Supabase para iniciar sesión
            const { data, error: supabaseError } = await supabase.auth.signInWithPassword({
                email: correo,
                password: password,
            });

            // Si falla (ej. contraseña incorrecta o el correo no existe)
            if (supabaseError) {
                // Ponemos un mensaje genérico por seguridad
                setError("Correo o contraseña incorrectos."); 
                return;
            }

            console.log("¡Sesión iniciada con éxito en Supabase!", data.user);

            // 3. Redirección a la página principal del usuario
            navigate("/inicio");

        } catch (err) {
            setError("Ocurrió un error inesperado al conectar con el servidor.");
            console.error(err);
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
                    tipo="email" // Mucho mejor usar "email" aquí para que el teclado del móvil ponga el @
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