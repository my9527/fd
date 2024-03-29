import { Text, Box, Heading } from "@chakra-ui/react"



export const Title = ({ children, ...reset }) => {
  // font-family: "Ubuntu-Regular";
  return <Heading as="h2" fontSize={{ base: "24px", pc: "32px" }} fontFamily={"Ubuntu-Medium"} color={"#000000"} fontWeight={500} lineHeight="150%" {...reset}>{children}</Heading>
}

export const ModWrapper = ({ children, tid, ...restProps }) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      position="relative"
      p={"0 18px"}
      marginTop={{ pc: "93px", base: "32px" }}
      fontFamily={"Ubuntu-Regular"}
      {...restProps}>
      <div id={tid} style={{ position: 'absolute', left: 0, top: 0 }}></div>
      <div style={{ width: '100%', maxWidth: "1200px", position: "relative" }}>
        {children}
      </div>
    </Box>
  );
}

export const HighLightText = ({ children, ...restProps }) => {
  return <Text fontWeight={"500"} display={"inline-block"} color={"#FF9900"}{...restProps}>{children}</Text>
}