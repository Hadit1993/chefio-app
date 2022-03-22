import { ImageSourcePropType } from "react-native";
import { mainImages } from "../../assets/images";
import { RecipeType, RecipeTime } from "./categories";

export interface Recipe {
  id: number;
  name: string;
  type: RecipeType;
  time: RecipeTime;
  image: ImageSourcePropType;
  owner: {
    name: string;
    avatar: ImageSourcePropType;
  };
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Pancake",
    type: "Food",
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
    type: "Food",
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
    type: "Food",
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
    type: "Food",
    time: ">60",
    image: mainImages.salad2,
    owner: {
      name: "John Priyadi",
      avatar: mainImages.user4,
    },
  },
];
