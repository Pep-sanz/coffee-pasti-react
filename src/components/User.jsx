import { Popover, Button } from "antd";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../store/fetchApi";
import { auth } from "../auth/firebaseConfig";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

export default function User() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [popverOpen, setPoverOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getDataUser(user.uid));
      } else {
        console.log("Anda belum login");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handlePoperChange = (newOpen) => {
    setPoverOpen(newOpen);
  };

  const handleLogOut = async () => {
    signOut(auth);
  };
  return (
    <Popover
      content={
        <div className="w-full h-full flex flex-col gap-3">
          <ul>
            <li>User Name : {user.userName}</li>
            <li>Email : {user.email}</li>
          </ul>
          <div className="flex gap-3 justify-end">
            <Link>
              <Button onClick={handleLogOut}>Keluar</Button>
            </Link>
          </div>
        </div>
      }
      title={
        <div className="flex justify-center items-center gap-2">
          <strong>akun</strong>
          <FaUser />
        </div>
      }
      trigger="click"
      open={popverOpen}
      onOpenChange={handlePoperChange}
    >
      <Button className="button-antd text-lg">
        <FaUser />
      </Button>
    </Popover>
  );
}
