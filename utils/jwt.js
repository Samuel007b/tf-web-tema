import jwt from 'jsonwebtoken';

const SEGREDO = process.env.JWT_SECRET;
const EXPIRACAO = '7d';

export function gerarToken(userAdmin) {
  const payload = {
    id: userAdmin.id,
    role: userAdmin.role,
  };
  return jwt.sign(payload, SEGREDO, { expiresIn: EXPIRACAO });
}

export function verificarToken(token) {
  return jwt.verify(token, SEGREDO);
}