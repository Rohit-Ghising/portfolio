import { Box } from "@mui/system";
import mouse from "../../assests/images/mouse.png";
import line from "../../assests/images/Line.png";
import Typography from "@mui/material/Typography";

import line2 from "../../assests/images/Line 22.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  return (
    <Box
      sx={{
        p: "128px",
        display: "flex",
        flexDirection: "column",
        gap: "128px",
        backgroundColor: "#1A1E23",
        color: "white",
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      {/* Mouse icon */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          gap: "64px",
          color: "#12F7D6",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              position: "relative",
            }}
          >
            <img src={mouse} alt="" className="w-[32px] h-[44px]" />
            <img src={line} alt="" />
          </Box>
        </Box>
        {/* Title */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontSize: "64px",
                lineHeight: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={line2} alt="" className=" h-[12px] w-[148px]" />
            </Box>
          </Box>
          <Typography
            sx={{
              fontweight: "400",
              fontFamily: "'IBM Plex Mono', monospace",
              lineHeight: "20px",
              fontSize: "16px",
              color: "white",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            porro ipsam sequi!
          </Typography>
        </Box>
      </Box>
      {/* Slills */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "64px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "64px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              display: "inline-block",
              alignItems: "center",
              justifyContent: "center",
              px: "40px",
              py: "16px",
              border: "2px solid #12F7D6",
              color: "#12F7D6",
              fontSize: "32px",
              lineHeight: "42px",
              fontFamily: "'IBM Plex Mono', monospace",
              borderRadius: "0px 32px 0px 32px",
            }}
          >
            Send Me A Message
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "64px",
              px: "400px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row", gap: "64px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "18px",
                    fontWeight: 300,
                    color: "#12F7D6",
                    textDecoration: "underline",
                  }}
                >
                  Your Name *
                </Typography>
                <TextField
                  label="Enter your name"
                  variant="standard"
                  sx={{
                    input: { color: "white" }, // input text color
                    label: { color: "white" },
                    textDecoration: "underline",
                  }}
                />
              </Box>
              {/*  */}
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "18px",
                    fontWeight: 300,
                    color: "#12F7D6",
                    textDecoration: "underline",
                  }}
                >
                  Your Email *
                </Typography>
                <TextField
                  label="Enter your name"
                  variant="standard"
                  sx={{
                    input: { color: "white" }, // input text color
                    label: { color: "white" },
                    textDecoration: "underline",
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "18px",
                  fontWeight: 300,
                  color: "#12F7D6",
                  textDecoration: "underline",
                }}
              >
                Your Message*
              </Typography>
              <TextField
                label="Your MEssage"
                variant="standard"
                sx={{
                  input: { color: "white" }, // input text color
                  label: { color: "white" },
                  textDecoration: "underline",
                }}
              />
            </Box>
          </Box>
          <Button
            sx={{
              color: "black",
              borderRadius: "32px",
              px: "32px",
              py: "16px",
              gap: "16px",
              backgroundColor: "#12F7D6",
              fontSize: "20px",
              lineHeight: "24px",
            }}
            endIcon={<SendIcon sx={{ height: "24px", width: "24px" }} />}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
