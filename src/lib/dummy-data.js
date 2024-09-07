// lib/dummyData.js

export let companies = [
  {
    id: "1",
    name: "Tech Innovators Inc.",
    description: "A leading company in tech innovations.",
    industry: "Technology",
    location: "San Francisco, CA",
    logo: "https://img.freepik.com/free-vector/hand-drawn-data-logo-template_23-2149211792.jpg?t=st=1725606118~exp=1725609718~hmac=494ea9d72b0e967477e705c3fa73406344c5ef0314830eb8206d01982e1dae8c&w=740",
  },
  {
    id: "2",
    name: "HealthPlus",
    description: "Providing excellent healthcare services.",
    industry: "Healthcare",
    location: "New York, NY",
    logo: "https://img.freepik.com/free-vector/hand-drawn-data-logo-template_23-2149211792.jpg?t=st=1725606118~exp=1725609718~hmac=494ea9d72b0e967477e705c3fa73406344c5ef0314830eb8206d01982e1dae8c&w=740",
  },
  {
    id: "3",
    name: "EcoGoods",
    description: "Sustainable and eco-friendly products.",
    industry: "Retail",
    location: "Austin, TX",
    logo: "https://img.freepik.com/free-vector/hand-drawn-data-logo-template_23-2149211792.jpg?t=st=1725606118~exp=1725609718~hmac=494ea9d72b0e967477e705c3fa73406344c5ef0314830eb8206d01982e1dae8c&w=740",
  },
  {
    id: "4",
    name: "EcoGoods",
    description: "Sustainable and eco-friendly products.",
    industry: "Retail",
    location: "Austin, TX",
    logo: "https://img.freepik.com/free-vector/hand-drawn-data-logo-template_23-2149211792.jpg?t=st=1725606118~exp=1725609718~hmac=494ea9d72b0e967477e705c3fa73406344c5ef0314830eb8206d01982e1dae8c&w=740",
  },
];

// Function to simulate creating a new company
export const createCompany = ({
  name,
  description,
  industry,
  location,
  logo,
}) => {
  const newCompany = {
    id: (companies.length + 1).toString(),
    name,
    description,
    industry,
    location,
    logo:
      logo ||
      "https://img.freepik.com/free-vector/letter-e-logo-icon-colorfuell_125964-396.jpg?t=st=1725606494~exp=1725610094~hmac=7a91ad4e41cf77feab30bd0fc906f34e0d075e02b3e08bc310de742e9c1b8cc1&w=740", // Default logo if none is provided
  };
  companies.push(newCompany);
  return newCompany;
};

// Function to fetch a company by ID
export const fetchCompanyById = (id) => {
  return companies.find((company) => company.id === id);
};
