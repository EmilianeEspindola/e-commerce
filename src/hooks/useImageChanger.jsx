import { useState } from "react";

export function useImageChanger(images){
  const [mainImage, setMainImage] = useState(images[0]);

  const selectImage = (img) => setMainImage(img);

  return { mainImage, selectImage };
}