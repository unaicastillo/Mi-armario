import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../form/Input";
import { supabase } from "../../supabase/client.ts";

export const FormRegister = () => {
    // Estados para guardar la información del formulario
    const [usuario, setUsuario] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validaciones
        if (!usuario || !correo || !password) {
            setError("Por favor, rellena todos los campos.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            // Llamada REAL a Supabase para registrar al usuario
            const { data, error: supabaseError } = await supabase.auth.signUp({
                email: correo,
                password: password,
                options: {
                    data: { username: usuario } // Guardamos el usuario extra
                }
            });

            // Si Supabase devuelve un error (ej: correo ya en uso, contraseña corta)
            if (supabaseError) {
                setError(supabaseError.message);
                return;
            }

            console.log("¡Usuario registrado con éxito en Supabase!", data.user);
            
            // Redirigimos al usuario
            navigate("/home");

        } catch (err) {
            setError("Ocurrió un error inesperado al conectar con el servidor.");
            console.error(err);
        }
    };

    return (
        <div className="form-style">
            <div className='header-form'>
                <h1>Registro</h1>
            </div>

            <form className="inputs-form" onSubmit={handleSubmit}>

                {error && <p style={{ color: "#d9534f", fontWeight: "bold", textAlign: "center", marginBottom: "15px" }}>{error}</p>}
                
                <Input
                    tipo="text"
                    nombreInput="Usuario"
                    texto={usuario}
                    ph="Introduce tu Usuario"
                    onChange={(e: any) => setUsuario(e.target.value)}
                />

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

                <Input
                    tipo="password"
                    nombreInput="Repite la contraseña"
                    texto={confirmPassword}
                    ph="Introduce tu contraseña"
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                />

                <Button nombre="Registrarse" class="btn" tipo="submit" />
            </form>
        </div>
    );
};