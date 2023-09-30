import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Table, Pagination } from "flowbite-react";
import { Link } from "react-router-dom";

const JobVacancyList = () => {
  const [data, setData] = useState<any[]>([]);
  const [fetchData, setFetchData] = useState<any[]>([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id: number) => {
    axios
      .delete("https://dev-example.sanbercloud.com/api/job-vacancy/" + id, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((response) => {
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy?page=${currentPage}`)
        .then(function (response) {
          // handle success
          setData([...response.data.data]);
          setFetchData([response.data]);
          setCurrentPage(response.data.current_page)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <div className="container px-10 py-5">
        <h2 className="text-lg font-semibold mb-2">List Job</h2>
        <Table className="w-full h-full">
          <Table.Head>
            <Table.HeadCell>Job Title</Table.HeadCell>
            <Table.HeadCell>Company Name</Table.HeadCell>
            <Table.HeadCell>City</Table.HeadCell>
            <Table.HeadCell>Job Type</Table.HeadCell>
            <Table.HeadCell>Job Tenure</Table.HeadCell>
            <Table.HeadCell>Job Status</Table.HeadCell>
            <Table.HeadCell>Salary</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.length ? (
              data.map((res) => {
                return (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={res.id}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {res.title}
                    </Table.Cell>
                    <Table.Cell>{res.company_name}</Table.Cell>
                    <Table.Cell>{res.company_city}</Table.Cell>
                    <Table.Cell>{res.job_type}</Table.Cell>
                    <Table.Cell>{res.job_tenure}</Table.Cell>
                    <Table.Cell>
                      {res.job_status ? "Available" : "Not Available"}
                    </Table.Cell>
                    <Table.Cell>
                      {res.salary_min} - {res.salary_max}
                    </Table.Cell>
                    <Table.Cell>
                      <Link
                        to={`/dashboard/job-vacancy-list/form/${res.id}`}
                        className="font-medium text-cyan-600 hover:underline cursor-pointer dark:text-cyan-500"
                      >
                        <p>Edit</p>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <button
                        className="font-medium text-cyan-600 hover:underline cursor-pointer dark:text-cyan-500"
                        onClick={() => handleDelete(res.id)}
                      >
                        <p>Delete</p>
                      </button>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            ) : (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell
                  className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                  colSpan={8}
                >
                  No Data
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        {fetchData.length ? (
        fetchData.map((res, index) => {
          return (
            res.last_page > 1 ?
              <div className="flex justify-center m-5" key={index}>
                <Pagination
                  currentPage={currentPage}
                  onPageChange={(page) => {
                    setCurrentPage(page)
                    setFetchStatus(true)
                  }}
                  totalPages={res.last_page}
                />
              </div> 
            : <div></div>
          );
        })
      ) : (
        <div></div>
      )}
      </div>
    </>
  );
};

export default JobVacancyList;
