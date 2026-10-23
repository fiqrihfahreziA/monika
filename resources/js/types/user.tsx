export type UserRole = "admin" | "petugas_puskesmas" | "kader";
export type StatusVerifikasi = "pending" | "approved" | "rejected";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: UserRole;
  puskesmas_id: number | null;
  status_verifikasi: StatusVerifikasi;
}

export interface LoginPayload {
  login: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  user: User;
}

export interface ApiErrorResponse {
  message?: string;
  status_verifikasi?: string;
  catatan_verifikasi?: string | null;
  errors?: Record<string, string[]>;
}