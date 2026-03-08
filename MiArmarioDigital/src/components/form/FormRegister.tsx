import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../form/Input"; // Asegúrate de que esta ruta a tu Input es correcta

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
            // TODO: Aquí irá tu código de Supabase más adelante.
            // Será algo muy parecido a esto:
            /*
            const { data, error: supabaseError } = await supabase.auth.signUp({
                email: correo,
                password: password,
                options: {
                    data: { username: usuario }
                }
            });

            if (supabaseError) {
                setError(supabaseError.message);
                return;
            }
            */

            // Por ahora, solo mostramos por consola que los datos están listos
            console.log("Todo validado. Listo para enviar a Supabase:", { usuario, correo, password });

            navigate("/home");

        } catch (err) {
            setError("Ocurrió un error inesperado.");
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