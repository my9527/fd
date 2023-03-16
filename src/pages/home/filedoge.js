

import { Box, Button, Flex, Image, Stack, Link } from "@chakra-ui/react";
import filedogeBg from "./assets/filedoge_bg.png";
import filedogeEq from "./assets/filedoge_eq.svg";
import { ModWrapper, Title } from "./common";

const tokenAddress = '0x2646bb363851d31dca3de045e0eb63d0afeb427d';
const tokenSymbol = 'FILEDOGE';
const tokenDecimals = 18;
const tokenImage = 'https://filedoge.io/assets/logo.svg';


export default () => {
  const addToMetaMask = async () => {
    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        console.log('Token added Successfully!');
      } else {
        console.log('Failed to add the token');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addMainNet = async () => {
    if (!window.ethereum) return;
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: `0x${(314).toString(16)}`,
          chainName: 'Filecoin - Mainnet',
          nativeCurrency: {
            name: "filecoin",
            symbol: "FIL",
            decimals: 18
          },
          rpcUrls: ["https://api.node.glif.io/", "https://rpc.ankr.com/filecoin, https://filecoin-mainnet.chainstacklabs.com/rpc/v1"],
          blockExplorerUrls: ["https://filfox.info/en"],
        },
      ],
    });
  }
  return (
    <ModWrapper p={"0 0"} marginTop="-33px" tid="filedoge">
      <Box bgRepeat={"no-repeat"} bgSize="cover" bgImage={filedogeBg} borderRadius="24" padding={{ base: "18px", pc: "64px 64px 82px 64px" }}>
        <Stack justify={"center"}>
          <Flex alignItems={"center"} justify="center" marginBottom={{ pc: "28px", base: "14px" }}  >
            <Title fontSize={{ base: '24px', pc: "32px" }} lineHeight="150%" fontWeight={500}>What is FILEDOGE?</Title>
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
          <Box marginTop={'20px !important'} padding={'24px'} border={'1px solid #E7EFFF'} borderRadius={'2px'} display={'flex'} justifyContent={'space-between'} fontWeight={500} fontSize={{ pc: '16px' }} flexDirection={{ base: 'column' }}>
            <Box display={'flex'} flexDirection={{ base: 'column', pc: 'row' }}>
              <Box color={'rgba(0, 0, 0, 0.6)'}>1. Install MetaMask Wallet</Box>
              <Link href='https://metamask.io/' target='_blank' cursor={'pointer'} color={'#000'} textDecoration={'underline'} marginLeft={{ base: '0', pc: '24px' }} _hover={{ opacity: 0.8 }}>https://metamask.io/</Link>
            </Box>
            <Box marginTop={'12px'} display={'flex'} flexDirection={{ base: 'column', pc: 'row' }} justifyContent={'space-between'}>
              <Box color={'rgba(0, 0, 0, 0.6)'}>2. Add Filecoin MainNet</Box>
              <Box marginTop={{ base: '12px !important', pc: '0 !important' }} color={'#FFAD06'} cursor='pointer' _hover={{ opacity: 0.8 }} onClick={addMainNet}>+ Connect Filecoin MainNet</Box>
            </Box>
            <Box marginTop={'12px'} display={'flex'} flexDirection={{ base: 'column', pc: 'row' }} justifyContent={'space-between'}>
              <Box display={'flex'} flexDirection={{ base: 'column', pc: 'row' }}>
                <Box color={'rgba(0, 0, 0, 0.6)'}>3. FILEDOGE Contract Address</Box>
                <Box cursor={'pointer'} color={'#000'} textDecoration={'underline'} marginLeft={{ base: '0', pc: '24px' }} _hover={{ opacity: 0.8 }} onClick={addToMetaMask}>0x2646bb363851d31dca3de045e0eb63d0afeb427d</Box>
              </Box>
              <Box marginTop={{ base: '12px !important', pc: '0 !important' }} color={'#FFAD06'} cursor='pointer' _hover={{ opacity: 0.8 }} onClick={addToMetaMask}>+ Add FILEDOGE To MetaMask</Box>
            </Box>
          </Box>
        </Stack>

      </Box>
    </ModWrapper>
  )
}