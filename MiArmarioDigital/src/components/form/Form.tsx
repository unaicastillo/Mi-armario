import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../Button"; 
import { Input } from "./Input";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export const Form = () => {
    
    const { t } = useTranslation();
    
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
            setError(t('login.error_required'));
            return;
        }

        try {
            // TODO: Aquí irá código de Supabase
            console.log("Todo validado. Listo para iniciar sesión en Supabase:", { correo, password });

            // Redirección a la página de usuario iniciado
            navigate("/home");

        } catch (err) {
            setError(t('login.error_unexpected'));
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