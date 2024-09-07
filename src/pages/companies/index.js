// List all companies
// pages/companies/index.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import withAuth from "../../lib/with-auth";
import { companies as initialCompanies } from "../../lib/dummy-data";
import Btn from "../../utils/btn";

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching companies from a backend
    setCompanies(initialCompanies);
  }, []);

  const handleCreateCompany = () => {
    router.push("/companies/new");
  };

  return (
    <div className="container mx-auto px-4 py-6 ">
      <div className="flex flex-col md:flex-row md:justify-between mb-9 mt-9 gap-4">
        <h1 className="font-semibold text-3xl uppercase text-gray-400 mt-6">
          Companies
        </h1>
        <Btn
          className="flex font-semibold items-center py-2 px-4 border border-gray-300 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
          onClick={handleCreateCompany}
        >
          Create Company
        </Btn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company) => (
          <li
            key={company.id}
            className="bg-white rounded-lg shadow-md p-4 min-h-[270px] flex flex-col items-center"
          >
            <img
              src={company.logo}
              className="w-24 h-24 object-contain mb-4 rounded-full"
            />
            <h2 className="text-lg font-bold text-gray-600">{company.name}</h2>
            <hr className="border-t-1 w-full mb-4 " />
            <p className="text-gray-700">{company.description}</p>
            <div className="flex w-full">
              <Link
                href={`/companies/${company.id}`}
                className="flex justify-start items-center font-extralight text-gray-500 mt-4 underline hover:text-blue-500 transition-colors duration-300 ease-in-out"
              >
                See details
              </Link>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default withAuth(Company);
