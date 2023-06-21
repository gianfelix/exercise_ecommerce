import {
  Box,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  // Form,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import {
  useFormik,
  // Formik,
  // Form,
  // Field,
  // ErrorMessage
} from "formik";
import axios from "axios";
import * as Yup from "yup";

// const LoginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email address format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(7, "Password must be 7 characters minimum")
//     .max(15, "Password must be less than 16 character")
//     .matches(/[A-Z]/, "Password requires an uppercase letter")
//     .matches(/[0-9]/, "Password requires a number")
//     .required("Password is required"),
//   confirmpassword: Yup.string().oneOf(
//     [Yup.ref("password"), null],
//     'Must match "password" field value'
//   ),
// });

// const fetchUser = async (email) => {
//   const { data } = await axios.get(
//     `http://localhost:3000/users?email=${email}`
//   );
//   console.log(data);
// };
export const RegisterModal = ({ isOpen, onClose }) => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: LoginSchema,
  //     onSubmit: (values) => {
  //       fetchUser(values.email);
  //       localStorage.setItem("login", values.email);
  //     },
  //   });
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              sx={{
                height: "500px",
                padding: "20px",
              }}
            >
              <form>
                <VStack>
                  <FormControl
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <FormLabel >Full Name:</FormLabel>
                    <Input
                      id="fullname"
                      name="fullname"
                      type="text"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <FormLabel >Address :</FormLabel>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <FormLabel htmlFor="email">Email :</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <FormLabel htmlFor="password">Password :</FormLabel>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                    />
                  </FormControl>

                  <Button type="submit" width="full">
                    Register
                  </Button>
                </VStack>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
