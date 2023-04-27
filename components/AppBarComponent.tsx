"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = ["Home", "About", "Services"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="default">
      <Container>
        <Toolbar disableGutters>
          <Box>
            <Link href="/">
              <div className="">
                <h1 className="text-black w-80 text-2xl">Bernard Marr & Co.</h1>
                <h3 className="text-md leading-3 text-black">
                  Future . Business . Success
                </h3>
              </div>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }} className="ml-auto">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                className="flex-col  items-start bg-white mx-10"
              >
                <Typography
                  textAlign="center"
                  className="py-3 hover:bg-black hover:text-white px-7 rounded"
                >
                  <Link href="/">Home</Link>
                </Typography>
                <Typography
                  textAlign="center"
                  className="py-3 hover:bg-black hover:text-white px-7 rounded"
                >
                  <Link href="/about">About</Link>
                </Typography>
                <Typography
                  textAlign="center"
                  className="py-3 hover:bg-black hover:text-white px-7 rounded"
                >
                  <Link href="/services">Services</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }} className="ml-auto">
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              <Link
                href="/"
                className="text-black px-3 py-1 hover:bg-black hover:text-white rounded"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-black px-3 py-1 hover:bg-black hover:text-white rounded"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-black px-3 py-1 hover:bg-black hover:text-white rounded"
              >
                Services
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
