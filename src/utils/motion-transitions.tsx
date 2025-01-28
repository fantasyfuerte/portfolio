export const transitionVariantsPage = {
  initial: {
    x: "100%",
    width: "150%",
  },
  animate: {
    x: "100%",
    width: "0%",
    borderRadius: "0 100% 40% 0",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
