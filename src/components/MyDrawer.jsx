
export default function MyDrawer({ isOpen, onClose, drawerBody }) {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="md">
        <div className="drawer-content">
          <DrawerBody>{drawerBody}</DrawerBody>
        </div>
      </Drawer>
    </>
  );
}
