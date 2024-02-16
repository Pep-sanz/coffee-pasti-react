import { Modal } from "antd";
const MyModal = ({ open, onOk, onCancel, modalBody }) => {
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel} closable={false} footer={null} motionPreset="slideInBottom" className="!w-screen !max-w-[90vw] sm:!max-w-[80vw]">
      <div>{modalBody}</div>
    </Modal>
  );
};

export default MyModal;
