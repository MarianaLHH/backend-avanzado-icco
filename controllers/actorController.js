import Actor from "../models/Actor.js";

const getList = async (req, res) => {
  try {
    const actors = await Actor.find();
    return res.json({
      actors,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error al obtener actores",
    });
  }
};
const getById = (req, res) => {};
const create = (req, res) => {};
const update = (req, res) => {};
const remove = (req, res) => {};
export { getList, getById, create, update, remove };
