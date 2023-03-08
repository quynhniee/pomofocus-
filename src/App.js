import { Container, Stack } from "@mui/material";
import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Context from "./store/Context";
import path from "./path";
import { useDispatch, useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import { authAction } from "./redux/auth/auth";
import { setHeader } from "./api";

const Login = lazy(() => import("./views/Login"));
const Signup = lazy(() => import("./views/Signup"));
const Home = lazy(() => import("./views/Home"));

const App = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuth);
	const token = localStorage.getItem("token");
	const { decodedToken, isExpired } = useJwt(token);
	const { currentThemeColor } = useContext(Context);
	const [themeColor, setThemeColor] = useState(currentThemeColor);
	useEffect(() => {
		setThemeColor(currentThemeColor);
	}, [currentThemeColor]);
	useEffect(() => {
		if (token && !isExpired) {
			dispatch(authAction.login());
			setHeader(token);
		} else {
			dispatch(authAction.logout());
		}
	}, [dispatch, isExpired, token]);

	return (
		<>
			<Stack
				sx={{
					backgroundColor: themeColor,
					minHeight: "100vh",
					transition: "0.7s all ease",
				}}
				justifyContent="center"
			>
				<Container maxWidth="sm">
					<Suspense>
						<BrowserRouter>
							<Routes>
								{!isAuth && isAuth !== null && (
									<Route
										path={path.LOGIN}
										element={<Login />}
									/>
								)}
								{!isAuth && isAuth !== null && (
									<Route
										path={path.SIGNUP}
										element={<Signup />}
									/>
								)}
								{!isAuth && isAuth !== null && (
									<Route
										path="*"
										element={
											<Navigate to={path.LOGIN} replace />
										}
									/>
								)}
								{isAuth && (
									<Route
										index
										path={path.APP}
										element={<Home />}
									/>
								)}
								{isAuth && (
									<Route
										path="*"
										element={<Navigate to={path.APP} />}
									/>
								)}
							</Routes>
						</BrowserRouter>
					</Suspense>
				</Container>
			</Stack>
		</>
	);
};

export default App;
