import type { ChangeEvent, DragEvent } from "react";
import { useWizard } from "../../../context/WizardContext";

function filesToPhotos(files: FileList) {
  return Array.from(files).map((file, index) => ({
    id: `${Date.now()}-${index}`,
    name: file.name,
    url: URL.createObjectURL(file),
  }));
}

export function PhotosStep() {
  const { state, dispatch } = useWizard();

  const addFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    dispatch({ type: "ADD_PHOTOS", photos: filesToPhotos(files) });
  };

  const onFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    addFiles(event.target.files);
    event.target.value = "";
  };

  const onDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    addFiles(event.dataTransfer.files);
  };

  return (
    <div>
      <h3 className="wizard-step-title">Fotos de la propiedad</h3>
      <p className="wizard-step-description">
        Si no tienes fotos buenas, no te preocupes — nuestro equipo puede hacerlas por ti. Este paso es
        opcional.
      </p>
      <label
        className="wizard-dropzone"
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4v12m0-12l-4 4m4-4l4 4M4 18h16"
            stroke="#1565C0"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="wizard-dropzone-title">Arrastra tus fotos aquí o toca para elegirlas</span>
        <span className="wizard-dropzone-subtitle">Hasta 8 fotos</span>
        <input type="file" accept="image/*" multiple onChange={onFileInput} hidden />
      </label>

      {state.photos.length > 0 && (
        <div className="wizard-photo-grid">
          {state.photos.map((photo) => (
            <div key={photo.id} className="wizard-photo-thumb">
              <img src={photo.url} alt={photo.name} />
              <button
                type="button"
                onClick={() => dispatch({ type: "REMOVE_PHOTO", id: photo.id })}
                aria-label={`Quitar ${photo.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
