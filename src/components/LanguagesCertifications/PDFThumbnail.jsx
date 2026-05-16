import React, { useState, useEffect } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import styles from './LanguagesCertifications.module.css';

// Configurar worker de PDF.js
GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

const PDFThumbnail = ({ pdfUrl, alt }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const baseUrl = import.meta.env.BASE_URL || '/';
  const fullUrl = pdfUrl?.startsWith('/') 
    ? `${baseUrl}${pdfUrl.slice(1)}`
    : pdfUrl;

  useEffect(() => {
    if (!fullUrl) return;

    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(false);
        
        // Cargar el documento PDF
        const loadingTask = getDocument(fullUrl);
        const pdf = await loadingTask.promise;
        
        // Obtener la primera página
        const page = await pdf.getPage(1);
        
        // Configurar el viewport para la miniatura
        const viewport = page.getViewport({ scale: 0.5 });
        
        // Crear canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        // Renderizar la página en el canvas
        await page.render({
          canvasContext: context,
          viewport: viewport
        }).promise;
        
        // Convertir canvas a imagen
        setImageUrl(canvas.toDataURL());
        setLoading(false);
      } catch (err) {
        console.error('Error generando thumbnail:', err);
        setError(true);
        setLoading(false);
      }
    };

    loadPDF();
  }, [fullUrl]);

  if (loading) {
    return (
      <div className={styles.pdfLoading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={styles.pdfError}>
        <span>📄</span>
      </div>
    );
  }

  return (
    <div className={styles.pdfThumbnail}>
      <img 
        src={imageUrl} 
        alt={alt} 
        className={styles.pdfImage}
      />
    </div>
  );
};

export default PDFThumbnail;