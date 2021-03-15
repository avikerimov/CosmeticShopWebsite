import dior_sauvage_collection from "../../Pictures/Man_Purfumes/Dior/DiorSauvageCollection.jpg";
import dior_sauvage from "../../Pictures/Man_Purfumes/Dior/DiorSauvage.jpg";
import dior_homme from "../../Pictures/Man_Purfumes/Dior/DiorHomme.jpg";
import dior_homme_collection from "../../Pictures/Man_Purfumes/Dior/DiorHommeCollection.jpg";

export const Dior_Man_Carousel = () => {
  return [
    { img: dior_sauvage_collection, imgAlt: "Dior Suavage Collection", active:true },
    { img: dior_sauvage, imgAlt: "Dior Suavage Collection" },
    { img: dior_homme, imgAlt: "Dior Homme Collection" },
    { img: dior_homme_collection, imgAlt: "Dior Homme Collection" },
  ];
};
