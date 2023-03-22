import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
  border,
  Heading
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import FooterLogo from "./assets/filedogeLogo.svg";

import FooterTwitter from "./assets/twitter2.svg";
import FooterReddit from "./assets/reddit.svg";
import CopyIcon from "./assets/copy.svg";
import { HighLightText } from './common';

const CopyRight = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 40px 0 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  display: flex;
  justify-content: center;
  letter-spacing: 0.2px;
  color: #FFFFFF;
  opacity: 0.4;
`;

const Logo = (props) => {
  return (
    <Image width="69px" src={FooterLogo} />
  );
};

const ListHeader = ({ children }) => {
  return (
    <Heading as="h3" fontWeight={'500'} whiteSpace={"nowrap"} color={"#FFFFFF"} fontSize={'14px'} mb={2}>
      {children}
    </Heading>
  );
};



const PCFooter = () => {
  const toast = useToast({
    position: 'top',
    containerStyle: {
      background: "rgba(0,0,0,.7)",
      borderRadius: "6px"
    }
  });

  const hanldeCopy = async (text) => {
    try {
      await window.navigator.clipboard.writeText(text);
      toast({

        duration: 2000,
        render: () => {
          return <Box minWidth={"auto"} textAlign={"center"} color='#fff' p={3}>
            Copy Success
          </Box>
        }
      })
    } catch (e) {
      console.log(e);
    }

  }
  return (
    <Container display={{ base: "none", pc: "block" }} width={{ base: 0, pc: "1200px" }} as={Stack} maxW={'8xl'} py={10} fontSize={"12px"} color="rgba(255, 255, 255, 0.6)">
      <SimpleGrid
        templateColumns={{ pc: '1fr 1fr 1fr 1fr 1fr' }}
        spacing={10}>
        <Stack>
          <Box>
            <Logo color={useColorModeValue('gray.700', 'white')} />
          </Box>
          <Text color={"#FFFFFF"} fontStyle={"italic"} maxWidth={"138px"} fontWeight="300" fontSize="14px">
            The First 100% Decentralized MEME Token on Filecoin
          </Text>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>CONTACT US</ListHeader>
          <Link href={'mailto:hi@filedoge.io'}>hi@filedoge.io</Link>
          <Link href={'mailto:partner@filedoge.io'}>partner@filedoge.io</Link>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>USEFUL LINKS</ListHeader>
          <Link target={'_blank'} href={'https://filecoin.io/'}>Filecoin Offical</Link>
          <Link target={'_blank'} href={'https://filfox.info/'}>FilFox INFO</Link>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>DONATION</ListHeader>
          <Link _hover={{ textDecoration: 'none' }}>FILEDOGE donation address <HighLightText style={{ maxWidth: "18em", whiteSpace: "pre-wrap", textDecoration: "underline" }} _hover={{ opacity: '0.8' }} onClick={() => hanldeCopy('0xA1A73D35e8141E6d36b0f7cad638bD98F5d718B4')}>0xA1A73D35e8141E6d36b0f7cad638bD98F5d718B4<Image marginLeft={"4px"} transform={"translateY(25%)"} display={"inline-block"} width={"16px"} height={"16px"} src={CopyIcon}></Image></HighLightText></Link>
          <Link _hover={{ textDecoration: 'none' }}>Filecoin donation address <HighLightText style={{ maxWidth: "18em", whiteSpace: "pre-wrap", textDecoration: "underline" }} _hover={{ opacity: '0.8' }} onClick={() => hanldeCopy('f1onzpvnvvnb237uo4g7zvt3efckgexyp5otghh2y')}>f1onzpvnvvnb237uo4g7zvt3efckgexyp5otghh2y<Image marginLeft={"4px"} transform={"translateY(25%)"} display={"inline-block"} width={"16px"} height={"16px"} src={CopyIcon}></Image></HighLightText></Link>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>JOIN COMMUNITY</ListHeader>
          <Flex alignItems={"center"}>
            <Link target={'_blank'} href={'https://discord.com/invite/FM2WY62FR4'} marginRight={"1em"} ><Image _hover={{ opacity: "0.8" }} src={FooterReddit} /></Link>
            <Link target={'_blank'} href={'https://twitter.com/Filedogetoken'}><Image _hover={{ opacity: "0.8" }} src={FooterTwitter} /></Link>
          </Flex>
        </Stack>
      </SimpleGrid>

    </Container>
  );
}



const MobileFooter = () => {
  const toast = useToast({
    position: 'top',
    containerStyle: {
      background: "rgba(0,0,0,.7)",
      minWidth: "auto",
      width: "auto",
      borderRadius: "6px"
    }
  });

  const hanldeCopy = async (text) => {
    try {
      await window.navigator.clipboard.writeText(text);
      toast({
        duration: 2000,
        render: () => {
          return <Box minWidth={"auto"} textAlign={"center"} color='#fff' p={3}>
            Copy Success
          </Box>
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Container display={{ base: "block", pc: "none" }} width={{ base: "100%", pc: 0 }} as={Stack} maxW={'8xl'} py={10} fontSize={"12px"} color="rgba(255, 255, 255, 0.6)">
      <SimpleGrid
      >
        <Stack padding={"var(--chakra-space-4)"}>
          <Box>
            <Logo color={useColorModeValue('gray.700', 'white')} />
          </Box>
          <Text color={"#FFFFFF"} fontStyle={"italic"} fontWeight="300" fontSize="14px">
            The First 100% Decentralized MEME Token on Filecoin
          </Text>
        </Stack>
        <Accordion fontSize={"14px"} width={{ base: "100%", pc: 0 }} defaultIndex={2} allowMultiple>
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  <ListHeader>CONTACT US</ListHeader>
                </Box>
                <AccordionIcon style={{ transform: "translateY(-25%)" }} />
              </AccordionButton>
            </h2>
            <AccordionPanel >
              <div><Link href={'#'}>hi@filedoge.io</Link></div>
              <div style={{ marginTop: "12px" }}><Link href={'#'}>partner@filedoge.io</Link></div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  <ListHeader>USEFUL LINKS</ListHeader>
                </Box>
                <AccordionIcon style={{ transform: "translateY(-25%)" }} />
              </AccordionButton>
            </h2>
            <AccordionPanel >
              <div><Link target={'_blank'} href={'https://filecoin.io/'}>Filecoin Offical</Link></div>
              <div style={{ marginTop: "12px" }}><Link target={'_blank'} href={'https://filfox.info/'}>FilFox INFO</Link></div>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  <ListHeader>DONATION</ListHeader>
                </Box>
                <AccordionIcon style={{ transform: "translateY(-25%)" }} />
              </AccordionButton>
            </h2>
            <AccordionPanel >
              <div>
                <Link href={'#'}>FILEDOGE donation address</Link>
                <div><HighLightText style={{ maxWidth: "18em", whiteSpace: "pre-wrap" }} onClick={() => hanldeCopy('0xA1A73D35e8141E6d36b0f7cad638bD98F5d718B4')}>0xA1A73D35e8141E6d36b0f7cad638bD98F5d718B4<Image marginLeft={"4px"} transform={"translateY(25%)"} display={"inline-block"} width={"16px"} height={"16px"} src={CopyIcon}></Image></HighLightText></div>
              </div>
              <div style={{ maxWidth: "18em", whiteSpace: "pre-wrap", marginTop: "12px" }}>
                <Link>Filecoin donation address</Link>
                <HighLightText onClick={() => hanldeCopy('f1onzpvnvvnb237uo4g7zvt3efckgexyp5otghh2y')} >f1onzpvnvvnb237uo4g7zvt3efckgexyp5otghh2y <Image width={"16px"} height={"16px"} src={CopyIcon}></Image></HighLightText>
              </div>


            </AccordionPanel>
          </AccordionItem>



          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  <ListHeader>JOIN COMMUNITY</ListHeader>
                </Box>
                <AccordionIcon style={{ transform: "translateY(-25%)" }} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>

              <Flex alignItems={"center"}>
                <Link target={'_blank'} marginRight={"2em"} href={'https://discord.com/invite/FM2WY62FR4'} ><Image src={FooterReddit} /></Link>
                <Link target={'_blank'} href={'https://twitter.com/Filedogetoken'}><Image src={FooterTwitter} /></Link>
              </Flex>
            </AccordionPanel>
          </AccordionItem>


        </Accordion>
      </SimpleGrid>

    </Container>
  );
}

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={"#191919"}
      marginTop={{ base: "50px", pc: "130px" }}
    >
      <PCFooter />
      <MobileFooter />
      <CopyRight>Copyright © 2023-2025 FILEDOGE Token</CopyRight>
    </Box>
  );
}