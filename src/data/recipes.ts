import { ImageSourcePropType } from "react-native";
import { mainImages } from "../../assets/images";
import { categories, Category } from "./categories";

export interface RecipeType {
  id: number;
  name: string;
  category: Category;
  time: "<10" | "30" | ">60";
  image: ImageSourcePropType;
  owner: {
    name: string;
    avatar: ImageSourcePropType;
  };
}

export const recipes: RecipeType[] = [
  {
    id: 1,
    name: "Pancake",
    category: categories[1],
    time: ">60",
    image: mainImages.pancake1,
    owner: {
      name: "Calum Lewis",
      avatar: mainImages.user1,
    },
  },
  {
    id: 2,
    name: "Salad",
    category: categories[1],
    time: ">60",
    image: mainImages.salad1,
    owner: {
      name: "Eilif Sonas",
      avatar: mainImages.user2,
    },
  },
  {
    id: 3,
    name: "Pancake",
    category: categories[1],
    time: ">60",
    image: mainImages.pancake2,
    owner: {
      name: "Elena Shelby",
      avatar: mainImages.user3,
    },
  },
  {
    id: 4,
    name: "Salad",
    category: categories[1],
    time: ">60",
    image: mainImages.salad2,
    owner: {
      name: "John Priyadi",
      avatar: mainImages.user4,
    },
  },
];
