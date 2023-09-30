import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import { BiTimeFive, BiSolidEditLocation } from "react-icons/bi";
import { BsCash, BsCheckLg } from "react-icons/bs";


const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
        });

      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <div className="min-h-screen">
        <Carousel slide={false} className="h-[60vh]">
          <img alt="..." src={img1} />
          <img alt="..." src={img2} />
          <img alt="..." src={img3} />
        </Carousel>

        <div className="mt-5">
          <h2 className="text-center font-semibold text-2xl my-3">
            Recent Jobs
          </h2>
          <div className="container mx-auto px-5 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
            {data.length ? (
              data.map((res, index) => {
                return (
                  <div className="rounded-md shadow-lg overflow-hidde mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 p-5" key={index}>
                    <span className="flex justify-between items-center gap-4">
                      <h1 className="text-lg font-semibold hover:text-purple-600 cursor-pointer">
                        {res.title}
                      </h1>
                      <span className="flex items-center text-gray-400 gap-1 text-sm">
                        <BsCheckLg />
                      </span>
                    </span>
                    <h6 className="text-[#ccc] border-b-2 mb-3">{res.company_city}</h6>

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
                      <img src={res.company_image_url} alt="logo" className="w-[10%]" />
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
      </div>
    </>
  );
};

export default Home;
