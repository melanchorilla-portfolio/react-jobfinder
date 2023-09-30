import axios from "axios";
import { useEffect, useState } from "react";
// import { Button } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { BiTimeFive, BiSolidEditLocation } from "react-icons/bi";
import { BsCash, BsCheckLg, BsXLg } from "react-icons/bs";

const JobVacancyList = () => {
  const [data, setData] = useState<any[]>([]);
  const [fetchData, setFetchData] = useState<any[]>([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy?page=${currentPage}`)
        .then((res) => {
          setData([...res.data.data]);
          setFetchData([res.data]);
          setCurrentPage(res.data.current_page)
        })
        .catch((err) => {
          console.log(err);
        });

      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value;

    setSearch(value)
  }


  return (
    <div className="container min-h-screen">
      <div className="h-[40vh] w-full bg-slate-300 flex justify-center items-center">
        <form className="flex gap-x-5">
          <input type="text" className="rounded-md w-64 max-w-md" onChange={handleChange} value={search} placeholder="Search..." />
          {/* <Button>Search</Button> */}
        </form>
      </div>
      <div className="mt-5">
        <h2 className="text-center font-semibold text-2xl mb-4">
          Jobs Available
        </h2>
        <div className="container mx-auto px-5 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
          {data.length ? (
            data.filter((searchParams) => {
              if(searchParams.title.toLowerCase().includes(search.toLowerCase())) {
                return true
              }
              if(searchParams.company_city.toLowerCase().includes(search.toLowerCase())) {
                return true
              }
              if(searchParams.company_name.toLowerCase().includes(search.toLowerCase())) {
                return true
              }
              return false
            })
            .map((res, index) => {
              return (
                <div
                  className="rounded-md shadow-lg overflow-hidde mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 p-5"
                  key={index}
                >
                  <span className="flex justify-between items-center gap-4">
                    <h1 className="text-lg font-semibold hover:text-purple-600 cursor-pointer">
                      {res.title}
                    </h1>
                    <span className="flex items-center text-gray-400 gap-1 text-sm">
                      {res.job_status ? <BsCheckLg /> : <BsXLg />}
                    </span>
                  </span>
                  <h6 className="text-[#ccc] border-b-2 mb-3">
                    {res.company_city}
                  </h6>

                  <span className="flex items-center text-gray-500 gap-1 text-base">
                    <BiSolidEditLocation /> {res.job_type}
                  </span>

                  <span className="flex items-center text-gray-500 gap-1 text-base">
                    <BiTimeFive /> {res.job_tenure}
                  </span>

                  <span className="flex items-center text-gray-500 gap-1 text-base">
                    <BsCash /> Rp. {res.salary_min} - Rp. {res.salary_max}
                  </span>

                  <div className="company flex items-center gap-2">
                    <img
                      src={res.company_image_url}
                      alt="logo"
                      className="w-[10%]"
                    />
                    <span className="text-[14px] py-[1rem] block group-hover:text-white">
                      {res.company_name}
                    </span>
                  </div>

                  <button className="border-2 rounded-lg block p-2.5 w-full text-sm font-semibold hover:bg-gray-100 group-hover/item:text-white">
                    Apply Now
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-center">No Data</p>
          )}
        </div>
      </div>
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
  );
};

export default JobVacancyList;
