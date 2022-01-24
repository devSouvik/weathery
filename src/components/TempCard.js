import React, { useEffect, useState } from "react";
import "./TempCard.css";
import GeoCard from "./GeoCard";
// import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import mist from "../assets/mist.jpg";
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
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.write("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log("latitite", position.coords.latitude);
    console.log("longitude", position.coords.longitude);
  }

  const api = {
    key: "af59dbef9e8c89a00405d04bb91a49e9",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  let classes = [];

  if (typeof weather.main != "undefined") {
    let value = weather.weather[0].description;

    if (value === "broken clouds") {
      classes.push("brokenCloud");
    } else if (value === "clear sky") {
      classes.push("clearSky");
    } else if (value === "few clouds") {
      classes.push("fewClouds");
    } else if (value === "mist") {
      classes.push("mist");
    } else if (value === "rain") {
      classes.push("rain");
    } else if (value === "scattered clouds") {
      classes.push("scatteredClouds");
    } else if (value === "shower rain") {
      classes.push("showerRain");
    } else if (value === "snow") {
      classes.push("snowWeather");
    } else if (value === "thunderstorm") {
      classes.push("thunderStorm");
    } else if (value === "haze") {
      classes.push("haze");
    } else if (value === "fog") {
      classes.push("fog");
    } else if (value === "smoke") {
      classes.push("smoke");
    } else if (value === "drizzle") {
      classes.push("drizzle");
    } else if (value === "overcast clouds") {
      classes.push("overcastCloud");
    } else {
      classes.push("card");
    }
  }

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <>
      {/* navbar */}

      <Container maxWidth="sm" sx={{ marginTop: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={getLocation}
                >
                  <LocationOnIcon />
                </IconButton>
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
                      setQuery(text);
                    }}
                    value={query}
                    onKeyPress={search}
                  />
                </Search>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Box>
      </Container>
      {/* card */}
      {typeof weather.main != "undefined" ? (
        <Container maxWidth="sm">
          <div className={classes}>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={8}>
                <Typography
                  variant="h2"
                  sx={{ paddingLeft: 1, color: "white" }}
                >
                  {weather.name}
                </Typography>
                <Typography
                  style={{ paddingLeft: 10, color: "white", fontSize: 25 }}
                >
                  {weather.weather[0].description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    paddingTop: 3,
                    paddingLeft: 1,
                    color: "white",
                  }}
                >
                  {`${Date()}`.slice(4, 15)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img
                  style={{ marginTop: "30px", marginLeft: 15 }}
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="weather image"
                />
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
              {weather.main.temp}°C
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: 3 }}>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", color: "white", marginLeft: 2 }}
                >
                  <ArrowUpwardRoundedIcon sx={{ fontSize: 18 }} />
                  Max {weather.main.temp_max}°C
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", color: "white", marginLeft: 2 }}
                >
                  <ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />
                  Min {weather.main.temp_min}°C
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", color: "white", marginLeft: 2 }}
                >
                  <WaterTwoToneIcon sx={{ color: "white", fontSize: 18 }} />
                  Humidity {weather.main.humidity}%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", color: "white", marginLeft: 2 }}
                >
                  <DeviceThermostat sx={{ color: "white", fontSize: 18 }} />
                  Feels Like {weather.main.feels_like}°C
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", color: "white", marginLeft: 2 }}
                >
                  <FilterDramaTwoToneIcon
                    sx={{ color: "white", fontSize: 15, marginRight: 1 }}
                  />
                  Cloudiness {weather.clouds.all}%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: "left", color: "white", marginLeft: 2 }}
                >
                  <AirIcon
                    sx={{ color: "white", fontSize: 15, marginRight: 1 }}
                  />
                  Speed {weather.main.temp_min}Km/h
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Container>
      ) : (
        <p style={{ fontSize: 25, color: "white", textAlign: "center" }}>
          Enter a valid location
        </p>
      )}
    </>
  );
}

export default TempCard;
