import { FaCheckCircle, FaEye, FaEyeSlash, FaSignInAlt } from "react-icons/fa";
import styles from "../styles/Login.module.css";
import { useLogin } from "../hooks/useLogin";
import type { TextosIdioma } from "../interfaces/LoginTypes";

const getLoginButtonText = (isLoading: boolean, language: string, t: TextosIdioma): string => {
  if (isLoading) {
    return language === "es" ? "Ingresando..." : "Signing in...";
  }
  return t.login;
};

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    errors,
    language,
    setLanguage,
    isLoggedIn,
    isLoading,
    t,
    handleSubmit,
    handleNavigateHome,
    handleNavigateRegistro,
  } = useLogin();

  return (
    <div className={`container-fluid p-0 ${styles.page}`}>
        {isLoggedIn && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
              <FaCheckCircle
                className="text-success mb-3"
                style={{ fontSize: "3rem" }}
              />
              <h2 className="fw-bold mb-1" style={{ color: "#333" }}>
                {t.successTitle}
              </h2>
              <p className="text-muted mb-4">{t.success}</p>
              <button
                className="btn btn-success w-100 py-2 fw-bold"
                style={{
                  backgroundColor: "#198754",
                  border: "none",
                  borderRadius: "10px",
                }}
                onClick={handleNavigateHome}
              >
                {t.continue}
              </button>
            </div>
          </div>
        )}

        <div className="row g-0 vh-100">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-4 shadow">
            <fieldset className="mb-4 border-0 p-0" aria-label="Selección de idioma">
              <button
                type="button"
                className="px-2 btn btn-link text-decoration-none p-0"
                onClick={() => setLanguage("es")}
                style={{
                  fontWeight: language === "es" ? "bold" : "normal",
                  color: language === "es" ? "#dc3545" : "black",
                }}
                aria-pressed={language === "es"}
              >
                ES
              </button>
              <span className="text-muted mx-1" aria-hidden="true">|</span>
              <button
                type="button"
                className="px-2 btn btn-link text-decoration-none p-0"
                onClick={() => setLanguage("en")}
                style={{
                  fontWeight: language === "en" ? "bold" : "normal",
                  color: language === "en" ? "#dc3545" : "black",
                }}
                aria-pressed={language === "en"}
              >
                EN
              </button>
            </fieldset>

            <form className={styles.formWrapper} onSubmit={handleSubmit} noValidate>
              <div className="text-center mb-4">
                <div className="badge bg-danger mb-2 px-3 py-2 text-uppercase">
                  {t.badge}
                </div>
                <h2 className="fw-bold text-dark m-0">{t.welcome}</h2>
                <p className="text-muted small">{t.subtitle}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="fw-semibold text-muted small mb-1">
                  {t.email}
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-control form-control-lg shadow-sm ${errors.length > 0 && email.trim() === "" ? "is-invalid" : ""}`}
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="fw-semibold text-muted small mb-1">
                  {t.password}
                </label>
                <div className="input-group">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className={`form-control form-control-lg shadow-sm border-end-0 ${errors.length > 0 && password.trim() === "" ? "is-invalid" : ""}`}
                    placeholder={t.passwordPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="input-group-text bg-white border-start-0 shadow-sm"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>

              {errors.length > 0 && (
                <div className="alert alert-danger py-2 small text-center border-0 shadow-sm" role="alert">
                  {errors.map((err) => (
                    <div key={err}>{err}</div>
                  ))}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-danger btn-lg w-100 mb-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                ) : (
                  <FaSignInAlt />
                )}
                {getLoginButtonText(isLoading, language, t)}
              </button>

              <div className="text-center mt-3 pt-3 border-top">
                <div className="mb-2">
                  <span className="text-decoration-none small text-muted" style={{ cursor: "pointer" }}>
                    {t.forgot}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleNavigateRegistro}
                  className="btn btn-link text-decoration-none small text-danger fw-bold p-0"
                >
                  {t.register}
                </button>
              </div>
            </form>
          </div>

          <div
            className={`col-md-6 d-none d-md-block position-relative ${styles.rightColumn}`}
          >
            <div className={styles.heroTextWrapper}>
              <h1 className="display-4 fw-bold m-0">Ticket Plus+</h1>
              <p className="lead opacity-75">
                Tu entrada a los mejores eventos.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;
