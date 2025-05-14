// src/providers/AuthProvider.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { login as apiLogin, registerBuyer, registerSeller } from "@/api/auth";
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from "@/config/constants";

interface User {
	userId: number;
	userEmail: string;
	userFullName: string;
	userPosition: string;
	userBusinessPhone: string;
	userIsVerified: boolean;
	userRole?: string;
}

interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	registerAsBuyer: (data: BuyerRegistrationData) => Promise<void>;
	registerAsSeller: (data: SellerRegistrationData) => Promise<void>;
}

interface BuyerRegistrationData {
	userEmail: string;
	userPassword: string;
	userFullName: string;
	userPosition: string;
	userBusinessPhone: string;
}

interface SellerRegistrationData {
	userEmail: string;
	userPassword: string;
	userFullName: string;
	userPosition: string;
	userBusinessPhone: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);

	// Check for existing session on initial load
	useEffect(() => {
		const storedUser = localStorage.getItem(AUTH_USER_KEY);
		if (storedUser) {
			try {
				setUser(JSON.parse(storedUser));
			} catch (e) {
				localStorage.removeItem(AUTH_USER_KEY);
				localStorage.removeItem(AUTH_TOKEN_KEY);
			}
		}
	}, []);

	// After login
	const login = async (email: string, password: string) => {
		try {
			const response = await apiLogin({ email, password });

			// Store token and user data
			localStorage.setItem(AUTH_TOKEN_KEY, response.token);
			localStorage.setItem(AUTH_USER_KEY, JSON.stringify(response.user));

			// Make sure response.user includes userRole from backend
			setUser(response.user);
		} catch (error) {
			console.error("Login failed:", error);
			throw error;
		}
	};

	// For registerAsBuyer
	const registerAsBuyer = async (data: BuyerRegistrationData) => {
		try {
			const response = await registerBuyer(data);

			// Store token and user data
			localStorage.setItem(AUTH_TOKEN_KEY, response.token);

			// If the backend doesn't include userRole, add it here
			const userData = {
				...response.user,
				userRole: "BUYER",
			};

			localStorage.setItem(AUTH_USER_KEY, JSON.stringify(userData));
			setUser(userData);
		} catch (error) {
			console.error("Buyer registration failed:", error);
			throw error;
		}
	};

	// For registerAsSeller
	const registerAsSeller = async (data: SellerRegistrationData) => {
		try {
			const response = await registerSeller(data);

			// Store token and user data
			localStorage.setItem(AUTH_TOKEN_KEY, response.token);

			// If the backend doesn't include userRole, add it here
			const userData = {
				...response.user,
				userRole: "SELLER",
			};

			localStorage.setItem(AUTH_USER_KEY, JSON.stringify(userData));
			setUser(userData);
		} catch (error) {
			console.error("Seller registration failed:", error);
			throw error;
		}
	};

	const logout = () => {
		// Clear stored data
		localStorage.removeItem(AUTH_TOKEN_KEY);
		localStorage.removeItem(AUTH_USER_KEY);

		setUser(null);
	};

	const value: AuthContextType = {
		user,
		isAuthenticated: !!user,
		login,
		logout,
		registerAsBuyer,
		registerAsSeller,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};
