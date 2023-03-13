import { Box, Flex, Image, Stack, Text, Button } from "@chakra-ui/react";
import { ModWrapper, Title } from "./common";


import RouteMapLogo from "./assets/routeMap.png";

import { css } from "@emotion/react";


const ContainerCss = css`
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.12);
border-radius: 24px;
`
const LogoCss = css`
    transform: translateY(35%) translateX(-50%);
    position: absolute;
    left: 50%;
`;

const DescCss = css`
 & > p {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
 }
`;
export default () => {

  return (
    <ModWrapper marginTop={{ base: "34px", pc: "115px" }} >
      <Image src={RouteMapLogo} css={LogoCss} />
      <Box css={ContainerCss} padding={{ base: "42px 16px", pc: "69px 71px" }} marginTop="100px" color={"rgba(0, 0, 0, 0.6)"}>
        <Flex justifyContent={"center"} marginBottom={"1em"} marginTop={{ base: "0.8em", pc: "1em" }}>
          <Title>RoadMap</Title>
        </Flex>
        <Box css={DescCss} fontSize="16px" fontWeight={500}>
          <p>As a decentralized cryptocurrency project, there is no centralized team deciding the future development of FILEDOGE. Everything is left to the community. What journey FILEDOGE will eventually take is a topic to be imagined. Let's imagine:</p>
          <br />
          <p>1. FILEDOGE legion members are super passionate gamers. As a meme cryptocurrency project, FILEDOGE is a good birthplace of games.</p>
          <p>2. Games are naturally linked with NFTs. FILEDOGE, which comes with the attributes of meme culture, has its own advantage in the field of NFTs.</p>
          <p>3. Other possibilities? Feel free to think about it…</p>
        </Box>
        <Flex justifyContent={"center"}>
          <Button onClick={() => {
            window.location.href = 'https://filedoge.io/Filedoge_woofpaper.pdf'
          }} width={{ base: "75%", pc: "200px" }} height={{ base: "40px", pc: "48px" }} marginTop={"35px"} bg={"#FFAD06"} color="white">View more &gt;</Button>
        </Flex>
      </Box>

    </ModWrapper>
  );
}