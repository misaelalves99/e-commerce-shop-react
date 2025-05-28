// src/types/User.ts

export interface User {
  fullName: string;
  email: string;
  password: string; // senha armazenada hasheada
}

export interface UserData {
  fullName: string;
  cpf: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
}
