import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import { HighLightText, ModWrapper, Title } from "./common";


import BgL from "./assets/giving_l.png";
import BgR from "./assets/giving_r.png";
import Bg from "./assets/giving_bg.svg";

import LogoL from "./assets/giving_logo_l.png";
import LogoR from "./assets/giving_logo_r.png";


export default () => {

  return (
    <ModWrapper marginTop={{ base: "42px", pc: "100px" }}>
      <Flex justifyContent={"center"} marginBottom={{ pc: "1em", base: "0" }}>
        <Title>Thanks Giving</Title>
      </Flex>
      <Stack color={"rgba(0, 0, 0, 0.6)"} direction={['column', 'row']} flexWrap={{ base: "wrap", pc: "nowrap" }} justifyContent={"space-between"}>
        <Box zIndex={1000} marginLeft="10px" width={{ base: "100%", pc: "530px" }}  >
          <Image src={LogoL} marginBottom={"16px"} />
          <div>
            FILEDOGE is an important part of FIL's ecology. As FILEDOGE’s founder Fredrick indicated, <HighLightText fontSize={"20px"}>20%</HighLightText> of the FILEDOGE supply will be sent to the lab as we believe that the lab will firmly stick to the concept of decentralization without violating any regulations, and will actively "burning " or properly manage the token."
          </div>
        </Box>
        <Box width={{ base: "100%", pc: "530px" }}  >
          <Image src={LogoR} marginBottom={"16px"} />
          <div>
            <HighLightText fontSize={"20px"}>20%</HighLightText> of the total supply will be sent to Vitalik's wallet on FIL for "Burning ".
            <p>As a tribute to Vitalik's great contribution to smart contract and ETH, when FVM is compatible with EVM, this portion of the tokens will be sent to Vitalik's wallet on FIL. If the delivery fails, these tokens will be forwarded to the official Filecoin lab’s wallet as well.</p>
          </div>
        </Box>
      </Stack>
    </ModWrapper>
  );
}