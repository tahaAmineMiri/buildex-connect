# Welcome to Incom project

## Project info

**URL**: https://inconn.netlify.app/

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/tahaAmineMiri/buildex-connect.git

# Step 2: Navigate to the project directory.
cd buildex-connect

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Cahier de Charge

### Project Name: InCon Marketplace

**Version**: 1.0  
**Date**: 20 – 03 – 2025  
**Prepared by**: Taha & Ammine

---

### 1. Introduction

#### 1.1 Purpose

This document outlines the requirements for InCon, a B2B marketplace connecting construction material buyers and sellers. It defines functional workflows, user roles, subscription models, and system constraints.

#### 1.2 Scope

- **Included**: User registration (buyers/sellers), product listings, RFQ/cart functionality, subscription models, admin verification, and manual payment processing.
- **Excluded**: Third-party payment gateway integration, AI-driven recommendations, and multi-language support.

#### 1.3 Audience

- **Client**: InCon Marketplace Owner
- **Users**: Buyers, Sellers, Admin
- **Development Team**: Developers, QA Engineers, UI/UX Designers

#### 1.4 Definitions & Acronyms

- **RFQ**: Request for Quotation
- **R.C.**: Commercial Register
- **Patente**: Business License
- **I.F.**: Fiscal Identifier
- **C.N.S.S.**: National Social Security Fund
- **ICE**: Common Company Identifier

---

### 2. Project Overview

#### 2.1 Objectives

1. Create a secure platform for construction material transactions.
2. Streamline buyer/seller registration with document verification.
3. Implement subscription models for platform access.
4. Enable admins to manage users, products, and payments.

#### 2.2 Stakeholders

| Role    | Responsibilities                            |
| ------- | ------------------------------------------- |
| Client  | Define business goals, approve deliverables |
| Buyers  | Purchase materials via subscriptions        |
| Sellers | List products, manage sales                 |
| Admin   | Verify users, manage platform operations    |

#### 2.3 Constraints

- **Technical**: Manual payment verification required.
- **Legal**: Compliance with business document checks (R.C., Patente).
- **Budget**: Limited to $X for development.

---

### 3. Functional Requirements

#### 3.1 User Roles

| Role   | Permissions                                                              |
| ------ | ------------------------------------------------------------------------ |
| Buyer  | Browse products, add to RFQ/cart (post-subscription), review products    |
| Seller | List products, view orders, manage inventory                             |
| Admin  | CRUD operations, verify companies, manage payments, update shipping info |

---

### 4. User History

#### 4.1 Initial Access

- User entered the InCon website and viewed the home page.
- User observed the marketplace's purpose: connecting construction material buyers and sellers.
- User explored the product page "Construction Materials":
  - User observed product card details (image, stock, name, rating, description, price).
  - User reviewed search and filter options.
  - User observed the "Quick View" and "Add to RFQ" buttons. However, they cannot add items to the cart unless subscribed.
- User noted the availability of role-specific registration.

#### 4.2 Seller/Buyer Registration Initiation

- User selected the "Seller" registration option.

#### 4.3 Seller/Buyer Registration Steps

- **Step 1 (Company Information):**
  - User filled out the company registration form, providing:
    - Company Name
    - Company Address
    - Selected Industry Category
    - **R.C/Commercial Register**
    - **Patente/Business License Number**
    - **I.F/Fiscal Identifier**
    - **C.N.S.S/National Social Security Fund**
    - **ICE**: **Common Company Identifier**
  - User proceeded to the next registration step.
- **Step 2 (Representative Information):**
  - User entered their personal contact details, including:
    - Full Name
    - Position in Company
    - Business Email
    - Business Phone
  - User proceeded to the next registration step.
- **Step 3 (Verification):**
  - User reviewed the verification process (email, business, document).
  - User confirmed information accuracy and agreed to Terms of Service and Privacy Policy.
  - User completed the registration process.
  - User will now check their email for the verification email.
  - User will await further contact for the business verification and document review.

### 4.4 User Registration and Subscription Flow

- After receiving the verification email, the user can:
  - Subscribe to access purchasing functionality.
- Two subscription models are available:
  - **Monthly/Annual subscription**: $400 per year.
  - **Per-product subscription**: The platform takes a commission based on a recommended percentage per product sold.
- **Payment Process:**
  - In some cases, payment will be manual. The buyer will use the company's bank information from the website and process the transaction manually through their bank.
  - Once the payment is received, the admin is responsible for manually verifying and confirming the transaction within the platform.

---

### 🛠️ Admin Panel Functionalities

- The admin can perform **CRUD operations** (Create, Read, Update, Delete).
- The admin is responsible for verifying the **legitimacy of subscribing companies** by checking:
  - Their **Commercial Register (R.C.)**.
  - The **official company name**.

---

### 🛒 Buyer and Seller Functionalities

- **Buyers**:
  - Can add products to their cart and complete purchases after subscription.
- **Sellers**:
  - Can list products for sale on the platform.
  - Each product must include all necessary details, including:
    - **Product description**
    - **Price**
    - **Category**
    - **Other relevant metadata**
- **Shipping information**:
  - Managed and filled by the **admin**.
- Each product will support **user reviews**.

---

### 5. UML Class Diagram

#### 5.1 Overview

Models the system’s structure, including users, products, subscriptions, and admin interactions.

#### 5.2 Class Diagram

**Visual Representation**:  
[View UML Class Diagram here](https://drive.google.com/file/d/1kt56xgGTW-o_9ut7zXexrEE6qr1CUITJ/view?usp=sharing)
