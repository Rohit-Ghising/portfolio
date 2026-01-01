import { Box } from "@mui/system";
import mouse from "../../assests/images/mouse.png";
import line from "../../assests/images/Line.png";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import line2 from "../../assests/images/Line 22.png";
import IconButton from "@mui/material/IconButton";
import dual from "../../assests/images/Dual-screen.png";

export default function Works() {
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
              Works
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
          alignitems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "#292F36",
            position: "absolute",
            top: "50%",
            left: "0%",

            transform: "translateY(-50%)",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ height: "40px", width: "40px ", color: "white" }}
          />
        </IconButton>
        <Box sx={{ width: "649.01px", height: "432px", position: "relative" }}>
          <img
            src={dual}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "15%",
              right: "15%",
              textDecoration: "underline",
              fontweight: "400",
              fontFamily: "'IBM Plex Mono', monospace",
              lineHeight: "32px",
              fontSize: "24px",
              color: "#12F7D6",
            }}
          >
            Visit Website
          </Typography>
        </Box>
        <IconButton
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "#292F36",
            position: "absolute",
            top: "50%",
            right: "0%",

            transform: "translateY(-50%)",
          }}
        >
          <KeyboardArrowRightIcon
            sx={{ height: "40px", width: "40px ", color: "white" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
