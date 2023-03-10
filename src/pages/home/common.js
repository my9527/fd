import { Text, Box } from "@chakra-ui/react"



export const Title = ({ children }) => {
    // font-family: "Ubuntu-Regular";
    return <Text fontSize={{ base: "24px", pc: "32px"}} fontFamily={"Ubuntu-Medium"} color={"#000000"} fontWeight={500} lineHeight="150%" >{children}</Text>
}

export const ModWrapper = ({ children, tid, ...restProps }) => {
    return (
        <Box
            padding={{
                pc: "0 120px"
            }}
            position="relative"
            p={"0 18px"}
            marginTop={{ pc: "93px", base: "32px" }}
            fontFamily={"Ubuntu-Regular"}
            {...restProps}>
            <div id={tid} style={{ position: 'absolute', left: 0, top: 0 }}></div>
            <div style={{ maxWidth: "1200px", position:"relative"}}>
            {children}
            </div>
        </Box>
    );
}

export const HighLightText = ({ children, ...restProps }) => {
    return <Text fontWeight={"500"} display={"inline-block"} color={"#FF9900"}{...restProps}>{children}</Text>
}