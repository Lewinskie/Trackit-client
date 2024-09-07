// lib/api.js

// Fetch list of companies
export async function fetchCompanies() {
  const res = await fetch("/api/companies"); // Example endpoint
  if (!res.ok) throw new Error("Failed to fetch companies");
  return await res.json();
}

// Create a new company
export async function createCompany(company) {
  const res = await fetch("/api/companies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(company),
  });
  if (!res.ok) throw new Error("Failed to create company");
  return await res.json();
}

// Fetch a company's details by ID
export async function fetchCompanyDetails(id) {
  const res = await fetch(`/api/companies/${id}`);
  if (!res.ok) throw new Error("Failed to fetch company details");
  return await res.json();
}
