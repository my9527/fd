import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

import { Title, ModWrapper, HighLightText } from "./common";

import CardA from "./assets/card_a.svg";
import CardA1 from "./assets/g_a.svg";
import CardB from "./assets/card_b.svg";
import CardB1 from "./assets/g_b.svg";
import CardC from "./assets/card_c.svg";
import CardC1 from "./assets/g_c.svg";
import CardD from "./assets/card_d.svg";
import CardD1 from "./assets/g_d.svg";

const SlipImageStyle = {
    height: "auto",
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    backfaceVisibility: "hidden"
}


const SlipImage = ({ srcFront, srcBack, shadow }) => {

    return (
        <Box
           
            width={{
                pc: "23%"
            }}
            w={"43.2%"}
            marginBottom={{ base: "21px", pc: 0}}
           
            style={{
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "1s",
                aspectRatio: "1/1.466",
                borderRadius: "24px",
            }}
            _hover={{
                transform: "rotateY(180deg)",
                boxShadow: shadow,
            }}
            >
            <Image style={SlipImageStyle} src={srcFront} />
            <Image style={{
                ...SlipImageStyle,
                transform: "rotateY(180deg)"
            }} src={srcBack} />
        </Box>
    );
}



export default () => {
    return (
        <ModWrapper tid="genesis" >
            <Box>
                <Flex alignItems={"baseline"} justifyContent="space-between" marginBottom="24px">
                    <Title>Fair Genesis</Title>
                    <Link href="#"><HighLightText>Know More &gt;</HighLightText></Link>
                </Flex>
                <Box fontSize={{ pc: "16px", base: "14px" }} fontWeight={500} color={"rgba(0, 0, 0, 0.6)"}>
                    <p>After coining 1,000 trillion tokens, we give 60% to the community and the remaining 40% to Filecoin Lab and Vitalik for "Burning". That's where the FILEDOGE project started.</p>
                    <p>This is a fair social experiment. The Genesis team owns 0 tokens. To own the token, the members must buy on the marketplace themselves.
                        <Link href="#"><HighLightText>Click on the tarot</HighLightText></Link> card  to view the detail distribution of genesis:</p>
                </Box>
                <Box marginTop="40px" >
                    <Flex justifyContent={{ pc: "space-between", base: "space-around" }} flexWrap={"wrap"}>
                        <SlipImage shadow={"0px 0px 30px #f59a23"} srcFront={CardA} srcBack={CardA1} ></SlipImage>
                        <SlipImage shadow={"0px 0px 30px #00D1FF"} srcFront={CardB} srcBack={CardB1} ></SlipImage>
                        <SlipImage shadow={"0px 0px 30px #6CC029"} srcFront={CardC} srcBack={CardC1} ></SlipImage>
                        <SlipImage shadow={"0px 0px 30px #5D38C6"} srcFront={CardD} srcBack={CardD1} ></SlipImage>
                    </Flex>
                </Box>
            </Box>
        </ModWrapper>
    );
}