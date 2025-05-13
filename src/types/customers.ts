export interface Customer { 
  id?: number; 
  name?: string; 
  email?: string; 
  address?: string; 
  phone?: string; 
  password?: string; 
}

export interface CustomerSelected { 
  id: number; 
  name: string; 
  email: string; 
  password: string; 
}