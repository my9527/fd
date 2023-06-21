import { Box, Flex, Link, useToast, Image } from "@chakra-ui/react";
import styled from '@emotion/styled';
import { Title, ModWrapper } from "./common";
import Svg1 from './assets/supports/1.svg';
import Svg2 from './assets/supports/2.svg';
import Svg3 from './assets/supports/3.svg';
import Svg4 from './assets/supports/4.svg';
import Svg5 from './assets/supports/5.svg';
import Svg6 from './assets/supports/6.svg';
import Svg7 from './assets/supports/7.svg';
import Svg8 from './assets/supports/8.svg';
import Svg9 from './assets/supports/9.svg';
import Svg10 from './assets/supports/10.svg';
import Svg11 from './assets/supports/11.svg';
import Svg12 from './assets/supports/12.svg';

const Img = styled(Image)`
  width: 130px;
  height: 130px;
  margin-right: 48px;
  margin-top: 24px;
  cursor: pointer;
  @media screen and (max-width:768px) {
    width: 67px;
    height: 67px;
    margin-right: 12px;
    margin-top: 8px;
  }
`;

export default () => {
  const toast = useToast({
    position: 'top',
    containerStyle: {
      background: "#FFAD06",
      borderRadius: "6px"
    }
  });
  return (
    <ModWrapper tid="supports" marginTop={{ base: '32px', pc: '0px' }}>
      <Box>
        <Flex alignItems={"baseline"} justifyContent="space-between" marginBottom="24px">
          <Title>They Support Us</Title>
        </Flex>
      </Box>
      <Box width={'100%'} display={'flex'} justifyContent={{ base: 'space-between', pc: 'flex-start' }} flexWrap={'wrap'}>
        <Link href="https://twitter.com/Filecoin" target="_blank">
          <Img src={Svg11} />
        </Link>
        <Link href="https://t.me/KuCoin_Memecoins" target="_blank">
          <Img src={Svg10} />
        </Link>
        <Link href="https://www.tokenpocket.pro/" target="_blank">
          <Img src={Svg9} />
        </Link>
        <Link href="https://ave.ai/token/0x2646bb363851d31dca3de045e0eb63d0afeb427d-filecoin?from=Default" target="_blank">
          <Img src={Svg8} />
        </Link>
        <Link href="https://dexscreener.com/filecoin/0xb00a067d047148496556e98660d94e5a27cfd6ab" target="_blank">
          <Img src={Svg7} />
        </Link>
        <Link href="https://coinmarketcap.com/currencies/filedoge/" target="_blank">
          <Img src={Svg6} />
        </Link>
        <Img src={Svg5} marginRight={{ pc: 0 }} onClick={() =>
          toast({
            duration: 3000,
            render: () => {
              return <Box minWidth={"auto"} textAlign={"center"} color='#fff' p={3}>
                Comming Soon!
              </Box>
            }
          })
        } />
        <Link href="https://filfox.info/" target="_blank">
          <Img src={Svg12} />
        </Link>
        <Link href="https://twitter.com/Filecoin_Daily_" target="_blank">
          <Img src={Svg3} />
        </Link>
        <Link href="https://www.opengatenft.com" target="_blank">
          <Img src={Svg1} />
        </Link>
        <Link href="https://metaera.media/" target="_blank">
          <Img src={Svg2} />
        </Link>
        <Box width="67px"></Box>
        {/* <Img src={Svg4} /> */}
      </Box>
    </ModWrapper>
  );
}