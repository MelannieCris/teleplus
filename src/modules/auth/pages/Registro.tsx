import { FaCheckCircle, FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import styles from "../styles/login.module.css";
import { useRegistro } from "../hooks/useRegistro";
import type { TextosRegistro } from "../interfaces/RegistroTypes";

const getRegistrationButtonText = (isLoading: boolean, language: string, t: TextosRegistro): string => {
  if (isLoading) {
    return language === "es" ? "Registrando..." : "Registering...";
  }
  return t.btn;
};

interface SuccessModalProps {
  readonly title: string;
  readonly body: string;
  readonly buttonText: string;
  readonly onNavigate: () => void;
}

function SuccessModal({ title, body, buttonText, onNavigate }: SuccessModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <FaCheckCircle className="text-success mb-3" style={{ fontSize: "3rem" }} />
        <h2 className="fw-bold mb-1" style={{ color: "#333" }}>{title}</h2>
        <p className="text-muted mb-4">{body}</p>
        <button
          className="btn btn-success w-100 py-2 fw-bold"
          style={{ backgroundColor: "#198754", border: "none", borderRadius: "10px" }}
          onClick={onNavigate}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

interface LanguageSelectorProps {
  readonly language: "es" | "en";
  readonly onLanguageChange: (lang: "es" | "en") => void;
}

function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  return (
    <fieldset className="mb-4 border-0 p-0" aria-label="Selección de idioma">
      <button
        type="button"
        className="px-2 btn btn-link text-decoration-none p-0"
        onClick={() => onLanguageChange("es")}
        style={{ fontWeight: language === "es" ? "bold" : "normal", color: language === "es" ? "#dc3545" : "black" }}
        aria-pressed={language === "es"}
      >
        ES
      </button>
      <span className="text-muted mx-1" aria-hidden="true">|</span>
      <button
        type="button"
        className="px-2 btn btn-link text-decoration-none p-0"
        onClick={() => onLanguageChange("en")}
        style={{ fontWeight: language === "en" ? "bold" : "normal", color: language === "en" ? "#dc3545" : "black" }}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </fieldset>
  );
}

interface FormFieldProps {
  readonly id: string;
  readonly label: string;
  readonly type: string;
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly showToggle?: boolean;
  readonly toggleVisible?: boolean;
  readonly onToggle?: () => void;
  readonly toggleLabel?: string;
}

function FormField({ id, label, type, name, value, error, onChange, showToggle, toggleVisible, onToggle, toggleLabel }: FormFieldProps) {
  const inputType = showToggle && toggleVisible ? "text" : type;
  return (
    <div className="mb-3">
      <label htmlFor={id} className="fw-semibold text-muted small mb-1">{label}</label>
      <div className={showToggle ? "input-group" : undefined}>
        <input
          id={id}
          type={inputType}
          name={name}
          className={`form-control form-control-lg shadow-sm ${showToggle ? "border-end-0" : ""} ${error ? "is-invalid" : ""}`}
          value={value}
          onChange={onChange}
        />
        {showToggle && onToggle && (
          <button type="button" className="input-group-text bg-white border-start-0 shadow-sm" onClick={onToggle} aria-label={toggleLabel}>
            {toggleVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

function Registro() {
  const {
    language, setLanguage, showPassword, setShowPassword, showConfirm, setShowConfirm,
    showSuccessModal, isLoading, fieldErrors, formData, error, t,
    handleChange, handleSubmit, handleNavigateLogin,
  } = useRegistro();

  return (
    <div className={`container-fluid p-0 ${styles.page}`}>
        {showSuccessModal && (
          <SuccessModal title={t.modalTitle} body={t.modalBody} buttonText={t.modalBtn} onNavigate={handleNavigateLogin} />
        )}

        <div className="row g-0 vh-100">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-4 shadow">
            <LanguageSelector language={language} onLanguageChange={setLanguage} />

            <form className={styles.formWrapper} onSubmit={handleSubmit} noValidate>
              <div className="text-center mb-4">
                <div className="badge bg-danger mb-2 px-3 py-2 text-uppercase">{t.badge}</div>
                <h2 className="fw-bold text-dark m-0">{t.welcome}</h2>
                <p className="text-muted small">{t.subtitle}</p>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <FormField id="nombre" label={t.name} type="text" name="nombre" value={formData.nombre} error={fieldErrors.nombre} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <FormField id="apellido" label={t.lastname} type="text" name="apellido" value={formData.apellido} error={fieldErrors.apellido} onChange={handleChange} />
                </div>
              </div>

              <FormField id="telefono" label={t.phone} type="tel" name="telefono" value={formData.telefono} error={fieldErrors.telefono} onChange={handleChange} />
              <FormField id="correo" label={t.email} type="email" name="correo" value={formData.correo} error={fieldErrors.correo} onChange={handleChange} />

              <div className="row">
                <div className="col-md-6">
                  <FormField id="contrasena" label={t.pass} type="password" name="contrasena" value={formData.contrasena} error={fieldErrors.contrasena} onChange={handleChange} showToggle toggleVisible={showPassword} onToggle={() => setShowPassword(!showPassword)} toggleLabel={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} />
                </div>
                <div className="col-md-6">
                  <FormField id="confirmar" label={t.confirm} type="password" name="confirmar" value={formData.confirmar} error={fieldErrors.confirmar} onChange={handleChange} showToggle toggleVisible={showConfirm} onToggle={() => setShowConfirm(!showConfirm)} toggleLabel={showConfirm ? "Ocultar confirmación" : "Mostrar confirmación"} />
                </div>
              </div>

              {error && (
                <div className="alert alert-danger py-2 small text-center border-0 shadow-sm" role="alert">{error}</div>
              )}

              <button type="submit" className="btn btn-danger btn-lg w-100 mb-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2" disabled={isLoading}>
                {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : <FaUserPlus />}
                {getRegistrationButtonText(isLoading, language, t)}
              </button>

              <div className="text-center mt-3 pt-3 border-top">
                <button type="button" onClick={handleNavigateLogin} className="btn btn-link text-decoration-none small text-danger fw-bold p-0">{t.link}</button>
              </div>
            </form>
          </div>

          <div className="col-md-6 d-none d-md-block position-relative">
            <div className={styles.heroTextWrapper}>
              <h1 className="display-4 fw-bold m-0">TicketPlus+</h1>
              <p className="lead opacity-75">Tu entrada a los mejores eventos.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Registro;
