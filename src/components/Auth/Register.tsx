import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Label, TextInput } from "flowbite-react";

const Register = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    image_url: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    axios
      .post(`https://dev-example.sanbercloud.com/api/register `, input)
      .then((res) => {
        let { token } = res.data;
        Cookies.set("token", token);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container sm:w-full md:w-1/2 lg:w-2/5 mx-auto px-5 min-h-[80vh]">
      <h2 className="font-semibold text-3xl text-center py-5">Register</h2>
      <Card>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              onChange={handleChange}
              value={input.name}
              name="name"
              id="name"
              placeholder="Your name"
              required
              type="text"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Image URL" />
            </div>
            <TextInput
              onChange={handleChange}
              value={input.image_url}
              name="image_url"
              id="image_url"
              placeholder="Insert image URL"
              type="text"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              onChange={handleChange}
              value={input.email}
              name="email"
              id="email"
              placeholder="name@email.com"
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              onChange={handleChange}
              value={input.password}
              name="password"
              id="password"
              required
              type="password"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login" className="text-cyan-600 hover:text-blue-400">
              Login
            </Link>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
