import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../auth/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export default function FormRegister() {
  const navigate = useNavigate();
  const handleFinish = async (values) => {
    try {
      const { email, password, userName } = values;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      message.success({
        content: "akun berhasil di buat, silahkan lakukan login terlebih dahulu",
        duration: 8,
      });
      navigate("/login");
      const userCollectionRef = collection(db, "users");
      const userDocRef = doc(userCollectionRef, user.uid);
      await setDoc(userDocRef, { userName, email });
    } catch (error) {
      console.log(error.message);
      message.error({
        content: error.message,
        duration: 5,
      });
    }
  };

  return (
    <div className="contener-form w-full h-screen flex justify-center items-center">
      <Form className="!max-w-[90vw] md:!max-w-[70vw] lg:!max-w-[50vw]" layout="vertical" onFinish={handleFinish} autoComplete="off">
        <div className="w-full h-32 flex justify-center items-center text-4xl font-semibold">
          <h5>
            <span className="text-primary-color">Register </span>Akun
          </h5>
        </div>
        <Form.Item label="userName" name="userName">
          <Input autoFocus placeholder="masukan userName" />
        </Form.Item>
        <Form.Item label="email" name="email">
          <Input autoFocus placeholder="masukan email" />
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input.Password placeholder="masukan sandi" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">register</Button>
        </Form.Item>
        <p>
          Sudah punya akun?{" "}
          <Link to="/login" className="underline text-blue-500 italic">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
}
