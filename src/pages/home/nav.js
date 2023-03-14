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
  useToast
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import styled from '@emotion/styled';

import BgPng from "./assets/bg2.png";
import Logo from "./assets/logo.svg";
import PeopleSvg from './assets/people2.svg';

const PeopleImg = styled.img`
  position: absolute;
  left: 30px;
  bottom: -34px;
`;

const Solgan = styled.div`
  position: absolute;
  bottom: 314px;
  left: 440px;
  display: flex;
  flex-direction: column;
  width: 270px;
  color: #fff;
  font-weight: 500;
  font-size: 30px;
`;

const BannerText = styled.div`
  position: absolute;
  right: 20px;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TextTitle = styled.div`
  display: flex;
  font-style: italic;
  font-weight: 700;
  font-size: 84px;
  color: #fff;
`;

const LinearText = styled.div`
  padding-right: 10px;
  font-style: italic;
  font-weight: 700;
  font-size: 84px;
  background: linear-gradient(262.33deg, #ACC2F6 -1.46%, #A4F3FB 91.29%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
`;

const TextDes = styled.div`
  width: 340px;
  text-align: right;
  font-size: 24px;
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
    <Box height={'728px'} width={{ base: '100vw' }} display="flex" justifyContent="center" bgImage={{ base: BgPng }} bgSize="cover" bgRepeat="no-repeat">
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
              onClick={onOpen}
              icon={
                <Box display={"inline-flex"} alignItems={'center'}>
                  <Image src={Logo} w={8} h={8} marginLeft="0px" marginRight={"0.5rem"} cursor="pointer" />
                  <b style={{ fontWeight: "900" }} cursor="pointer">FILEDOGE</b>
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
              onClick={() =>
                toast({
                  duration: 3000,
                  render: () => {
                    return <Box minWidth={"auto"} textAlign={"center"} color='#fff' p={3}>
                      Comming Soon!
                    </Box>
                  }
                })
              }
              as={'a'}
              display={{ base: 'inline-flex', pc: 'inline-flex' }}
              fontSize={'14px'}
              fontWeight={600}
              color={'white'}
              bg={'#FFAD06'}
              href={'#'}
              height="38px"
              _hover={{
                bg: 'pink.300',
              }}>
              Connect Wallet
            </Button>
          </Stack>
        </Flex>
        <PeopleImg src={PeopleSvg} />
        <Solgan>
          <Box fontSize={'64px'}>HI,</Box>
          <Box>Would you like</Box>
          <Box>a cup of</Box>
          <Box>Filedoge coffee？</Box>
        </Solgan>
        <BannerText>
          <TextTitle>
            FILE<LinearText>DOGE</LinearText>
          </TextTitle>
          <TextDes>The First 100% Decentralized MeMe Token on Filecoin</TextDes>
        </BannerText>
      </Box>
    </Box>
  );
}

const goTo = (tid) => {
  var el = document.querySelector(`#${tid}`);
  console.log("el", el);
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
                color={index === 0 ? '#fff' : 'rgba(255, 255, 255, 0.6)'}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
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
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            {NAV_ITEMS.map((navItem) => (
              <MobileNavItem key={navItem.label} {...navItem} />
            ))}
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const NAV_ITEMS = [
  {
    label: "What is FileDoge?",
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