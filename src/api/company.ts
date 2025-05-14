// src/api/company.ts
import apiClient from './axios';
import { COMPANIES } from './endpoints';

export interface CompanyRequest {
  companyName: string;
  companyAddress: string;
  companyIndustryCategory: string;
  companyCommercialRegister?: string;
  companyBusinessLicenseNumber?: string;
  companyFiscalIdentifier?: string;
  companySocialSecurityNumber?: string;
  companyCommonIdentifier?: string;
}

export interface CompanyResponse {
  companyId: number;
  companyName: string;
  companyAddress: string;
  companyIndustryCategory: string;
  companyCommercialRegister?: string;
  companyBusinessLicenseNumber?: string;
  companyFiscalIdentifier?: string;
  companySocialSecurityNumber?: string;
  companyCommonIdentifier?: string;
  companyIsVerified: boolean;
  companyVerificationStatus: string;
  userId: number;
  companyCreatedAt: string;
}

/**
 * Creates a new company for a user
 * @param userId The ID of the user who owns the company
 * @param companyData The company data
 * @returns Promise with the created company data
 */
export const createCompany = async (userId: string, companyData: CompanyRequest): Promise<CompanyResponse> => {
  try {
    const response = await apiClient.post(COMPANIES.CREATE_FOR_USER(userId), companyData);
    return response.data as CompanyResponse;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
};

/**
 * Gets a company by ID
 * @param companyId The ID of the company
 * @returns Promise with the company data
 */
export const getCompanyById = async (companyId: string): Promise<CompanyResponse> => {
  try {
    const response = await apiClient.get(COMPANIES.GET_BY_ID(companyId));
    return response.data as CompanyResponse;
  } catch (error) {
    console.error(`Error fetching company ${companyId}:`, error);
    throw error;
  }
};

/**
 * Gets a company by user ID
 * @param userId The ID of the user who owns the company
 * @returns Promise with the company data
 */
export const getCompanyByUserId = async (userId: string): Promise<CompanyResponse> => {
  try {
    const response = await apiClient.get(COMPANIES.GET_BY_USER(userId));
    return response.data as CompanyResponse;
  } catch (error) {
    console.error(`Error fetching company for user ${userId}:`, error);
    throw error;
  }
};

/**
 * Updates a company
 * @param companyId The ID of the company
 * @param companyData The updated company data
 * @returns Promise with the updated company data
 */
export const updateCompany = async (companyId: string, companyData: CompanyRequest): Promise<CompanyResponse> => {
  try {
    const response = await apiClient.put(COMPANIES.UPDATE(companyId), companyData);
    return response.data as CompanyResponse;
  } catch (error) {
    console.error(`Error updating company ${companyId}:`, error);
    throw error;
  }
};