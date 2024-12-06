import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <Button
                onClick={scrollToTop}
                variant="contained"
                color="secondary"
                style={{
                    position: "fixed",
                    bottom: "20px",

                    borderRadius: "50%",
                    minWidth: "50px",
                    minHeight: "50px",
                    zIndex: 1000,
                }}
            >
                <ArrowUpward />
            </Button>
        )
    );
};

export default ScrollToTop;
