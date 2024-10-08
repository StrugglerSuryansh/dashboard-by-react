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
    
   <Stack boxShadow="sm" maxW="16rem" h="100vh" bg="red">
    <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem" >@DOSOMECODING</Heading>
    <Box mt="6">
    {
      navLinks.map((nav)=>(
        <HStack mx='3' key={nav.text}>
          <Icon as={nav.icon} />
          <Text>nav.text</Text>
        </HStack>

      ))}
    </Box>

   </Stack>
    
    
  )
}

export default SideNav