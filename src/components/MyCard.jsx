import { Card, CardBody, CardFooter } from "@chakra-ui/react";

export default function MyCard({ cardContent, footerContent }) {
  return (
    <>
      <Card>
        <CardBody className="card-body">
          <img src="" alt="product" />
          <div className="">
            <p>name product</p>
            <div className="">
              <p>price product</p>
              <p>rate product</p>
            </div>
          </div>
        </CardBody>
        <CardFooter>{footerContent}</CardFooter>
      </Card>
    </>
  );
}
