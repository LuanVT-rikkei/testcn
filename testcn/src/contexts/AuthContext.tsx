import { createContext, useContext, useState, type ReactNode } from "react";

export type Role = "admin" | "manager" | "vendor";

export interface User {
  name: string;
  role: Role;
  loggedIn: boolean;
}

interface AuthContextType {
  user: User | null;
  setUser: (u: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    name: "Luan",
    role: "manager",
    loggedIn: true,
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
