import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div style={{"background": "white", "borderRadius": "25px"}}>
      <Image style={{"borderRadius": "15px"}} src={imageSrc}/>
      <Heading style={{"color": "black", "padding":"10px"}}>{title}</Heading>
      <Text style={{"color": "grey",  "padding":"10px"}}>{description}</Text>
      <p style={{"color": "black",  "padding":"10px",}}>See More 
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </p>
      
      
    </div>
  );
};

export default Card;
