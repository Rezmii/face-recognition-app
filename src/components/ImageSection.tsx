import { Image } from "@chakra-ui/react";

interface Props {
  imgUrl: string;
}

const ImageSection = ({ imgUrl }: Props) => {
  if (!imgUrl) {
    return null;
  }

  return (
    <Image
      src={imgUrl}
      boxSize="300px"
      objectFit="cover"
      borderRadius="20"
    ></Image>
  );
};

export default ImageSection;
