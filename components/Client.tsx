import Image, { StaticImageData } from "next/image";

import React from "react";

const Client = ({
  image,
  width,
  height,
}: {
  image: StaticImageData;
  width: number;
  height: number;
}) => {
  return <Image src={image} alt="brand" width={width} height={height} />;
};

export default Client;
