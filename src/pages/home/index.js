

import { Box, Image } from "@chakra-ui/react"
import Nav from "./nav";
import FileDog from "./filedoge"
import FairGenesis from "./fair_genesis";
import Airdrop from "./airdrop";
import Airdrop2 from "./airdrop2";
import ThanksGiving from "./thanks";
import Community from "./community";
import RouteMap from "./route_map";
import Footer from "./footer";

import FloatNavIcon from "./assets/float_nav.png";

const FloatNav = () => {

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Box style={{ position: "fixed", right: "10px", top: "70%", zIndex: 1000 }} >
      <Image onClick={handleClick} src={FloatNavIcon} />
    </Box>
  );
}



export default () => {
  return (
    <div style={{ position: "relative", overflowX:"hidden" }}>
      <Nav />
      <FileDog />
      <FairGenesis />
      <Airdrop />
      <Airdrop2 />
      <ThanksGiving />
      <Community />
      <RouteMap />
      <Footer />
      <FloatNav />
    </div>
  )
}