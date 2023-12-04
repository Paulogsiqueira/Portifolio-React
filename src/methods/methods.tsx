export const typingEffect = (fullText: string, setTextFunction: React.Dispatch<React.SetStateAction<string>>) => {
  let currentIndex = 0;

  const typingInterval = setInterval(() => {
    setTextFunction(fullText.substring(0, currentIndex));
    currentIndex++;

    if (currentIndex > fullText.length) {
      clearInterval(typingInterval);
    }
  }, 100);

  return typingInterval;
};
