import { Button, FormControl, Input, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";
import Logo from "../components/Logo";
import path from "../path";

const Signup = () => {
  const navigate = useNavigate();
  const helperText = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cfPasswordRef = useRef();

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const name = nameRef.current.childNodes[0].value;
      const email = emailRef.current.childNodes[0].value;
      const password = passwordRef.current.childNodes[0].value;
      const cfPassword = cfPasswordRef.current.childNodes[0].value;
      if (password !== cfPassword) {
        helperText.current.textContent = "Confirm password does not match";
      } else {
        const response = await signup({ name, email, password });
        if (response.status === 200) {
          navigate("/login");
        } else {
          helperText.current.textContent = response.data.message;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack alignItems="center">
        <Logo size={40} />
        <Typography
          color="#ffffffb3"
          fontSize={18}
          fontWeight="bold"
          mt={2}
          mb={4}
        >
          Create Account
        </Typography>
        <form
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          onSubmit={submitHandle}
        >
          <Stack
            px={2}
            py={4}
            spacing={3}
            bgcolor="#fff"
            borderRadius={2}
            width={"100%"}
            maxWidth={350}
          >
            <FormControl>
              <Typography
                color={grey[400]}
                fontWeight="bold"
                textTransform="uppercase"
              >
                Full Name
              </Typography>
              <Input
                disableUnderline
                type="text"
                placeholder=""
                ref={nameRef}
              />
            </FormControl>
            <FormControl>
              <Typography
                color={grey[400]}
                fontWeight="bold"
                textTransform="uppercase"
              >
                Email
              </Typography>
              <Input
                disableUnderline
                type="email"
                placeholder="example@mail.com"
                ref={emailRef}
              />
            </FormControl>

            <FormControl>
              <Typography
                color={grey[400]}
                fontWeight="bold"
                textTransform="uppercase"
              >
                Password
              </Typography>
              <Input disableUnderline type="password" ref={passwordRef} />
            </FormControl>
            <FormControl>
              <Typography
                color={grey[400]}
                fontWeight="bold"
                textTransform="uppercase"
              >
                Confirm Password
              </Typography>
              <Input disableUnderline type="password" ref={cfPasswordRef} />

              <Typography
                ref={helperText}
                color="error"
                mt={1}
                ml={1}
              ></Typography>
            </FormControl>

            <Button
              color="dark"
              variant="contained"
              sx={{ py: 1.5 }}
              type="submit"
            >
              Sign up with email
            </Button>
          </Stack>
        </form>
        <Typography color="#fff" mt={3} mb={1} fontWeight="light">
          Already have an account?
        </Typography>
        <Link to={path.LOGIN}>
          <Typography color="#fff" fontWeight="bold">
            Log in
          </Typography>
        </Link>
      </Stack>
    </>
  );
};

export default Signup;
