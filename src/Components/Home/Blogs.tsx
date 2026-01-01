import { Box } from "@mui/system";
import mouse from "../../assests/images/mouse.png";
import line from "../../assests/images/Line.png";
import Typography from "@mui/material/Typography";
import b from "../../assests/images/image1.png";

import line2 from "../../assests/images/Line 22.png";
import Button from "@mui/material/Button";

export default function Blogs() {
  return (
    <Box
      sx={{
        p: "128px",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
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
              Blogs
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
      <Box sx={{ px: "128px", py: "100px", gap: "64px" }}>
        <Box
          sx={{
            width: "100%", // full width or custom width
            height: "2px", // thickness
            backgroundColor: "white", // line color
            my: 2, // margin top & bottom
          }}
        />
        <Box
          sx={{
            px: "14px",
            gap: "64px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img src={b} alt="" />
          <Box
            sx={{
              gap: "24px",
              px: "14px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontSize: "32px",
                lineHeight: "36px",
                color: "#12F7D6",
                textTransform: "capitalize",
              }}
            >
              What does it take to be a web developer?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontSize: "16px",
                lineHeight: "18px",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit{" "}
              <br />
              tempora hic corporis.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "18px",
                color: "#12F7D6",
              }}
            >
              {"Read more >>"}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "24px" }}>
              <Typography
                sx={{
                  px: "8px",
                  py: "4px",
                  borderRadius: "16px",
                  color: "white",
                  backgroundColor: "#43454D",
                }}
              >
                Software Developer
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%", // full width or custom width
            height: "2px", // thickness
            backgroundColor: "white", // line color
            my: 2, // margin top & bottom
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "black",
            px: "32px",
            py: "16px",
            borderRadius: "32px",
            backgroundColor: "#12F7D6",
          }}
        >
          View More
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "white",
            px: "32px",
            py: "16px",
            borderRadius: "32px",
            border: "2px solid #12F7D6",
            backgroundColor: "#292F36",
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}
