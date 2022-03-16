import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Keyboard, KeyboardEventListener } from "react-native";

const useKeyboardShowListener = (listener: KeyboardEventListener) => {
  return useFocusEffect(
    useCallback(() => {
      const subscription = Keyboard.addListener("keyboardDidShow", listener);

      return () => {
        subscription.remove();
      };
    }, [])
  );
};

export default useKeyboardShowListener;
