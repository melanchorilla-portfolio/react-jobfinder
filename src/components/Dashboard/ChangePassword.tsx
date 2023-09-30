import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Button, Card, Label, TextInput } from "flowbite-react";

const ChangePassword = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({ current_password: "", new_password: "", new_confirm_password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleChangePassword = (event: React.FormEvent) => {
    event.preventDefault();

    axios
      .post(`https://dev-example.sanbercloud.com/api/change-password `, input, {
        headers: { Authorization: "Bearer " + Cookies.get("token") }
      })
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container sm:w-full md:w-1/2 lg:w-2/5 mx-auto px-5 min-h-[80vh]">
      <h2 className="font-semibold text-3xl text-center py-5">Change Password</h2>
      <Card>
        <form className="flex flex-col gap-4" onSubmit={handleChangePassword}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="current_password" value="Current password" />
            </div>
            <TextInput
              onChange={handleChange}
              value={input.current_password}
              name="current_password"
              id="current_password"
              required
              type="password"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="new_password" value="New password" />
            </div>
            <TextInput
              onChange={handleChange}
              value={input.new_password}
              name="new_password"
              id="new_password"
              required
              type="password"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="new_confirm_password" value="Confirm password" />
            </div>
            <TextInput
              onChange={handleChange}
              value={input.new_confirm_password}
              name="new_confirm_password"
              id="new_confirm_password"
              required
              type="password"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default ChangePassword;
