import React, { useEffect, useState } from "react";
import "./TempCard.css";
// import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import rainy from "../assets/rainy.jpg";
import brokenclouds from "../assets/broken_clouds.png";
import clouds from "../assets/clouds.png";
import mist from "../assets/mist.png";
import rainy1 from "../assets/rainy1.png";
import rainy2 from "../assets/rainy2.png";
import scatteredclouds from "../assets/scattered_clouds.png";
import snow from "../assets/snow.png";
import sunny from "../assets/sunny.png";
import thunderstorm from "../assets/thunderstorm.png";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";

// new
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AirIcon from "@mui/icons-material/Air";
import DeviceThermostat from "@mui/icons-material/DeviceThermostat";
import FilterDramaTwoToneIcon from "@mui/icons-material/FilterDramaTwoTone";
import WaterTwoToneIcon from "@mui/icons-material/WaterTwoTone";
// import Stack from "@mui/material/Stack";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function TempCard() {
  const [city, setcity] = useState(null);
  const [textInput, setTextInput] = useState("howrah");

  useEffect(() => {
    const api_key = "af59dbef9e8c89a00405d04bb91a49e9";

    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    fetchApi();
  }, []);

  return (
    <>
      {/* navbar */}
      <Container maxWidth="sm" sx={{ marginTop: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Weathery
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    let text = e.target.value;
                    setTextInput(text);
                    console.log(text);
                  }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>

      {/* card */}
      <Container maxWidth="sm">
        <div
          style={{
            margin: "0 auto",
            marginTop: 10,
            width: "100%",
            height: "470px",
            borderRadius: 10,
            backgroundColor: "#fff",
            boxShadow: " 1px 2px 10px rgba(0, 0, 0, 0.2)",
            backgroundImage: `url(${sunny})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={6}>
              <Typography variant="h2" sx={{ paddingLeft: 1, color: "white" }}>
                Howrah
              </Typography>
              <span style={{ paddingLeft: 10, color: "white", fontSize: 25 }}>
                Mostly Clear
              </span>
              <Typography
                variant="subtitle2"
                sx={{ paddingTop: 3, paddingLeft: 1, color: "white" }}
              >
                {`${Date()}`.slice(4, 15)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img src="#" alt="" />
            </Grid>
          </Grid>

          <Typography
            variant="h1"
            sx={{
              marginTop: 3.5,
              fontSize: 70,
              textAlign: "center",
              color: "white",
            }}
          >
            25°C
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", color: "white" }}
              >
                Max 22°C
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", color: "white" }}
              >
                Min 12°C
              </Typography>
            </Grid>
          </Grid>
          <div style={{ marginTop: 30, textAlign: "center" }}>
            <WaterTwoToneIcon
              sx={{ color: "white", fontSize: 15, marginRight: 2 }}
            />
            <span
              style={{
                fontSize: 25,
                color: "whitesmoke",
                marginBottom: 2,
              }}
            >
              Humidity 61%
            </span>
            <br />
            <DeviceThermostat
              sx={{ color: "white", fontSize: 15, marginRight: 2 }}
            />
            <span
              style={{ fontSize: 25, color: "whitesmoke", marginBottom: 2 }}
            >
              Feels like 22°C
            </span>
            <br />
            <FilterDramaTwoToneIcon
              sx={{ color: "white", fontSize: 15, marginRight: 2 }}
            />
            <span
              style={{ fontSize: 25, color: "whitesmoke", marginBottom: 2 }}
            >
              Cloudiness 75%
            </span>
            <br />
            <AirIcon sx={{ color: "white", fontSize: 15, marginRight: 2 }} />
            <span
              style={{ fontSize: 25, color: "whitesmoke", marginBottom: 5 }}
            >
              Speed 16.5 km/h
            </span>
          </div>

          {/* <div style={{ marginTop: 30, textAlign: "center", marginLeft: 30 }}>
            <Grid container spacing={2} sx={{ textAlign: "right" }}>
              <Grid item xs={2}>
                <Stack spacing={2}>
                  <DeviceThermostat sx={{ color: "white", fontSize: 20 }} />
                  <FilterDramaTwoToneIcon
                    sx={{ color: "white", fontSize: 20 }}
                  />
                  <WaterTwoToneIcon sx={{ color: "white", fontSize: 20 }} />
                  <AirIcon sx={{ color: "white", fontSize: 20 }} />
                </Stack>
              </Grid>
              <Grid item sx={2} sx={{ textAlign: "left" }}>
                <Stack spacing={2}>
                  <span style={{ color: "white", fontSize: 20 }}>
                    Humidity 61%
                  </span>
                  <span style={{ color: "white", fontSize: 20 }}>
                    Humidity 61%
                  </span>
                  <span style={{ color: "white", fontSize: 20 }}>
                    Humidity 61%
                  </span>
                  <span style={{ color: "white", fontSize: 20 }}>
                    Humidity 61%
                  </span>
                </Stack>
              </Grid>
            </Grid>
          </div> */}
        </div>
      </Container>
    </>
  );
}

export default TempCard;
