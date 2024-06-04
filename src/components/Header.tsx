import { Button, Flex, Icon } from "@chakra-ui/react";
import { RiVoiceRecognitionLine } from "react-icons/ri";

const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" margin={5}>
      <Icon as={RiVoiceRecognitionLine} boxSize={"3em"} />
      <Button fontWeight="bold" fontSize="2xl">
        Sign in
      </Button>
    </Flex>
  );
};

export default Header;
