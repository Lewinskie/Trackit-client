import React from "react";

const UsersTableSummary = () => {
  return (
    <table className="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Role
          </th>
          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Amount
          </th>
          <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-gray-700 dark:text-gray-100">
          <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            Administrator
          </th>
          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            1
          </td>
          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="flex items-center">
              <span className="mr-2">70%</span>
              <div className="relative w-full">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                  <div
                    style={{ width: "70%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-100">
          <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            User
          </th>
          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            6
          </td>
          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="flex items-center">
              <span className="mr-2">40%</span>
              <div className="relative w-full">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                  <div
                    style={{ width: "40%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-100">
          <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            User
          </th>
          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            5
          </td>
          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="flex items-center">
              <span className="mr-2">45%</span>
              <div className="relative w-full">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                  <div
                    style={{ width: "45%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr className="text-gray-700 dark:text-gray-100">
          <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
            User
          </th>
          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            4
          </td>
          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="flex items-center">
              <span className="mr-2">60%</span>
              <div className="relative w-full">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                  <div
                    style={{ width: "60%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                  ></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTableSummary;
