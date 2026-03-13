import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../form/Input";
import { useTranslation } from "react-i18next";

export const FormRegister = () => {

    const { t } = useTranslation();

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
            setError(t('login.error_required'));
            return;
        }

        if (password !== confirmPassword) {
            setError(t('register.password_mismatch'));
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
            setError(t('login.error_unexpected'));
        }
    };

    return (
        <div className="form-style">
            <div className='header-form'>
                <h1>{t('register.title')}</h1>
            </div>

            <form className="inputs-form" onSubmit={handleSubmit}>

            {error && <p style={{ color: "#d9534f", fontWeight: "bold", textAlign: "center", marginBottom: "15px" }}>{error}</p>}
                
                <Input
                    tipo="text"
                    nombreInput={t('register.username')}
                    texto={usuario}
                    ph={t('register.username_placeholder')}
                    onChange={(e: any) => setUsuario(e.target.value)}
                />

                <Input
                    tipo="email"
                    nombreInput={t('login.email')}
                    texto={correo}
                    ph={t('login.email_placeholder')}
                    onChange={(e: any) => setCorreo(e.target.value)}
                />

                <Input
                    tipo="password"
                    nombreInput={t('login.password')}
                    texto={password}
                    ph={t('login.password_placeholder')}
                    onChange={(e: any) => setPassword(e.target.value)}
                />

                <Input
                    tipo="password"
                    nombreInput={t('register.repeat_password')}
                    texto={confirmPassword}
                    ph={t('login.password_placeholder')}
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                />

                <Button nombre={t('register.submit')} class="btn" tipo="submit" />
            </form>
        </div>
    );
};