

import { Box, Button, Flex, Image, Input, Link, Stack, Text, useToast } from "@chakra-ui/react";
import { Title, ModWrapper, HighLightText } from "./common";
import styled from "@emotion/styled";
import AirBg2 from "./assets/airdrop_p2_bg.png";
import Dog3 from "./assets/airdrop_doge3.png";

export default () => {
  const toast = useToast({
    position: 'top',
    containerStyle: {
      background: "#FFAD06",
      borderRadius: "6px"
    }
  });
  // rgba(255, 245, 220, 0.23)
  return (
    <ModWrapper tid="howtobuy" marginTop={{ base: "36px", pc: "70px" }} padding="28px 0 74px" bg={"rgba(255, 245, 220, 0.23)"} bgImage={{ base: "", pc: AirBg2 }} bgRepeat="no-repeat" bgSize="contain" >
      <Stack color={"rgba(0, 0, 0, 0.6)"}>
        <Flex justifyContent={"space-between"} flexWrap={{ base: "wrap-reverse", pc: "wrap" }} alignItems="center" >
          <Box width={{ base: "100%", pc: "673px" }}>
            <Title style={{ marginBottom: 28 }}>Fair Swap-How to Buy</Title>
            <div><HighLightText fontSize={"20px"}>44%</HighLightText>of the total supply enters the Swap pool of FILEDOGE with corresponding private keys destroyed for fair genesis.</div>
            <Text>After the official release of the FIL smart contract, the FILEDOGE/FIL trading pair will be added to the DEX of Swap, along with a liquidity pool of 440 trillion FILEDOGE and 1,000 FIL. The corresponding private keys will be destroyed.</Text>
            <Button onClick={() => {
              toast({
                duration: 3000,
                render: () => {
                  return <Box minWidth={"auto"} textAlign={"center"} color='#fff' p={3}>
                    Comming Soon!
                  </Box>
                }
              })
            }} height={{ base: "40px", pc: "48px" }} marginTop="24px" width={{ base: "100%", pc: "50%" }} bg={"#FFAD06"} color="white">Swap</Button>
            <div style={{ fontSize: "12px", lineHeight: "150%", marginTop: "12px", color: "rgba(0,0,0,0.6)" }}>
              <div style={{ color: "rgba(0, 0, 0, 0.4)", fontSize: "12px" }}>This swap smart contract audit by certik,you can swap safely. <HighLightText><Link href="#">Audit report</Link></HighLightText></div>
            </div>
          </Box>
          <Image src={Dog3} maxWidth={{ base: "100%", pc: "416px" }} style={{ aspectRatio: "3/1", objectFit: "contain", height: "100%" }} marginBottom={{ base: "18px", pc: "0" }} />
        </Flex>
      </Stack>
    </ModWrapper >
  );
}