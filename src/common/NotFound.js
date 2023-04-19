import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Container maxWidth="sm" style={{ textAlign: "center" }}>
            <div className="px-2 sm:px-4 lg:px-8 py-7">
                <div className="flex items-center justify-center w-full h-screen">
                    <div className="px-2 sm:px-4 lg:py-12">
                        <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                            <h1 className="font-bold text-purple-color text-8xl sm:text-9xl">
                                404
                            </h1>
                            <p className="mb-2 text-xl sm:text-2xl font-bold text-center text-gray-800 md:text-3xl">
                                <span className="text-red-500">Oops!</span> Page not
                                found
                            </p>
                            <p className="mb-8 text-center text-gray-500 md:text-lg">
                                The page you’re looking for doesn’t exist.
                            </p>
                            <Link
                                to="/"
                                className="px-6 py-2 text-sm font-semibold text-white bg-orange-color rounded-sm capitalize"
                            >
                                Go home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NotFoundPage;
