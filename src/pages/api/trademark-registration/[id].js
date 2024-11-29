import { updateTrademarkRegistration, deleteTrademarkRegistration } from "@/controllers/trademark-registration";

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    return updateTrademarkRegistration(req, res);
  }
  if (req.method === 'DELETE') {
    return deleteTrademarkRegistration(req, res);
  }
  res.status(405).json({ error: 'Método no permitido' });
}
