import LottieView from "lottie-react-native";
import { useRef, useState, useEffect } from "react";
import { LayoutAnimation } from "react-native";

const useSwipe = (onSwiped: () => void) => {
  const lottie = useRef<LottieView>(null);
  const OnBegan = () => {
    lottie.current?.play();
  };

  const [isCollapsed, setCollapsed] = useState(true);

  useEffect(() => {
    expand();
  }, []);

  const collapse = () => {
    LayoutAnimation.configureNext(
      { ...LayoutAnimation.Presets.linear, duration: 200 },
      () => {
        onSwiped();
      }
    );
    setCollapsed(true);
  };

  const expand = () => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.linear,
      duration: 200,
    });
    setCollapsed(false);
  };

  return {
    OnBegan,
    isCollapsed,
    collapse,
    expand,
    lottie,
  };
};

export default useSwipe;
