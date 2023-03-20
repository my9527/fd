import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useToast,
  Heading
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import styled from '@emotion/styled';

import BgPng from "./assets/bg2.png";
import MbPng from "./assets/bg3.png";
import Logo from "./assets/logo.svg";
import PeopleSvg from './assets/people2.svg';
import SortSvg from './assets/sort.svg';

const PeopleImg = styled(Image)`
  position: absolute;
`;

const Solgan = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 270px;
  color: #fff;
  font-weight: 500;
`;

const BannerText = styled(Box)`
  position: absolute;
  right: 20px;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TextTitle = styled(Heading)`
  display: flex;
  font-style: italic;
  font-weight: 700;
  color: #fff;
`;

const LinearText = styled(Text)`
  font-style: italic;
  font-weight: 700;
  background: linear-gradient(262.33deg, #ACC2F6 -1.46%, #A4F3FB 91.29%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
`;

const TextDes = styled(Text)`
  text-align: right;
  color: #fff;
  font-weight: 300;
  font-style: italic;
`;

export default function WithSubnavigation() {
  // const { isOpen, onToggle } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const toast = useToast({
    position: 'top',
    containerStyle: {
      background: "#FFAD06",
      borderRadius: "6px"
    }
  });

  return (
    <Box height={{ base: '300px', pc: '728px' }} width={{ base: '100vw' }} display="flex" justifyContent="center" bgImage={{ base: MbPng, pc: BgPng }} bgSize={{ base: "100% 100%", pc: 'cover' }} bgRepeat="no-repeat">
      <Box width={{ base: '1200px' }} position="relative" >
        <Flex
          color={"white"}
          py={{ base: 5 }}
          px={{ base: 4 }}
          align={'top'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              ref={btnRef}
              icon={
                <Box display={"inline-flex"} alignItems={'center'}>
                  <Image height={{ base: '32px' }} src={Logo} marginLeft="0px" marginRight={"0.5rem"} cursor="pointer" />
                </Box>
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            >
            </IconButton>

          </Flex>
          <MobileNav isOpen={isOpen} onClose={onClose} />

          <Flex display={{ base: "none", pc: "flex" }} flex={{ base: 0, pc: 1 }} justify={{ base: 'center', pc: 'start' }}>
            <Flex alignItems={"center"} cursor="pointer"
              onClick={() => window.location.href = '/'}>
              <Image src={Logo} />
            </Flex>
            <Flex flex={1} display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            alignItems={"center"}
            flex={0}
            justify={'flex-end'}
            direction={'row'}
            spacing={4}>
            <Button
              onClick={() => {
                window.location.href = '/swap'
              }}
              as={'a'}
              display={{ base: 'inline-flex', pc: 'inline-flex' }}
              fontSize={'14px'}
              fontWeight={600}
              color={'white'}
              bg={'#FFAD06'}
              href={'#'}
              height={{ base: '32px', pc: '38px' }}
              _hover={{
                bg: 'pink.300',
              }}>
              Launch App
            </Button>
            <Image display={{ pc: 'none' }} src={SortSvg} onClick={onOpen} />
          </Stack>
        </Flex>
        <PeopleImg
          src={PeopleSvg}
          height={{ base: '170px', pc: 'auto' }}
          width="auto"
          left={{ base: '10px', pc: '30px' }}
          bottom={{ base: '1px', pc: '-34px' }}
        />
        <Solgan fontSize={{ base: '12px', pc: '30px' }} left={{ base: '150px', pc: '440px' }} bottom={{ base: '140px', pc: '314px' }}>
          <Box fontSize={{ base: '24px', pc: '64px' }}>HI,</Box>
          <Box>Would you like</Box>
          <Box>a cup of</Box>
          <Box>FILEDOGE coffee？</Box>
        </Solgan>
        <BannerText>
          <TextTitle as="h1" fontSize={{ base: '30px', pc: '84px' }}>
            FILE<LinearText paddingRight={{ base: '4px', pc: '10px' }} fontSize={{ base: '30px', pc: '84px' }}>DOGE</LinearText>
          </TextTitle>
          <TextDes width={{ base: '160px', pc: '340px' }} fontSize={{ base: '12px', pc: '24px' }}>The First 100% Decentralized MEME Token on Filecoin</TextDes>
        </BannerText>
      </Box>
    </Box >
  );
}

const goTo = (tid) => {
  var el = document.querySelector(`#${tid}`);
  if (el) {
    el.scrollIntoView();
  }
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white.200', 'gray.200');
  const linkHoverColor = useColorModeValue('white.800', 'gray.200');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} alignItems="center" flex={1} justifyContent="space-between" mr={'60px'}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.link ?? '#'}
                fontSize={'14px'}
                target={navItem.link ? '_blank' : '_self'}
                fontWeight={index === 0 ? 500 : 400}
                whiteSpace={"nowrap"}
                onClick={(e) => {
                  if (navItem.link) return;
                  e.preventDefault();
                  goTo(navItem.tid);
                }}
                color={'rgba(255, 255, 255, 0.6)'}
                _hover={{
                  color: '#fff',
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            fontSize={"14px"}
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          {/* <Text fontSize={'sm'}>{subLabel}</Text> */}
        </Box>
        {/* <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex> */}
      </Stack>
    </Link>
  );
};

const MobileNav = ({ btnRef, onClose, isOpen }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent width={'100%'}>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack marginTop={'40px'}>
              {NAV_ITEMS.map((navItem, index) => (
                <MobileNavItem onClose={onClose} key={navItem.label} index={index} {...navItem} />
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const MobileNavItem = ({ onClose, label, tid, index, href, link }) => {
  return (
    <Link
      padding={'12px 0'}
      href={link ?? '#'}
      fontSize={'14px'}
      target={link ? '_blank' : '_self'}
      fontWeight={index === 0 ? 500 : 400}
      whiteSpace={"nowrap"}
      onClick={(e) => {
        if (link) return;
        e.preventDefault();
        goTo(tid);
        onClose();
      }}
      color={'#000'}
      lineHeight={'150%'}
      _hover={{
        color: '#FFAD06',
        fontWeight: 500,
      }}>
      {label}
    </Link>
  );
};

const NAV_ITEMS = [
  {
    label: "What is FILEDOGE?",
    href: "filedoge",
    tid: "filedoge"
  },
  {
    label: 'Woofpaper',
    link: 'https://filedoge.io/Filedoge_woofpaper.pdf',
  },
  {
    label: 'Fair Genesis',
    href: '#/genesis',
    tid: "genesis"
  },
  {
    label: 'Airdrop Of FIL Holder',
    href: '#',
    tid: "airdrop"
  },
  {
    label: 'How To Buy',
    href: '#',
    tid: "howtobuy"
  },
  {
    label: 'Community',
    href: '#',
    tid: "community"
  },
];