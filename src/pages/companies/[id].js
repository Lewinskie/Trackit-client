import React from "react";
import withAuth from "../../lib/with-auth";
import { useRouter } from "next/router";
import { companies } from "../../lib/dummy-data"; // Import the dummy data
import Error from "../../lib/error";
import Head from "next/head";

const CompanyDetails = () => {
  const router = useRouter();

  const { id } = router.query; // Get the company ID from the URL

  const company = companies.find((company) => company.id == parseInt(id));

  if (!company) {
    return <Error error="page not found" />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Head>
        <title>{`About ${company.name}`}</title>
      </Head>
      <h1 className="text-3xl font-bold mb-9 mt-6 text-gray-500">
        {company.name}
      </h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        {/* Company Logo */}
        <div className="mb-4 flex flex-col items-center w-full">
          <img
            src={company.logo}
            alt={`${company.name} Logo`}
            className="w-32 h-32 object-contain mb-4 rounded-full"
          />
        </div>
        <p className="mb-6 text-gray-500">{company.description}</p>
      </div>

      {/* Placeholder for company assets */}
      <h2 className="text-2xl text-gray-500 font-bold mb-6 mt-9">
        Company Assets
      </h2>
      {/* List company assets here */}
      <div className="bg-white rounded-lg shadow-md p-4 min-h-[50px]"></div>
    </div>
  );
};

export default withAuth(CompanyDetails);
