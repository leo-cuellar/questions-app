import { useEffect, useState } from "react";

export const useAnswer = (id: string) => {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://cross-platform.rp.devfactory.com/reveal?id=" + id
      );
      const data = await response.json();
      setAnswer(data.correct_options[0].id);
    })();
  }, []);

  return { answer };
};
