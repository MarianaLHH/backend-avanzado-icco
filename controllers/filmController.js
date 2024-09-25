import Film from "../models/Film.js";
export const create = async (req, res) => {
  try {
    const film = await Film.create(req.body);
    return res.json({
      film,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error al crear peloculas",
    });
  }
};

export const getFilms = async (req, res) => {
  try {
    const films = await Film.find();
    return res.json({
      films,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error al obtener todas las peliculas",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.filmId).populate("actors"); //.populate('actors') para tener toda la informacion de actors es como un join
    return res.json({
      film,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error al obtener film by id",
    });
  }
};

export const updateById = async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(req.params.filmId, req.body, {
      new: true,
    });
    return res.json(film);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error al actualizar film by id",
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    await Film.findByIdAndDelete(req.params.filmId);
    return res.json({
      msg: "Pelicula eliminada",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Error al borrar film by id",
    });
  }
};
