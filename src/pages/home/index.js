

import { Box, Image } from "@chakra-ui/react"
import _ from 'lodash';
import Nav from "./nav";
import FileDog from "./filedoge"
import FairGenesis from "./fair_genesis";
import Airdrop from "./airdrop";
import Airdrop2 from "./airdrop2";
import ThanksGiving from "./thanks";
import Community from "./community";
import RouteMap from "./route_map";
import Footer from "./footer";
import AMADialog from "../../comonents/AMADialog";

import FloatNavIcon from "./assets/float_nav.png";
import { useEffect, useState } from "react";

const FloatNav = () => {
  const [noNav, setNoNav] = useState(true);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = _.debounce(() => {
    if (document.documentElement.scrollTop < window.innerHeight) {
      setNoNav(true);
    } else {
      setNoNav(false);
    }
  }, 300)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  if (noNav) return null;

  return (
    <Box style={{ cursor: 'pointer', position: "fixed", right: "10px", top: "70%", zIndex: 1000 }} >
      <Image onClick={handleClick} src={FloatNavIcon} />
    </Box>
  );
}



export default () => {
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Nav />
      <FileDog />
      <FairGenesis />
      <Airdrop2 />
      <Airdrop />
      <ThanksGiving />
      <Community />
      <RouteMap />
      <Footer />
      <FloatNav />
      <AMADialog />
    </div>
  )
}