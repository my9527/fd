

import { Box, Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import AirdropDog from "./assets/airdrop_dog.svg";
import { Title, ModWrapper, HighLightText } from "./common";
import styled from "@emotion/styled";

import MetaMaskPng from "./assets/metamask.svg";
import AuditPng from "./assets/certik.svg";
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
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #121318;
`

const NormalButton = styled(Button)`
    backgraound-color: 
`

export default () => {


    return (
        <ModWrapper tid="airdrop">
            <Stack direction={['column', 'row']} flexWrap="wrap" justifyContent={"space-between"}>
                <Box color={"rgba(0, 0, 0, 0.6)"} width={{
                    base: "100%",
                    pc: "50%",
                }} >
                    <Flex justifyContent="flex-start" alignItems={"flex-end"} >
                        <Image src={AirdropDog} />
                        <Title>Airdrop of FIL Holder</Title>
                    </Flex>
                    <Box marginTop={{ pc: "32px", base: "16px" }}>
                        <HighLightText fontSize={"20px"}>15%</HighLightText> of the total supply is airdropped to FIL holders in proportion to their holdings.
                        The community will take a snapshot of FIL holders' positions at a certain time, and deploy the smart contract for token airdrops. FIL holders can get the airdrops of FILEDOGE through the contract in proportion to their holdings.
                    </Box>

                </Box>
                <Box width={{ base: "100%", pc: "48%" }}  >
                    <FormWrapper padding={{ base: "30px 16px", pc: "50px 40px"}} marginTop={{ base: "20px", pc: "0px" }} >
                        <Flex justifyContent={"space-between"}>
                            <FormText>Audit By</FormText> <Image src={AuditPng} />
                        </Flex>
                        <Flex marginTop="19px" justifyContent={"space-between"}>
                            <FormText>Wallet Support</FormText> <Image src={MetaMaskPng} />
                        </Flex>
                        <Flex marginTop="19px" justifyContent={"space-between"}>
                            <FormText>Your Filedoge Airdrop</FormText> <span></span>
                        </Flex>
                        <Flex>
                            <ClaimNumTxt>0.00</ClaimNumTxt>
                        </Flex>
                        <Box marginTop={"12px"}>
                            <Button height={{ pc: "48px", base: "40px" }} width={"100%"} bg={"#FFAD06"} color="white">Claim</Button>
                            <p  style={{ fontSize: "12px", lineHeight: "150%", marginTop: "12px", color: "rgba(0,0,0,0.6)" }}>This airdrop smart contract audit by certik,you can claim safely. <HighLightText display={"inline"}>Audit report</HighLightText></p>
                        </Box>
                    </FormWrapper>
                </Box>
            </Stack>
        </ModWrapper>
    );
}