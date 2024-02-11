import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";

export default function MyDrawer({ isOpen, onClose, drawerBody }) {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent className="drawer-content">
          <DrawerHeader>
            <h5>cart</h5>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>{drawerBody}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
