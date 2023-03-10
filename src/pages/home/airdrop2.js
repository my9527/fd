

import { Box, Button, Flex, Image, Input, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import AirdropDog from "./assets/airdrop_dog.png";
import { Title, ModWrapper, HighLightText } from "./common";
import styled from "@emotion/styled";

import MetaMaskPng from "./assets/form_metamask.png";
import AuditPng from "./assets/form_audit.png";
import AirBg2 from "./assets/airdrop_p2_bg.png";
import Dog3 from "./assets/airdrop_doge3.png";




const FormWrapper = styled(Box)`
    border-radius: 24px;
    font-weight: 500;
    font-size: 32px;
    line-height: 150%;
    border: 1px solid rgba(0, 0, 0, 0.12);
`

const FormText = styled(Text)`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #121318;
`

const ClaimNumTxt = styled(Text)`
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #121318;
`

const NormalButton = styled(Button)`
    backgraound-color: 
`

export default () => {

// rgba(255, 245, 220, 0.23)
    return (
        <ModWrapper marginTop={{ base: "36px", pc: "70px" }} padding="0" bg={"rgba(255, 245, 220, 0.23)"} bgImage={{ base: "", pc: AirBg2 }} bgRepeat="no-repeat" bgSize="contain" >
            <Stack  padding={{ base: "32px 21px", pc: "80px 120px 64px 100px"}} color={"rgba(0, 0, 0, 0.6)"}>
                <Flex  justifyContent={"space-between"} flexWrap={{ base: "wrap-reverse", pc: "wrap"}} alignItems="center" >
                    <Box width={{ base: "100%", pc: "50%"}}>
                        <Text><HighLightText fontSize={"20px"}>44%</HighLightText>of the total supply enters the Swap pool of FILEDOGE with corresponding private keys destroyed for fair genesis.</Text>
                        <Text>After the official release of the FIL smart contract, the FILEDOGE/FIL trading pair will be added to the DEX of Swap, along with a liquidity pool of 430 trillion FILEDOGE and 1,000 FIL. The corresponding private keys will be destroyed.</Text>
                        <Button height={{ base: "40px", pc: "48px" }} marginTop="24px" width={{ base: "100%", pc: "50%"}} bg={"#FFAD06"} color="white">Swap</Button>
                        <p style={{ fontSize: "12px", lineHeight: "150%", marginTop: "12px", color: "rgba(0,0,0,0.6)" }}>
                         <small style={{ color: "rgba(0, 0, 0, 0.4)", fontSize: "12px" }}>This swap smart contract audit by certik,you can swap safely. <HighLightText><Link href="#">Audit report</Link></HighLightText></small>
                        </p>
                    </Box>
                    <Image src={Dog3} maxWidth={{ base: "100%", pc: "50%"}} style={{ aspectRatio: "3/1", objectFit: "contain", height: "100%"}} marginBottom={{ base: "18px", pc: "0"}} />
                </Flex>
            </Stack>
        </ModWrapper>
    );
}