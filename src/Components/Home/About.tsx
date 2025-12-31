import { Box, Stack } from "@mui/system";
import mouse from "../../assests/images/mouse.png";
import line from "../../assests/images/Line.png";
import image from "../../assests/images/Image.png";
import line2 from "../../assests/images/Line 22.png";
import Typography from "@mui/material/Typography";

export default function About() {
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
          <img src={mouse} alt="" className="w-[32px] h-[44px]" />
          <img src={line} alt="" />
        </Box>
        {/* Title */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontSize: "64px",
                lineHeight: "72px",
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
      {/* About */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "128px",
          pl: "128px",
          pr: "64px",
        }}
      >
        {/* title */}
        <Stack direction={"column"} spacing={"64px"} alignItems={"flex-start"}>
          <Typography
            sx={{
              display: "inline-block",
              px: "40px",
              py: "16px",
              fontFamily: "Ubuntu",
              fontSize: "64px",
              lineHeight: "72px",
              border: "2px solid #12F7D6 ",
              borderRadius: "40px 0px 40px 0px",
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              px: "40px",
              py: "24px",
            }}
          >
            <Typography>{"<p>"}</Typography>
            <Typography sx={{ width: "800px" }}>
              <span className="text-[32px] leading-[52px] text-[#12F7D6]">
                {" "}
                Hello !
              </span>{" "}
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Suscipit, libero incidunt. Doloribus omnis consectetur iusto illum
              et illo aliquid enim magni voluptate natus sequi quidem, sint
              excepturi, ducimus dignissimos laborum ea in ipsum, minus nemo
              non. Architecto iste aspernatur distinctio dolores error, aliquid
              enim ab rerum soluta, non recusandae vero.
            </Typography>
            <Typography>{"<p/>"}</Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={image} alt="" className="w-[462px] h-[556px]" />
      </Box>
    </Box>
  );
}
