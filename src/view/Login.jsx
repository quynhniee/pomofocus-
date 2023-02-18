import { Button, FormControl, Input, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import path from "../path";

const Login = () => {
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
          Login
        </Typography>
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
            <Input disableUnderline type="password" />
          </FormControl>
          <Button color="dark" variant="contained" sx={{ py: 1.5 }}>
            Log in with email
          </Button>
        </Stack>
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
