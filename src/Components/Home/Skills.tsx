import { Box, Stack } from "@mui/system";
import mouse from "../../assests/images/mouse.png";
import line from "../../assests/images/Line.png";
import Typography from "@mui/material/Typography";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import html from "../../assests/images/html5.png";

export default function Skills() {
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
            <Typography
              sx={{
                position: "absolute",
                top: "0",
                left: "400px",
                fontSize: "168px",
              }}
            >
              {"</>"}
            </Typography>
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
              Title
            </Typography>

            {/* <img src={line2} alt="" className="" /> */}
          </Box>
          <Typography>
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
          gap: "128px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* web */}
        <Box
          sx={{
            px: "24px",
            py: "16px",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "#98FAEC",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DesktopWindowsIcon
              sx={{
                color: "black",
              }}
            />
          </Box>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit,
          </Typography>
          <Typography sx={{ color: "black" }}>Lorem ipsum d</Typography>
        </Box>
        {/* andriod */}
        <Box
          sx={{
            px: "24px",
            py: "16px",
            borderRadius: "0px 8px 8px 0px",
            backgroundColor: "#98FAEC",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PhoneIphoneIcon
              sx={{
                color: "black",
              }}
            />
          </Box>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit,
          </Typography>
          <Typography sx={{ color: "black" }}>Lorem ipsum d</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "128px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              width: "100px", // circle size
              height: "100px",
              borderRadius: "50%", // makes it a circle
              backgroundColor: "#F16529", // HTML orange
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={html} alt="" style={{ width: "64px", height: "64px" }} />
          </Box>
          <Typography>HTML</Typography>
        </Box>
        {/*  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              width: "100px", // circle size
              height: "100px",
              borderRadius: "50%", // makes it a circle
              backgroundColor: "#F16529", // HTML orange
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={html} alt="" style={{ width: "64px", height: "64px" }} />
          </Box>
          <Typography>HTML</Typography>
        </Box>
        {/*  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              width: "100px", // circle size
              height: "100px",
              borderRadius: "50%", // makes it a circle
              backgroundColor: "#F16529", // HTML orange
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={html} alt="" style={{ width: "64px", height: "64px" }} />
          </Box>
          <Typography>HTML</Typography>
        </Box>
        {/*  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              width: "100px", // circle size
              height: "100px",
              borderRadius: "50%", // makes it a circle
              backgroundColor: "#F16529", // HTML orange
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={html} alt="" style={{ width: "64px", height: "64px" }} />
          </Box>
          <Typography>HTML</Typography>
        </Box>
      </Box>
    </Box>
  );
}
