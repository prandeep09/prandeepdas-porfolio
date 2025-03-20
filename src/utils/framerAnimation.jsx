export const fadeUpVariants = {
  hidden: { opacity: 0, y: 100 },
  show: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: custom || 0, // Default delay is 0
    },
  }),
};

export const viewportSettings = {
  once: true, // Animation runs only once when it enters viewport
  amount: 0.2, // Animation triggers when 20% of the component is in view
};
