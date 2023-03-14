

import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import filedogeBg from "./assets/filedoge_bg.png";
import filedogeEq from "./assets/filedoge_eq.svg";
import { ModWrapper, Title } from "./common";

export default () => {
  return (
    <ModWrapper p={"0 0"} marginTop="-33px" tid="filedoge">
      <Box bgRepeat={"no-repeat"} bgSize="cover" bgImage={filedogeBg} borderRadius="24" padding={{ base: "18px", pc: "64px 64px 82px 64px" }}>
        <Stack justify={"center"}>
          <Flex alignItems={"center"} justify="center" marginBottom={{ pc: "28px", base: "14px" }}  >
            <Title fontSize={{ base: '24px', pc: "32px" }} lineHeight="150%" fontWeight={500}>What is FileDoge?</Title>
          </Flex>
          <Box>
            <Flex alignItems={"center"} width="100%" justify="space-around" flexWrap={{ pc: "nowrap", base: "wrap" }}>
              <Image width={{ base: "70%", pc: "32.25%" }} src={filedogeEq} />
              <Box flex={1} marginTop={{ base: "16px" }} marginBottom={{ base: "15px" }} width={{ base: "100%", pc: "50%" }} fontSize={"14px"} display={{ base: "flex" }} justifyContent={{ pc: "flex-end", base: "space-between" }} >
                <Button onClick={() => {
                  window.open('https://filedoge.io/Filedoge_woofpaper.pdf', '_blank')
                }} height={{ pc: "48px", base: "40px" }} width={{ base: "48%", pc: "149px" }} bgColor={"#FFAD06"} color={"white"}>Woofpaper</Button>
                <Button onClick={() => {
                  window.open('https://github.com/Filedoge', '_blank')
                }} height={{ pc: "48px", base: "40px" }} border={"1px solid"} marginLeft={{ base: 0, pc: "19px" }} width={{ base: "48%", pc: "149px" }} variant="outline">Github</Button>
              </Box>
            </Flex>
          </Box>
          <Box fontSize={{ base: "14px", pc: "16px" }} fontWeight="500" color={"rgba(0, 0, 0, 0.6)"} marginTop={{ pc: "20px", base: "8px" }}>
            <p style={{
              marginTop: "4px",
              marginBottom: "20px",
            }}>
              In February 2023, FILEDOGE was born, it is a MEME token on Filecoin.
              <br></br>
              Based on FIL's smart contract, the FILEDOGE project made its fair release of Genesis. It is a 100% community-based project dedicated to bringing the spirit of DOGE's MEME culture to the FIL ecology and beyond.
            </p>
            <p style={{
            }}>
              There are no centralized teams but only a level playing field that welcomes everyone.The community members of FILEDOGE legion are a bunch of adventurous lunatics, shouting “EAT ZERO OR RETURN TO ZERO!”
            </p>
          </Box>
        </Stack>

      </Box>
    </ModWrapper>
  )
}