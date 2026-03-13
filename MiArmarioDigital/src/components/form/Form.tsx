import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../Button"; 
import { Input } from "./Input";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { supabase } from "../../supabase/client"; 


export const Form = () => {
    const { t } = useTranslation();
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
            setError(t('login.error_required'));
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
            navigate("/home");

        } catch (err) {
            setError(t('login.error_unexpected'));
            console.error(err);
        }
    };

    return (
        <div className="form-style">
            <div className='header-form'>
                <h1>{t('login.title')}</h1>
            </div>

            <form className="inputs-form" onSubmit={handleSubmit}>
                
                {error && <p style={{ color: "#d9534f", fontWeight: "bold", textAlign: "center", marginBottom: "15px" }}>{error}</p>}
                
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

                <Button nombre={t('login.submit')} class="btn" tipo="submit" />
            </form>

            {/* Enlace para ir al registro */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ color: "#71717A", fontSize: "14px", margin: 0 }}>
                    {t('login.no_account')}{" "}
                    <Link to="/register" style={{ color: "#C026D3", textDecoration: "none", fontWeight: "bold" }}>
                        {t('login.register_here')}
                    </Link>
                </p>
            </div>
        </div>
    );
};