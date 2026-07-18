export const recuperarSesionDashboard = () => {
    const session = localStorage.getItem("dashboardUser");
    return session ? JSON.parse(session) : null;
};

export const guardarSesionDashboard = (usuario) => {
    localStorage.setItem("dashboardUser", JSON.stringify(usuario));
};

export const cerrarSesionDashboard = () => {
    localStorage.removeItem("dashboardUser");
};