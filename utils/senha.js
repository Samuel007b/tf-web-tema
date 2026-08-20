import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

export async function hashSenha(senha) {
  return bcrypt.hash(senha, SALT_ROUNDS);
}

export async function verificarSenha(senha, hash) {
  return await bcrypt.compare(senha, hash);
}