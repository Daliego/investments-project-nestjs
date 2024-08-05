import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
  const saltOrRounds = 15;

  return await bcrypt.hash(password, saltOrRounds);
}

export async function comparePasswords(
  hashedPassword: string,
  plainTextPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
}
