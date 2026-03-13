import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './../styles/FileUploader.css';

interface FileUploaderProps {
  onImageSelected: (file: File) => void; // Para pasar la imagen al padre
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onImageSelected }) => {
  const [preview, setPreview] = useState<string | null>(null);

  // Función que se ejecuta cuando sueltas o eliges un archivo
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]; // Solo permitimos una prenda a la vez
    
    if (file) {
      // 1. Crear URL temporal para previsualizar
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      
      // 2. Enviar el archivo original al componente padre
      onImageSelected(file);
    }
  }, [onImageSelected]);

  // Configuración del hook de dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg', '.webp'] // Solo imágenes
    },
    maxFiles: 1, // Una prenda por subida
    multiple: false
  });

  // Limpieza de memoria (buena práctica en React)
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="uploader-container">
      {/* getRootProps: Se pone en el div contenedor (maneja el drag & drop)
         getInputProps: Se pone en el input oculto (maneja el click)
      */}
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'active' : ''} ${preview ? 'has-image' : ''}`}
      >
        <input {...getInputProps()} />

        {preview ? (
          // ESTADO: Con imagen cargada
          <div className="preview-container">
            <img src={preview} alt="Previsualización" className="preview-image" />
            <div className="overlay">
              <p>Clic o arrastra para cambiar imagen</p>
            </div>
          </div>
        ) : (
          // ESTADO: Vacío (Esperando imagen)
          <div className="placeholder-content">
            {/* Aquí puedes poner un icono SVG de una nube o una cámara */}
            <span className="icon">☁️</span> 
            {isDragActive ? (
              <p>¡Suéltala aquí!</p>
            ) : (
              <p>Arrastra tu prenda aquí <br/> o <span>haz clic para buscar</span></p>
            )}
            <small>Soporta JPG, PNG, WEBP</small>
          </div>
        )}
      </div>
    </div>
  );
};