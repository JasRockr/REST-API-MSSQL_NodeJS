import { getConnection, sql, queriesAsesores } from "../database";

export const getAllAsesores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesAsesores.getAllAsesores);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const addNewAsesor = async (req, res) => {
  const {
    id_asesor,
    nombre_asesor,
    equipo_entidad,
    compania,
    correo_contacto,
    celular_contacto,
    rol_asesor,
    observaciones,
    usuario,
  } = req.body;

  let { fecha_novedad } = req.body;

  //! Pendiente validación por schemas con Zod o Express Validator
  if (
    id_asesor == null ||
    id_asesor == "" ||
    nombre_asesor == null ||
    nombre_asesor == "" ||
    equipo_entidad == null ||
    equipo_entidad == "" ||
    compania == null ||
    compania == "" ||
    observaciones == null ||
    observaciones == "" ||
    usuario == null ||
    usuario == ""
  ) {
    return res.status(400).json({
      message:
        "Algunos campos son obligatorios, por favor valide antes de volver a intentar guardar el nuevo registro.",
    });
  }

  if (!fecha_novedad) fecha_novedad = new Date();

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id_asesor", sql.VarChar, id_asesor)
      .input("nombre_asesor", sql.VarChar, nombre_asesor)
      .input("equipo_entidad", sql.VarChar, equipo_entidad)
      .input("compania", sql.VarChar, compania)
      .input("observaciones", sql.VarChar, observaciones)
      .input("fecha_novedad", sql.DateTime, fecha_novedad)
      .input("usuario", sql.VarChar, usuario)

      .query(queriesAsesores.addNewAsesor);

    res.json(req.body);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getAsesorById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queriesAsesores.getAsesorById);

  res.send(result.recordset[0]);
};

export const deleteAsesorById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queriesAsesores.deleteAsesor);

  res.sendStatus(204);
};

export const getTotalAsesores = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queriesAsesores.getTotalAsesores);

  res.json(result.recordset[0][""]);
};

export const updateAsesorById = async (req, res) => {
  const {
    id_asesor,
    nombre_asesor,
    equipo_entidad,
    compania,
    correo_contacto,
    celular_contacto,
    rol_asesor,
    observaciones,
    usuario,
  } = req.body;
  const { id } = req.params;

  let { fecha_novedad } = req.body;

  //! Pendiente validación por schemas con Zod o Express Validator
  if (
    id_asesor == null ||
    id_asesor == "" ||
    nombre_asesor == null ||
    nombre_asesor == "" ||
    equipo_entidad == null ||
    equipo_entidad == "" ||
    compania == null ||
    compania == "" ||
    observaciones == null ||
    observaciones == "" ||
    usuario == null ||
    usuario == ""
  ) {
    return res.status(400).json({
      message:
        "Algunos campos son obligatorios, por favor valide antes de volver a intentar guardar el nuevo registro.",
    });
  }

  if (!fecha_novedad) fecha_novedad = new Date();

  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id_asesor", sql.VarChar, id_asesor)
    .input("nombre_asesor", sql.VarChar, nombre_asesor)
    .input("equipo_entidad", sql.VarChar, equipo_entidad)
    .input("compania", sql.VarChar, compania)
    .input("observaciones", sql.VarChar, observaciones)
    .input("fecha_novedad", sql.DateTime, fecha_novedad)
    .input("usuario", sql.VarChar, usuario)
    .input("id", sql.Int, id)

    .query(queriesAsesores.updateAsesorById);

  res.json({
    id_asesor,
    nombre_asesor,
    equipo_entidad,
    compania,
    observaciones,
    fecha_novedad,
    usuario,
  });
};
