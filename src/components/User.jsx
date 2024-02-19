import { Popover, Button } from "antd";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../store/fetchApi";
import { auth } from "../auth/firebaseConfig";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";

export default function User() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [popverOpen, setPoverOpen] = useState(false);

  useEffect(() => {
    dispatch(getDataUser());
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
        <div className="w-full h-full flex flex-col gap-8">
          <ul>
            {currentUser.map((res) => (
              <li key={res.id}>User Name : {res.userName}</li>
            ))}
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
