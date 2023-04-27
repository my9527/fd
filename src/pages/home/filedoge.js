

import { Box, Button, Flex, Image, Stack, Link, Center } from "@chakra-ui/react";
import filedogeBg from "./assets/filedoge_bg.png";
import filedogeEq from "./assets/filedoge_eq.svg";
import { ModWrapper, Title } from "./common";

const tokenAddress = '0x2646bb363851d31dca3de045e0eb63d0afeb427d';
const tokenSymbol = 'FILEDOGE';
const tokenDecimals = 18;
const tokenImage = 'https://www.filedoge.io/assets/logo.svg';


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
          rpcUrls: ["https://filfox.info/rpc/v1", "https://rpc.ankr.com/filecoin, https://filecoin-mainnet.chainstacklabs.com/rpc/v1"],
          blockExplorerUrls: ["https://filfox.info/en"],
        },
      ],
    });
  }
  return (
    <ModWrapper p={"0 0"} marginTop="-33px" tid="filedoge">
      <Box bgRepeat={"no-repeat"} bgSize="cover" bgImage={filedogeBg} borderRadius="24" padding={{ base: "18px", pc: "64px 64px 82px 64px" }}>
        <Stack justify={"center"}>
          <Flex alignItems={"center"} justify="center" marginBottom={{ pc: "20px", base: "12px" }}  >
            <Title fontSize={{ base: '24px', pc: "32px" }} lineHeight="150%" fontWeight={500}>What is FILEDOGE?</Title>
          </Flex>
          <Center>
            <Image width={{ base: "70%", pc: "32.25%" }} src={filedogeEq} />
          </Center>
          <Center display={'flex'} flexDirection={{ base: 'column', pc: 'row' }} fontWeight={500} fontSize={{ base: 14, pc: '20px' }}>
            <Box color={'rgba(0, 0, 0, 0.6)'}>FILEDOGE Contract Address</Box>
            <Box cursor={'pointer'} color={'#000'} textDecoration={'underline'} marginLeft={{ base: '0', pc: '24px' }} _hover={{ opacity: 0.8 }} onClick={addToMetaMask}>0x2646bb363851d31dca3de045e0eb63d0afeb427d</Box>
          </Center>
          <Center
            margin={'24px 0 !important '}
            display={'flex'}
            justifyContent={{ base: 'space-between', pc: 'center' }}
          >
            <Button
              onClick={() => {
                window.open('https://filedoge.io/swap/#/swap', '_blank')
              }}
              height={'48px'}
              width={{ base: "27.46%", pc: "20%" }} 
              bgColor={"#FFAD06"} 
              color={"white"}
              fontSize={'14px'}
              _hover={{
                opacity: 0.6
              }}
            >
              Buy
            </Button>
            <Button
              onClick={addToMetaMask}
              height={'48px'}
              border={"1px solid"}
              marginLeft={{ base: 0, pc: "19px" }}
              width={{ base: "27.46%", pc: "20%" }}
              variant="outline"
              fontSize={'14px'}
              whiteSpace={'wrap'}
              _hover={{
                opacity: 0.6
              }}
            >
              Add To Metamask
            </Button>
            <Button
              onClick={addMainNet}
              height={'48px'}
              border={"1px solid"}
              marginLeft={{ base: 0, pc: "19px" }}
              width={{ base: "27.46%", pc: "20%" }}
              variant="outline"
              fontSize={'14px'}
              whiteSpace={'wrap'}
              _hover={{
                opacity: 0.6
              }}
            >
              Add MainNet
            </Button>
          </Center>
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
              There are no centralized teams but only a level playing field that welcomes everyone.The community members of FILEDOGE legion are a bunch of adventurous lunatics, shouting 「EAT ZERO OR RETURN TO ZERO!」
            </p>
          </Box>
        </Stack>

      </Box>
    </ModWrapper>
  )
}