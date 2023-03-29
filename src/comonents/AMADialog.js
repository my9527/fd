import { useEffect, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
  Box, useDisclosure, Image, Heading, Center, Text, ModalCloseButton,
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, Link
} from '@chakra-ui/react';
import AMAPng from './ama.png';

const BoxContent = () => (
  <Box borderRadius={'20px'} marginTop={{ base: '24px', pc: 0 }} display={'flex'} padding={{ base: '24px 16px' }} flexDirection={{ base: 'column', pc: 'row' }}>
    <Image marginRight={{ base: 0, pc: '24px' }} src={AMAPng} maxWidth={{ base: '100%', pc: '38%' }} maxHeight={'auto'} borderRadius={'12px'} />
    <Box>
      <Text fontWeight={700} fontSize={'20px'}>We Are Pleased To Announce Our Exclusive AMA With KuCoin</Text>

      <Text fontSize={'14px'} marginTop={'12px'}>⏰14:00 on March 30, 2023 (UTC)</Text>
      <Text fontSize={'14px'} marginTop={'8px'}>📍 <Link textDecoration={'underline'} _hover={{ opacity: 0.8 }} href={'https://t.me/KuCoin_Memecoins'} target={'_blank'}>https://t.me/KuCoin_Memecoins</Link></Text>

      <Text fontSize={'14px'} marginTop={'8px'}>🪂 The Second Round #Airdrop #event🪂</Text>
      <Text fontSize={'14px'} marginTop={'8px'}>Reward :$50,000,000 FILEDOGE</Text>
      <Box fontSize={'12px'} opacity={'0.6'} marginTop={'12px'}>
        <Text>Rules:</Text>
        <Text>1. Retweet & Tag 3 friends <Link textDecoration={'underline'} _hover={{ opacity: 0.8 }} href={'https://twitter.com/Filedogetoken/status/1640349180475613185'} target={'_blank'}>https://twitter.com/Filedogetoken/status/1640349180475613185</Link></Text>
        <Text>2. Fill out the form <Link textDecoration={'underline'} _hover={{ opacity: 0.8 }} href={'https://forms.gle/wvaX6i4jwxqbJNQa6'} target={'_blank'}>https://forms.gle/wvaX6i4jwxqbJNQa6</Link></Text>
      </Box>
    </Box>
  </Box>
);

export default function AMADialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let timer = setTimeout(() => {
      onOpen();
    }, 2000)

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
      <DrawerOverlay />
      <DrawerContent borderRadius={'20px 20px 0 0'} maxWidth={'1200px !important'} margin={'0 auto'}>
        <DrawerCloseButton />
        <BoxContent />
      </DrawerContent>
    </Drawer>
  );
}