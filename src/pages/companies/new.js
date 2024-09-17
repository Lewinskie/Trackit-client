import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import Head from "next/head";
import withAuth from "../../lib/with-auth";

// Validation Schema
const companySchema = Yup.object().shape({
  name: Yup.string().required("Company name is required"),
  description: Yup.string().required("Description is required"),
  logo: Yup.mixed().required("A company logo is required"),
});

const CreateCompanyForm = ({ onSubmit }) => {
  const [logoPreview, setLogoPreview] = useState(null);

  // Handle drag and drop
  const MyDropzone = ({ setFieldValue }) => {
    const onDrop = (acceptedFiles) => {
      setFieldValue("logo", acceptedFiles[0]);
      setLogoPreview(URL.createObjectURL(acceptedFiles[0]));
    };

    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: "image/*",
    });

    return (
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center p-6 border-dashed border-2 rounded-md text-center cursor-pointer transition-colors duration-300 border-light-card-bg dark:border-card-bg hover:border-light-link dark:hover:border-link"
      >
        <input {...getInputProps()} className="hidden" />
        <p className="text-light-text-p dark:text-text-p">
          Drag & drop a company logo here
        </p>
        <p className="text-light-text-p dark:text-text-p">
          or click to select a file
        </p>
      </div>
    );
  };

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        logo: null,
      }}
      validationSchema={companySchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="w-full max-w-lg mx-auto p-6 space-y-6 mt-9 bg-light-card-bg dark:bg-card-bg rounded-lg shadow-md transition-colors duration-300">
          <Head>
            <title>Add New Company</title>
          </Head>

          {/* Form Heading */}
          <h1 className="text-2xl font-bold text-light-text-h1 dark:text-text-h1 text-center">
            Create New Company
          </h1>

          {/* Company Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-light-text-h2 dark:text-text-h2"
            >
              Company Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Enter company name"
              className="mt-1 block w-full p-3 border border-light-card-bg dark:border-card-bg rounded-md shadow-sm focus:ring focus:ring-light-link dark:focus:ring-link focus:border-light-link dark:focus:border-link transition duration-300 bg-light-card-bg dark:bg-card-bg text-light-text-h1 dark:text-text-h1"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600 text-sm mt-1"
            />
          </div>

          {/* Company Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-light-text-h2 dark:text-text-h2"
            >
              Description
            </label>
            <Field
              id="description"
              name="description"
              as="textarea"
              placeholder="Enter company description"
              rows="4"
              className="mt-1 block w-full p-3 border border-light-card-bg dark:border-card-bg rounded-md shadow-sm focus:ring focus:ring-light-link dark:focus:ring-link focus:border-light-link dark:focus:border-link transition duration-300 bg-light-card-bg dark:bg-card-bg text-light-text-h1 dark:text-text-h1"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-600 text-sm mt-1"
            />
          </div>

          {/* Company Logo */}
          <div>
            <label
              htmlFor="logo"
              className="block text-sm font-semibold text-light-text-h2 dark:text-text-h2"
            >
              Company Logo
            </label>
            <MyDropzone setFieldValue={setFieldValue} />
            <ErrorMessage
              name="logo"
              component="div"
              className="text-red-600 text-sm mt-1"
            />

            {/* Preview the selected logo */}
            {logoPreview && (
              <div className="mt-4">
                <p className="text-sm text-light-text-p dark:text-text-p">
                  Logo Preview:
                </p>
                <img
                  src={logoPreview}
                  alt="Company Logo Preview"
                  className="w-32 h-32 object-contain mt-2 border border-light-card-bg dark:border-card-bg rounded-md"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 font-bold text-light-text-h1 dark:text-text-h1 rounded-md transition duration-300 ${
                isSubmitting
                  ? "bg-light-btn dark:bg-btn opacity-70 cursor-not-allowed"
                  : "bg-light-btn dark:bg-btn hover:bg-light-link dark:hover:bg-link"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Create Company"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default withAuth(CreateCompanyForm);
