import Link from "next/link";
import { Box, Grid, GridItem, Center, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Header({
  children,
  backEnabled = false,
}: {
  children: React.ReactNode;
  backEnabled?: boolean;
}) {
  return (
    <div
      style={{
        filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.35))",
      }}
    >
      <Box
        w="100%"
        h={["9rem", "10.5rem", "12rem"]}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        style={{
          clipPath: `ellipse(100% 55% at 48% 44%)`,
        }}
      >
        <Center h="100%">
          <Grid
            templateColumns="repeat(8, 1fr)"
            pb="1rem"
            w={["98%", "99%", "100%"]}
          >
            <GridItem colSpan={1}>
              {backEnabled && (
                <Center h="100%">
                  <Link href="/">
                    <ArrowBackIcon
                      w={10}
                      h={10}
                      color="white"
                      textShadow="0 4px 6px rgba(0, 0, 0, 0.3)"
                      _hover={{ cursor: "pointer" }}
                    />
                  </Link>
                </Center>
              )}
            </GridItem>
            <GridItem colSpan={6}>
              <Text
                as="h1"
                align="center"
                fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}
                fontWeight={{ base: 500, md: 600, lg: 700 }}
                noOfLines={2}
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "white",
                  textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                {children}
              </Text>
            </GridItem>
            <GridItem colSpan={1}>{/** spacing */}</GridItem>
          </Grid>
        </Center>
      </Box>
    </div>
  );
}
