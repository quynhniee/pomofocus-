import { Button, FormControl, Input, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { login, setHeader } from "../api";
import Logo from "../components/Logo";
import path from "../path";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/auth/auth";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const helperText = useRef("");
  const dispatch = useDispatch("");

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const email = emailRef.current.childNodes[0].value;
      const password = passwordRef.current.childNodes[0].value;
      const response = await login({ email, password });
      if (response.status === 200) {
        setHeader(response.data.token);
        dispatch(authAction.login());
      } else {
        helperText.current.textContent = response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Stack alignItems="center" justifyContent="center">
        <Logo size={40} />
        <Typography
          color="#ffffffb3"
          fontSize={18}
          fontWeight="bold"
          mt={2}
          mb={4}
        >
          Login
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
              <Input ref={passwordRef} disableUnderline type="password" />
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
              type={"submit"}
            >
              Log in with email
            </Button>
          </Stack>
        </form>
        <Typography color="#fff" mt={3} mb={1} fontWeight="light">
          Do not have an account?
        </Typography>
        <Link to={path.SIGNUP}>
          <Typography color="#fff" fontWeight="bold">
            Create account
          </Typography>
        </Link>
      </Stack>
    </>
  );
};

export default Login;
