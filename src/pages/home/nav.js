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
    Image

} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

import BannerPc from './assets/banner_pc.png';
import BannerM from "./assets/banner_m.png"
import Logo from "./assets/logo.png";


export default function WithSubnavigation() {
    // const { isOpen, onToggle } = useDisclosure();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box height={{ base: "80vw", pc: "48vw" }} padding={{ base: "0", pc: "0 120px" }} bgImage={{ base: BannerM, pc: BannerPc }} bgSize="cover" bgRepeat="no-repeat">
            <Flex
                color={"white"}
                py={{ base: 2 }}
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
                                <Image src={Logo} w={8} h={8} marginLeft="0px" marginRight={"0.5rem"} />
                                <b style={{ fontWeight: "900"}} >FILEDOGE</b>
                            </Box>
                            
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    >
                        </IconButton>
                    
                </Flex>
                <MobileNav  isOpen={isOpen} onClose={onClose}  />

                <Flex display={{ base: "none", pc: "flex" }} flex={{ base: 0, pc: 1 }} justify={{ base: 'center', pc: 'start' }}>
                    <Flex alignItems={"center"}>
                        <Image src={Logo} w={43} h={43} />
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', pc: 'center' })}
                            fontFamily={'heading'}
                            marginLeft="3px"
                            color={"white"}>
                            FILEDOGE
                        </Text>
                    </Flex>
                    

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
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
                        connect wallet
                    </Button>
                </Stack>
            </Flex>

        </Box>
    );
}

const goTo = (tid) => {
    var el = document.querySelector(`#${tid}`);
    console.log("el", el);
    if(el) {
        el.scrollIntoView();
    }
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('white.200', 'gray.200');
    const linkHoverColor = useColorModeValue('white.800', 'gray.200');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4} alignItems="center">
        {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}  >
                <Popover trigger={'hover'} placement={'bottom-start'}>
                    <PopoverTrigger>
                        <Link
                            href={navItem.href ?? '#'}
                            fontSize={'14px'}
                            fontWeight={500}
                            whiteSpace={"nowrap"}
                            onClick={(e) =>{e.preventDefault(); goTo(navItem.tid)} }
                            color={linkColor}
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

const MobileNav = ({ btnRef, onClose,  isOpen }) => {
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
        label: "What's file dog",
        href:"filedoge",
        tid: "filedoge"
    },
    {
        label: 'Woofpaper',
        tid: "Woofpaper"

    },
    {
        label: 'Fair Genesis',
        href: '#/genesis',
        tid: "genesis"
    },
    {
        label: 'Airdrop of FIL Holder',
        href: '#',
        tid: "airdrop"
    },
];