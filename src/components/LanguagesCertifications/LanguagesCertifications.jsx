/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./LanguagesCertifications.module.css";
import { personalData } from "../../data/personalData";
import PDFThumbnail from "./PDFThumbnail";

// Componente para mostrar modal de PDF
const PdfViewer = ({ pdfUrl, onClose }) => {
  if (!pdfUrl) return null;

  // Obtener la URL base de Vite
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Construir URL completa para el PDF
  let fullUrl = pdfUrl;
  if (pdfUrl.startsWith('/') && !pdfUrl.startsWith(baseUrl)) {
    fullUrl = `${baseUrl}${pdfUrl.slice(1)}`;
  }
  
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <iframe
          src={`${fullUrl}#toolbar=0`}
          title="PDF Viewer"
          className={styles.pdfViewer}
        />
      </div>
    </div>
  );
};

// Componente para cada certificación
const CertificationCard = ({ certification }) => {
  const [showPdf, setShowPdf] = useState(false);

  const handleClick = () => {
    if (certification.type === "pdf" && certification.pdfFile) {
      setShowPdf(true);
    } else if (certification.link) {
      window.open(certification.link, "_blank");
    } else if (certification.pdfFile && !certification.pdfFile.endsWith('.pdf')) {
      // Si es imagen JPG/PNG, abrir en nueva pestaña
      const baseUrl = import.meta.env.BASE_URL || '/';
      const fullUrl = certification.pdfFile.startsWith('/') 
        ? `${baseUrl}${certification.pdfFile.slice(1)}`
        : certification.pdfFile;
      window.open(fullUrl, "_blank");
    }
  };

  // Obtener la URL completa para el thumbnail
  const getPdfUrl = () => {
    if (!certification.pdfFile) return null;
    const baseUrl = import.meta.env.BASE_URL || '/';
    if (certification.pdfFile.startsWith('/')) {
      return `${baseUrl}${certification.pdfFile.slice(1)}`;
    }
    return certification.pdfFile;
  };

  return (
    <>
      <div className={styles.certCard} onClick={handleClick}>
        <div className={styles.certImageContainer}>
          {/* Para PDFs: mostrar thumbnail real */}
          {certification.type === "pdf" ? (
            <PDFThumbnail pdfUrl={getPdfUrl()} alt={certification.name} />
          ) : certification.image ? (
            /* Para imágenes JPG/PNG: mostrar la imagen */
            <img
              src={certification.image}
              alt={certification.name}
              className={styles.certImg}
            />
          ) : (
            /* Fallback si no hay imagen */
            <div className={styles.noImage}>
              📄
            </div>
          )}

          {/* Badge para PDF */}
          {certification.type === "pdf" && (
            <div className={styles.pdfBadge}>PDF</div>
          )}
        </div>

        <div className={styles.certInfo}>
          <h4>{certification.name}</h4>
          {certification.category && (
            <span className={styles.category}>{certification.category}</span>
          )}
          <button className={styles.viewBtn}>
            {certification.type === "pdf" ? "Ver PDF →" : "Ver certificado →"}
          </button>
        </div>
      </div>

      {/* Modal de PDF */}
      {showPdf && (
        <PdfViewer
          pdfUrl={certification.pdfFile}
          onClose={() => setShowPdf(false)}
        />
      )}
    </>
  );
};

const LanguagesCertifications = () => {
  return (
    <section
      id="contacto"
      className={`${styles.languagesCertifications} section`}
    >
      <h2>🌟 Idiomas y Certificaciones</h2>
      
      <div className={styles.grid}>
        {/* Sección de Idiomas */}
        <div className={styles.category}>
          <h3>🗣️ Idiomas</h3>
          <div className={styles.languagesList}>
            {personalData.languages.map((lang, index) => (
              <div key={index} className={styles.languageItem}>
                <span className={styles.languageName}>{lang}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sección de Certificaciones */}
        <div className={styles.category}>
          <h3>📜 Certificaciones</h3>
          <div className={styles.certGrid}>
            {personalData.certifications.map((cert, index) => (
              <CertificationCard key={index} certification={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesCertifications;