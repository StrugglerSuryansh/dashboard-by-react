import React from 'react'
import { Stack, HStack, Icon, Text, Heading, Box } from '@chakra-ui/react'
import { SiWindows11 } from "react-icons/si";
import { FaExpandArrowsAlt } from "react-icons/fa";


const SideNav = () => {

  const navLinks =[
    {
      icon : SiWindows11,
      text:"Dashboard",
      Link :"/"
    },

    {
      icon : FaExpandArrowsAlt,
      text:"Tansactions",
      Link :"/transactions"
    }
   ];

  
  return (
    
   <Stack boxShadow="sm" maxW="16rem" h="100vh"   >
    <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem" >@DOSOMECODING</Heading>
    <Box mt="6">
    {
      navLinks.map((nav)=>(
        <HStack borderRadius="10px" mx='3' mt='6' key={nav.text} py="3" px="4" _hover={
          {
            bg: "#F3F3F7",
            borderRadius: "md",
            color: "#171717",
        }}
        color="#797E82"
         >
          


          <Icon as={nav.icon} />
          <Text fontSize="14px" fontWeight="medium"  >nav.text</Text>
        </HStack>

      ))}
    </Box>

   </Stack>
    
    
  )
}

export default SideNav