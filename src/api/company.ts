// src/api/company.ts with enhanced logging
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
  console.log('📊 createCompany API - Parameters:');
  console.log('📊 userId:', userId);
  console.log('📊 companyData:', JSON.stringify(companyData, null, 2));
  
  const endpoint = COMPANIES.CREATE_FOR_USER(userId);
  console.log('📊 Endpoint:', endpoint);
  console.log('📊 Full URL:', apiClient.defaults.baseURL + endpoint);
  
  try {
    console.log('📊 Making API request...');
    const response = await apiClient.post(endpoint, companyData);
    console.log('📊 API Response Status:', response.status);
    console.log('📊 API Response Data:', JSON.stringify(response.data, null, 2));
    return response.data as CompanyResponse;
  } catch (error: any) {
    console.error('❌ Error creating company:', error);
    
    // Log more details if available
    if (error.response) {
      console.error('❌ Error response status:', error.response.status);
      console.error('❌ Error response data:', JSON.stringify(error.response.data, null, 2));
    }
    
    if (error.request) {
      console.error('❌ Error request:', error.request);
    }
    
    console.error('❌ Error message:', error.message);
    console.error('❌ Error stack trace:', error.stack);
    
    throw error;
  }
};