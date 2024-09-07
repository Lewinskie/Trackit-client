import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import Head from "next/head";

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
        className="p-4 border-dashed border-2 border-gray-300 rounded-md text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>Drag & drop a company logo here, or click to select a file</p>
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
        <Form className="w-full max-w-lg mx-auto p-4 space-y-6 mt-9">
          <Head>
            <title>Add New Company</title>
          </Head>
          {/* Company Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Enter company name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          {/* Company Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <Field
              id="description"
              name="description"
              as="textarea"
              placeholder="Enter company description"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>

          {/* Company Logo */}
          <div>
            <label
              htmlFor="logo"
              className="block text-sm font-medium text-gray-700"
            >
              Company Logo
            </label>
            <MyDropzone setFieldValue={setFieldValue} />
            <ErrorMessage
              name="logo"
              component="div"
              className="text-red-600 text-sm"
            />

            {/* Preview the selected logo */}
            {logoPreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-500">Logo Preview:</p>
                <img
                  src={logoPreview}
                  alt="Company Logo Preview"
                  className="w-32 h-32 object-contain"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {isSubmitting ? "Submitting..." : "Create Company"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCompanyForm;
