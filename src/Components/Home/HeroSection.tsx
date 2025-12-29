import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
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
import SaveAltIcon from "@mui/icons-material/SaveAlt";

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
      <Box>
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
                <Typography
                  sx={{
                    backgroundColor: "#12F7D6",
                    borderRadius: "8px",
                    paddingX: "8px",
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: "black",
                    fontWeight: 400, // Medium
                    fontSize: "14px",
                    lineHeight: "18px",
                  }}
                >
                  Html
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: "#12F7D6",
                    borderRadius: "8px",
                    paddingX: "8px",
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: "black",
                    fontWeight: 400, // Medium
                    fontSize: "14px",
                    lineHeight: "18px",
                  }}
                >
                  Css
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: "#12F7D6",
                    borderRadius: "8px",
                    paddingX: "8px",
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: "black",
                    fontWeight: 400, // Medium
                    fontSize: "14px",
                    lineHeight: "18px",
                  }}
                >
                  JS
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: "#12F7D6",
                    borderRadius: "8px",
                    paddingX: "8px",
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: "black",
                    fontWeight: 400, // Medium
                    fontSize: "14px",
                    lineHeight: "18px",
                  }}
                >
                  REact
                </Typography>
              </Stack>
              <Button
                variant="contained"
                endIcon={<SaveAltIcon sx={{ height: "24px", width: "24px" }} />}
                sx={{
                  backgroundColor: "white",
                  color: "#292F36",
                  px: "32px",
                  py: "16px",
                  borderRadius: "32px",
                  fontFamily: "'IBM Plex Mono', monospace",

                  fontWeight: 400, // Medium
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                Download Cv
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <Box>
              <Typography
                color="#12F7D6"
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  lineHeight: "18px",
                  fontSize: "14px",
                }}
              >
                {"<h1>"}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  lineHeight: "72px",
                  fontSize: "64px",
                  color: "white",
                  px: "16px",
                }}
              >
                Hey
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  lineHeight: "72px",
                  fontSize: "64px",
                  color: "white",
                  px: "16px",
                }}
              >
                I'm <span style={{ color: "#12F7D6" }}>Rohit,</span>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  lineHeight: "72px",
                  fontSize: "64px",
                  color: "white",
                  px: "16px",
                }}
              >
                Fullstack developer
                <span
                  style={{
                    fontFamily: "IBM Plex Mono', monospace",
                    lineHeight: "18px",
                    fontSize: "14px",
                    color: "#12F7D6",
                  }}
                >
                  {"</h1>"}
                </span>
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "IBM Plex Mono', monospace",
                // lineHeight: "18px",
                // fontSize: "14px",
                fontSize: "16px",
                lineHeight: "20px",
                color: "#12F7D6",
              }}
            >
              {"<p>"}
              <Typography sx={{ p: "24px", color: "white" }}>
                rem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
                Aliquam
              </Typography>
              <Typography
                sx={{
                  fontFamily: "IBM Plex Mono', monospace",
                  // lineHeight: "18px",
                  // fontSize: "14px",
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#12F7D6",
                }}
              >
                {"<p/>"}
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    sx={{ p: "24px", fontSize: "32px", lineHeight: "42px" }}
                  >
                    Let's Talk
                  </Typography>
                  <IconButton sx={{ borderRadius: "40px", p: "8px" }}>
                    <EmailIcon
                      sx={{
                        height: "18px",
                        width: "22px",
                        color: "#12F7D6",
                      }}
                    />
                  </IconButton>
                </Stack>
              </Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              ps: "32px",
              py: "48px",
              borderRadius: "80px",
              background: "#1A1E23",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "16px" }}>
              <Typography
                sx={{
                  fontFamily: "IBM Plex Mono', monospace",
                  fontSize: "48px",
                  lineHeight: "62px",
                  color: "#12F7D6",
                }}
              >
                4
              </Typography>
              <Typography>Programming language</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*  */}
    </Box>
  );
}
