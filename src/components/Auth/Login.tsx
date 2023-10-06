import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";

const Login = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    axios
      .post(`https://dev-example.sanbercloud.com/api/login `, input)
      .then((res) => {
        let { token, user } = res.data;
        Cookies.set("token", token);
        localStorage.setItem('user', JSON.stringify(user))
        Swal.fire(
          'Congratulations!',
          'You logged in!',
          'success'
        )
        navigate("/dashboard");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container sm:w-full md:w-1/2 lg:w-2/5 mx-auto px-5 min-h-[80vh]">
      <h2 className="font-bold text-3xl text-center py-5">Login</h2>
      <Card>
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
            <Link to="/register" className="text-cyan-600 hover:text-blue-400">Create account</Link>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  )
}

export default Login