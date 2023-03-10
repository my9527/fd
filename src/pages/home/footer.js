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
} from '@chakra-ui/react';

import FooterLogo from "./assets/footer_logo.png";

import FooterTwitter from "./assets/footer_twitter.png";
import FooterReddit from "./assets/footer_reddit.png";
import CopyIcon from "./assets/copy.png";
import { HighLightText } from './common';

const Logo = (props) => {
    return (
        <Image width="69px" src={FooterLogo} />
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} whiteSpace={"nowrap"} color={"#FFFFFF"} fontSize={'14px'} mb={2}>
            {children}
        </Text>
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

    const hanldeCopy = async (e) => {
        e.preventDefault();
        try{
            await window.navigator.clipboard.writeText("f1onzpvnvvnb237uo4g7zvt3efckgexyp5otghh2y");
            toast({
               
                duration: 1000,
                render: () => {
                    return  <Box  minWidth={"auto"} textAlign={"center"} color='#fff' p={3}>
                     Copy Success
                     </Box>
                 }
            })
        }catch(e) {
            console.log(e);
        }
        
    }
    return (
        <Container display={{ base: "none", pc: "block" }} width={{ base: 0, pc: "100%" }} as={Stack} maxW={'8xl'} py={10} fontSize={"12px"} color="rgba(255, 255, 255, 0.6)">
            <SimpleGrid
                templateColumns={{ pc: '1fr 1fr 1fr 1fr 1fr' }}
                spacing={10}>
                <Stack>
                    <Box>
                        <Logo color={useColorModeValue('gray.700', 'white')} />
                    </Box>
                    <Text color={"#FFFFFF"} fontStyle={"italic"} maxWidth={"138px"} fontWeight="300" fontSize="14px">
                        The First 100% Decentralized MeMe Token on Filecoin
                    </Text>
                </Stack>
                <Stack align={'flex-start'}>
                    <ListHeader>CONTACT US</ListHeader>
                    <Link href={'#'}>hi@filedoge.io</Link>
                    <Link href={'#'}>partner@filedoge.io</Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <ListHeader>USEFUL LINKS</ListHeader>
                    <Link href={'#'}>Filecoin Offical</Link>
                    <Link href={'#'}>Filescan IO</Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <ListHeader>DONATION</ListHeader>
                    <Link href={'#'}>Filedoge donation address <HighLightText style={{ maxWidth: "18em", whiteSpace: "pre-wrap", textDecoration: "underline" }}>Comming soon</HighLightText></Link>
                    <Link href={'#'}>Filecoin donation address <HighLightText style={{ maxWidth: "18em", whiteSpace: "pre-wrap", textDecoration: "underline" }}>f1onzpvnvvnb237uo4g7zvt3efckgexyp5otghh2y<Image marginLeft={"4px"} transform={"translateY(25%)"} display={"inline-block"} onClick={hanldeCopy} width={"16px"} height={"16px"} src={CopyIcon}></Image></HighLightText></Link>
                </Stack>
                <Stack align={'flex-start'}>
                    <ListHeader>JOIN COMMUNITY</ListHeader>
                    <Flex alignItems={"center"}>
                        <Link href={'#'} marginRight={"1em"} ><Image _hover={{ opacity: "0.8" }} src={FooterReddit} /></Link>
                        <Link href={'#'}><Image _hover={{ opacity: "0.8" }} src={FooterTwitter} /></Link>
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
            width:"auto",
            borderRadius: "6px"
        }
    });

    const hanldeCopy = async () => {
        try{
            await window.navigator.clipboard.writeText("f1onzpvnvvnb237uo4g7zvt3efckgexyp5otghh2y");
            toast({
                duration: 1000,
                render: () => {
                   return  <Box  minWidth={"auto"} textAlign={"center"} color='#fff' p={3}>
                    Copy Success
                    </Box>
                }
            })
        }catch(e) {
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
                        The First 100% Decentralized MeMe Token on Filecoin
                    </Text>
                </Stack>
                <Accordion fontSize={"14px"} width={{ base: "100%", pc: 0 }} defaultIndex={2} allowMultiple>
                    <AccordionItem border={"none"}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <ListHeader>CONTACT US</ListHeader>
                                </Box>
                                <AccordionIcon style={{ transform: "translateY(-25%)"}} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel >
                            <div><Link href={'#'}>hi@filedoge.io</Link></div>
                            <div style={{ marginTop: "12px"}}><Link href={'#'}>partner@filedoge.io</Link></div>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem border={"none"}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <ListHeader>USEFUL LINKS</ListHeader>
                                </Box>
                                <AccordionIcon  style={{ transform: "translateY(-25%)"}} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel >
                            <div><Link href={'#'}>Filecoin Offical</Link></div>
                            <div style={{ marginTop: "12px"}}><Link href={'#'}>Filescan IO</Link></div>
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem border={"none"}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <ListHeader>DONATION</ListHeader>
                                </Box>
                                <AccordionIcon style={{ transform: "translateY(-25%)"}} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel >
                            <div>
                                <Link href={'#'}>Filedoge donation address</Link>
                                <div><HighLightText style={{ maxWidth: "18em", whiteSpace: "pre-wrap" }}>Comming soon</HighLightText></div>
                            </div>
                            <div  style={{ maxWidth: "18em", whiteSpace: "pre-wrap", marginTop: "12px" }}>
                                <Link href={'#'}>Filecoin donation address
                                </Link>
                                <HighLightText>f1onzpvnvvnb237uo4g7zvt3efckgexyp5otghh2y <Image onClick={hanldeCopy} width={"16px"} height={"16px"} src={CopyIcon}></Image></HighLightText>
                                </div>


                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem border={"none"}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <ListHeader>JOIN COMMUNITY</ListHeader>
                                </Box>
                                <AccordionIcon style={{ transform: "translateY(-25%)"}} />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <Flex alignItems={"center"}>
                            <Link marginRight={"2em"} href={'#'} ><Image src={FooterReddit} /></Link>
                            <Link href={'#'}><Image src={FooterTwitter} /></Link>
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
            padding={{ base: "", pc: "60px 20px" }}
        >
            <PCFooter />
            <MobileFooter />
        </Box>
    );
}