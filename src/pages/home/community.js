import { Box, Flex, Image, Stack, Text, Link, Heading } from "@chakra-ui/react";
import { HighLightText, ModWrapper, Title } from "./common";
import Twitter from "./assets/twitter.svg";
import Reddit from "./assets/discord.svg";

import WhyFile from "./assets/why_chosse_filecoin.png";
import MemoCalture from "./assets/meme_calture.png";
import { css } from "@emotion/react";


const WhyP = css`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: rgba(0, 0, 0, 0.4);
background-position: 100% 100%;
background-repeat: no-repeat;
background-image: url(${WhyFile}), linear-gradient(84.42deg, #E9F1FF 0.29%, #FFFFFF 100%);
`
const MemoP = css`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: rgba(0, 0, 0, 0.4);
background-repeat: no-repeat;
background-position: 100% 100%;
background-image: url(${MemoCalture}), linear-gradient(84.42deg, #FFF9E9 0.29%, #FFFFFF 100%);
`

export default () => {

  return (
    <ModWrapper marginTop={{ base: "34px", pc: "100px" }} tid="community">
      <Flex justifyContent={"center"} marginBottom={"40px"}>
        <Title>Community</Title>
      </Flex>
      <Flex justifyContent={"center"} marginBottom={"40px"}>
        <Link marginRight={"2em"} target={'_blank'} href={'https://twitter.com/Filedogetoken'}>
          <Image _hover={{ opacity: "0.8" }} src={Twitter} />
        </Link>
        <Link target={'_blank'} href={'https://discord.gg/a83AMEY7mC'}>
          <Image _hover={{ opacity: "0.8" }} src={Reddit} marginLeft={"2em"} />
        </Link>
      </Flex>
      <Box fontSize={{ base: "14px", pc: "16px" }} fontWeight={500} color={"rgba(0, 0, 0, 0.6)"}>
        <p>FILEDOGE legion is an innovative, adventurous, and talented community team. Although the R&D team, marketing personnel, designers, country managers, and administrators have not worked together before, the close collaboration within the FILEDOGE legion has allowed the initial dream to gradually come true. This is also an extremely open and inclusive community where you can:</p>
        <p>1. Join a community of crazy people who love memes and decentralization, and go crazy with them!</p>
        <p>2. Show your great talent no matter who you are and where you come from!</p>
        <p>3. Be brave and create everything! It's a social experiment that starts from zero, show your great courage!</p>
        <br />
        <div>To motivate community members,<HighLightText fontSize={"20px"}>1%</HighLightText> of the total supply is airdropped to the first 100,000 community members.</div>
      </Box>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"} marginTop={{ base: "42px", pc: "116px" }} >
        <Box borderRadius={"12px"} padding={{ base: "24px", pc: "40px" }} width={{ base: "100%", pc: "48%" }} bgRepeat={"no-repeat"} bgSize={"100%"} css={WhyP} >
          <Heading as="h3" marginBottom={"20px"} color={"#121318"} fontSize="20px" fontWeight={700}>Why Chosse Filecoin?</Heading>
          <Box>
            <p>Our founder Fredrick is a fan of BTC, ETH and also FIL. We chose FIL because its FVM is fully compatible with EVM, making FIL as safe and sound as ETH. FIL also has an incomparable strength in storage, allowing the community to remain continuously decentralized.</p>
            <p>The FILEDOGE legion enthusiasts are convinced that with the launch of the FVM, countless smart contract-based eco-applications will blossom on FIL. FILEDOGE will be the most entertaining and adventurous application on FIL.</p>
          </Box>
        </Box>
        <Box marginTop={{ pc: "0", base: "24px" }} borderRadius={"12px"} padding={{ base: "24px", pc: "40px" }} width={{ base: "100%", pc: "48%" }} bgRepeat={"no-repeat"} bgSize={"contain"} css={MemoP}>
          <Heading as="h3" marginBottom={"20px"} color={"#121318"} fontSize="20px" fontWeight={700}>MEME Culture</Heading>
          <Box>
            <p>The Bitcoin legion loves decentralization, and also loves MEME culture.</p>
            <p>In the Web 2.0 era, memes came into the spotlight, representing different cultural phenomena and showing us the magic power of communication that content from popular culture or subculture has.</p>
            <p>While in the era of Web 3.0, the combination of memes, decentralization, and crypto is going viral in the world, which is a new form out of the traditional narratives. As a new way to gain the right to speak, it allows everyone to participate in creating a shared culture, and is a passport to the new world.</p>
          </Box>
        </Box>
      </Flex>
    </ModWrapper>
  );
}