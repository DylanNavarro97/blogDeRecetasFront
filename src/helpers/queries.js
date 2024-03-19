const URL_Recetas = import.meta.env.VITE_API_RECETA;

export const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URL_Recetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerRecetasAPI = async () => {
  try {
    const respuesta = await fetch(URL_Recetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const leerRecetaPorId = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarReceta = async (recetaEditada, id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaEditada),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
}

export const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`, {
      method: "DELETE"});
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


const usuarioAdmin = {
  mail: "admin@recetasrolling.com",
  password: "-Recetas1024-",
};

export const login = (usuario) => {
  if (
    usuario.mail === usuarioAdmin.mail &&
    usuario.password === usuarioAdmin.password
  ) {
    sessionStorage.setItem(
      "usuarioRecetasRolling",
      JSON.stringify(usuario.mail)
    );
    return true; 
  }else{
    return false
  }
};
