// 1. Traemos la herramienta oficial de Supabase para conectarnos
import { createClient } from '@supabase/supabase-js';

// 2. Leemos tu "DNI" y "Contraseña" desde el archivo oculto .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 3. Creamos el "teléfono" (la conexión) y lo exportamos para que 
//    cualquier parte de tu app (como el Registro) pueda usarlo.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);