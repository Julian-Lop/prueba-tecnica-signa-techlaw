import { getTrademarkRegistrations, createTrademarkRegistration } from "@/controllers/trademark-registration";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return getTrademarkRegistrations(req, res);
  }
  if (req.method === 'POST') {
    return createTrademarkRegistration(req, res);
  }
  res.status(405).json({ error: 'Método no permitido' });
}
