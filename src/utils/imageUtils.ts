// src/utils/imageUtils.ts

export type ImageObj = {
  src: string;
  alt: string;
};

export function getImage(images: string[] | ImageObj[]): ImageObj[] {
  // Se já for ImageObj[], retorna direto
  if (images.length === 0) return [];

  if (typeof images[0] === "string") {
    return (images as string[]).map((src) => ({
      src,
      alt: "Imagem do produto", // Pode personalizar se quiser
    }));
  } else {
    // Já é ImageObj[]
    return images as ImageObj[];
  }
}
