export const getLineWidthEstimate = (line, averageCharWidth) => {
  const characterWeights = {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
    f: 0.8,
    g: 1,
    h: 1,
    i: 0.5,
    j: 0.8,
    k: 1,
    l: 0.5,
    m: 1.5,
    n: 1,
    o: 1,
    p: 1,
    q: 1,
    r: 0.8,
    s: 1,
    t: 0.8,
    u: 1,
    v: 1,
    w: 1.5,
    x: 1,
    y: 1,
    z: 1,
    "0": 1,
    "1": 0.8,
    "2": 1,
    "3": 1,
    "4": 1,
    "5": 1,
    "6": 1,
    "7": 1,
    "8": 1,
    "9": 1,
    " ": 0.4,
  };

  return line.split("").reduce((total, char) => {
    return (
      total + (characterWeights[char.toLowerCase()] || 1) * averageCharWidth
    );
  }, 0);
};

export const createLines = (words, maxChars, averageCharWidth) => {
  let lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const potentialLine = `${currentLine}${word} `;
    const lineWidthWithNextWord = getLineWidthEstimate(
      potentialLine,
      averageCharWidth
    );
    if (lineWidthWithNextWord <= maxChars * averageCharWidth) {
      currentLine = potentialLine;
    } else {
      if (currentLine.trim().length > 0) {
        lines.push(currentLine.trim());
      }
      currentLine = `${word} `;
    }
  });

  if (currentLine.trim().length > 0) {
    lines.push(currentLine.trim());
  }

  return lines.map((line, index, array) => {
    const lineWidthEstimate = getLineWidthEstimate(line, averageCharWidth);
    const prevLineWidthEstimate =
      index > 0 ? getLineWidthEstimate(array[index - 1], averageCharWidth) : 0;
    const nextLineWidthEstimate =
      index < array.length - 1
        ? getLineWidthEstimate(array[index + 1], averageCharWidth)
        : 0;

    return {
      line,
      borderRadiusStyle: {
        borderTopLeftRadius: index === 0 ? 6 : 0,
        borderBottomLeftRadius: index === array.length - 1 ? 6 : 0,
        borderTopRightRadius:
          index === 0 || lineWidthEstimate >= prevLineWidthEstimate ? 6 : 0,
        borderBottomRightRadius:
          index === array.length - 1 ||
          lineWidthEstimate >= nextLineWidthEstimate
            ? 6
            : 0,
      },
    };
  });
};
