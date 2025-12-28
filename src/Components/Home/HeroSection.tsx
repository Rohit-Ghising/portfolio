import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { flexDirection, Stack } from "@mui/system";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import TvIcon from "@mui/icons-material/Tv";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import LinkIcon from "@mui/icons-material/Link";
import Button from "@mui/material/Button";

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#292F36",
        paddingX: "128px",
        paddingTop: "64px",
        paddingBottom: "128px",

        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {/* Navigation Icon */}
      <Box sx={{ color: "white", display: "flex" }}>
        <Stack
          direction="column"
          spacing={3}
          sx={{
            paddingY: "12px",
            paddingX: "8px",
            backgroundColor: "#1A1E23",
            borderRadius: "40px",
          }}
        >
          <IconButton>
            <GridViewIcon sx={{ fontSize: "24px", color: "white" }} />
          </IconButton>
          <IconButton>
            <PersonIcon sx={{ fontSize: "24px", color: "white" }} />
          </IconButton>
          <IconButton>
            <CodeIcon sx={{ fontSize: "24px", color: "white" }} />
          </IconButton>
          <IconButton>
            <TvIcon sx={{ fontSize: "24px", color: "white" }} />
          </IconButton>
          <IconButton>
            <EditNoteIcon sx={{ fontSize: "24px", color: "white" }} />
          </IconButton>
          <IconButton>
            <EmailIcon sx={{ fontSize: "24px", color: "white" }} />
          </IconButton>
        </Stack>
      </Box>
      {/* Miant Theme */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "236px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: "#12F7D6",
            fontWeight: 400, // Medium
            fontSize: "117px",
            lineHeight: "134px",
            textAlign: "center",
            paddingY: "128px",
          }}
        >
          Developer
        </Typography>
        {/*  */}

        <Box
          sx={{
            display: "flex",
            width: "320px",
            height: "520px",
            padding: "24px",
            border: "4px solid #12F7D6",
            borderRadius: "160px 0px ",
            gap: "32px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "top",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // stack vertically
              alignItems: "center", // horizontal center
              justifyContent: "center", // vertical center (if Box has height)
              // optional, to center within parent
            }}
          >
            <Avatar sx={{ width: "96px", height: "96px" }}></Avatar>
            <Typography
              sx={{
                color: "white",
                fontFamily: "'IBM Plex Mono', monospace",
                // color: "#12F7D6",
                fontWeight: 500, // Medium
                fontSize: "32px",
                lineHeight: "42px",
                textAlign: "center",
                // paddingY: "128px"
              }}
            >
              Rohit
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontFamily: "'IBM Plex Mono', monospace",
                // color: "#12F7D6",
                fontWeight: 400, // Medium
                fontSize: "14px",
                lineHeight: "18px",
              }}
            >
              Full-stack Developer
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <EmailIcon
                sx={{ color: "#12F7D6", width: "14px", height: "14px" }}
              />
              <Typography> hekko</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <LocationOnIcon
                sx={{ color: "#12F7D6", width: "14px", height: "14px" }}
              />
              <Typography>layhmandu</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <WorkIcon
                sx={{ color: "#12F7D6", width: "14px", height: "14px" }}
              />
              <Typography>sdjknsxbjh</Typography>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <LinkIcon
                sx={{ color: "#12F7D6", width: "14px", height: "14px" }}
              />
              <Typography>bsyugyuvd</Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Button
                variant="text"
                sx={{ backgroundColor: "#12F7D6", borderRadius: "8px" }}
              >
                Html
              </Button>
              <Button variant="text" sx={{ backgroundColor: "#12F7D6" }}>
                Css
              </Button>
              <Button variant="text" sx={{ backgroundColor: "#12F7D6" }}>
                JS
              </Button>
              <Button variant="text" sx={{ backgroundColor: "#12F7D6" }}>
                REact
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      {/*  */}
    </Box>
  );
}
