import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import reactSvg from '../../assets/react.svg';

const Profile = () => {
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    setUser([JSON.parse(localStorage.getItem("user") || "")]);
  }, []);

  return (
    <div className="w-1/3 mx-auto mt-5">
      {user.map((res) => {
        return (
          <Card key={res.id}>
            <div className="flex flex-col items-center pb-10">
              <img
                alt={res.name}
                className="mb-3 rounded-full shadow-lg"
                height="96"
                src={res.image_url ?? reactSvg }
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {res.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {res.email}
              </span>

            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Profile;
