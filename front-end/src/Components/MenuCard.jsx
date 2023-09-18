import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
const Menucard=()=> {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://media.istockphoto.com/id/1210991949/photo/gujiya-samosa-an-indian-holi-special-snacks.jpg?s=612x612&w=0&k=20&c=oNhVEnIN42bT_OrQjA19NcgmDh2-JQ_6jPpVUjsEaQ4="
            alt="card-image"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="flex justify-center mb-2">
            Sweets
          </Typography>
          {/* <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography> */}
        </CardBody>
        <CardFooter className="flex justify-center pt-0">
          <Button>View Products</Button>
        </CardFooter>
      </Card>
    );
  }

  export default Menucard