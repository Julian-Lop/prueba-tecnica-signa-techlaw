import { db } from "@/db/connection";
import { trademarkRegistration } from "@/db/schema";

const getTrademarkRegistrations = async (req, res) => {
  try {
    const data = await db.select().from(trademarkRegistration);
    res.status(200).json(data);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error: "Error al obtener las marcas" });
  }
};

const createTrademarkRegistration = async (req, res) => {
  try {
    const { brand, owner, status } = req.body;
    const [newTrademarkRegistration] = await db
      .insert(trademarkRegistration)
      .values({ brand, owner, status })
      .returning();
    res.status(201).json(newTrademarkRegistration);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error: "Error al crear el registro de marca" });
  }
};

const updateTrademarkRegistration = async (req, res) => {
  const { id } = req.query;
  const { brand, owner, status } = req.body;

  try {
    const [updatedTrademarkRegistration] = await db
      .update(trademarkRegistration)
      .set({ brand, owner, status })
      .where(trademarkRegistration.id === Number(id))
      .returning();
    res.status(200).json(updatedTrademarkRegistration);
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error: "Error al actualizar el registro de marca" });
  }
};

const deleteTrademarkRegistration = async (req, res) => {
  const { id } = req.query;

  try {
    await db.delete(trademarkRegistration).where(trademarkRegistration.id === Number(id));
    res.status(204).end();
  } catch (error) {
    console.error({ error });
    res.status(500).json({ error: "Error al eliminar el registro de marca" });
  }
};

export {
  getTrademarkRegistrations,
  createTrademarkRegistration,
  updateTrademarkRegistration,
  deleteTrademarkRegistration,
};
