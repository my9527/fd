import { Box, Flex, Image, Stack, Text, Button } from "@chakra-ui/react";
import { ModWrapper, Title, HighLightText } from "./common";


import RouteMapLogo from "./assets/routeMap.svg";

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
          <div>1. Create a DEX, we have already launched it and you can access it at https://www.filedoge.io/swap. As designed, 5/6 of the fees in the DEX will be used as rewards for liquidity providers, while <HighLightText>1/6</HighLightText> will be used as income for FILEDOGE holders, which will be used for repurchasing FILEDOGE to boost the coin price and move into a <HighLightText>deflationary</HighLightText> state.</div>
          <p>2. FILEDOGE legion members are super passionate gamers. As a MEME cryptocurrency project, FILEDOGE is a good birthplace of games.</p>
          <p>3. Games are naturally linked with NFTs. FILEDOGE, which comes with the attributes of MEME culture, has its own advantage in the field of NFTs.</p>
          <p>4. Other possibilities? Feel free to think about it…</p>
        </Box>
        <Flex justifyContent={"center"}>
          <Button onClick={() => {
            window.open('https://filedoge.io/Filedoge_woofpaper.pdf', '_blank');
          }} width={{ base: "75%", pc: "200px" }} height={{ base: "40px", pc: "48px" }} marginTop={"35px"} bg={"#FFAD06"} color="white">View more &gt;</Button>
        </Flex>
      </Box>

    </ModWrapper>
  );
}