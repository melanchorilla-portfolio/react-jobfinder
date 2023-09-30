import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const FormJob = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post("https://dev-example.sanbercloud.com/api/job-vacancy", input, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        navigate("/dashboard/job-vacancy-list");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">
            Create Data
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="ex. Software Developer"
                    onChange={handleChange}
                    value={input.title}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="job_description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job description
              </label>
              <div className="mt-2">
                <textarea
                  id="job_description"
                  name="job_description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={input.job_description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="job_qualification"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job qualification
              </label>
              <div className="mt-2">
                <textarea
                  id="job_qualification"
                  name="job_qualification"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={input.job_qualification}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="job_type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job type
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="job_type"
                    id="job_type"
                    autoComplete="job_type"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={input.job_type}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="job_tenure"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job tenure
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="job_tenure"
                    id="job_tenure"
                    autoComplete="job_tenure"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={input.job_tenure}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="job_status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job status
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="number"
                    name="job_status"
                    id="job_status"
                    autoComplete="job_status"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    min="0"
                    max="1"
                    value={input.job_status}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="company_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    autoComplete="company_name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={input.company_name}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="company_image_url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company image URL
              </label>
              <div className="mt-2">
                <input
                  id="company_image_url"
                  name="company_image_url"
                  type="text"
                  autoComplete="company_image_url"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={input.company_image_url}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="company_city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company city
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="company_city"
                    id="company_city"
                    autoComplete="company_city"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={input.company_city}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="salary_min"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Minimum salary
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="salary_min"
                  id="salary_min"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={input.salary_min}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="salary_max"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Maximum salary
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="salary_max"
                  id="salary_max"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={input.salary_max}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormJob;
