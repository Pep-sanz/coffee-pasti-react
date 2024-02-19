import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebaseConfig";
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";

export default function FormLogin() {
  const navigate = useNavigate();

  const handleFinish = async (values) => {
    const { email, password } = values;
    await setPersistence(auth, browserSessionPersistence)
      .then(async () => {
        await signInWithEmailAndPassword(auth, email, password);
        message.success(`hallo user`);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="contener-form w-full h-screen flex justify-center items-center">
      <Form className="!max-w-[90vw] md:!max-w-[70vw] lg:!max-w-[50vw]" layout="vertical" onFinish={handleFinish} autoComplete="off">
        <div className="w-full h-32 flex justify-center items-center text-4xl font-semibold">
          <h5>
            <span className="text-primary-color">Log</span>In
          </h5>
        </div>
        <Form.Item label="email" name="email">
          <Input autoFocus placeholder="masukan email" />
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input.Password placeholder="masukan sandi" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Login</Button>
        </Form.Item>
        <p>
          Belum punya akun?
          <Link to="/register" className="underline text-blue-500 italic">
            {" "}
            register
          </Link>
        </p>
      </Form>
    </div>
  );
}
