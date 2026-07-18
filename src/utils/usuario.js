export const recuperarUsuario = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

export const cerrarSesion = () => {
    localStorage.removeItem("user");
}