import { Button, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  setImgUrl: (url: string) => void;
}

const InputSection = ({ setImgUrl }: Props) => {
  const urlRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    if (urlRef.current) {
      const url = urlRef.current.value;
      setImgUrl(url);
      urlRef.current.value = "";
    }
  };

  return (
    <>
      <Input
        ref={urlRef}
        borderColor="gray.400"
        focusBorderColor="white"
        variant="filled"
        size="lg"
        width={400}
      />
      <Button size={"lg"} onClick={handleInput}>
        Detect
      </Button>
    </>
  );
};

export default InputSection;
