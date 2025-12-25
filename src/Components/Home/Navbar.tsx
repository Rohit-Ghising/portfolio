import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#292F36",
        paddingX: "128px",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          paddingY: "64px",
        }}
      >
        <Box sx={{ display: "flex", gap: "8px", justifyContent: "flex-start" }}>
          {" "}
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 500, // Medium
              fontSize: "32px",
              lineHeight: "42px",
              color: "#12F7D6",
            }}
          >
            {"<R/>"}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 500, // Medium
              fontSize: "32px",
              lineHeight: "42px",
              color: "white",
            }}
          >
            Rohit Ghising
          </Typography>
        </Box>
        <Box sx={{ gap: "32px", display: "flex" }}>
          <Typography
            component="a"
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: "400px", // Medium
              fontSize: "24px",
              lineHeight: "32px",
              color: "#12F7D6",
            }}
          >
            Home
          </Typography>
          <Typography
            component="a"
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: "400px", // Medium
              fontSize: "24px",
              lineHeight: "32px",
              color: "white",
            }}
          >
            Blog
          </Typography>
          {/*  */}
          <Box>
            <Typography color="white" sx={{}}>
              <input type="text" />
              <SearchIcon />
              <InstagramIcon />
              <GitHubIcon />
              <LinkedInIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
// bg-[]
