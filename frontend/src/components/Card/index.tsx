// src/components/Card/index.tsx
import { SCard } from "./styles";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export function Card({ image, alt, title, description }: CardProps) {
  return (
    <SCard>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </SCard>
  );
}
