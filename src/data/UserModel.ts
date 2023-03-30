export interface UserModel {
  // Basic user information
  id?: number;
  name?: string;
  email?: string;
  created_at?: string;
  updated_at?: string;

  // Other information
  country?: string;
  zip?: number;
  city?: string;
  address?: string;
  phone?: string;
  avatar?: string;

  // Authentication
  verified?: boolean;
  token?: string;
  password_set?: boolean;
}
