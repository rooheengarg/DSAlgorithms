const slope = (point1, point2) => {
    return (point2[1] - point1[1]) / (point2[0] - point1[0]);
  };
  
  const checkStraightLine = (coordinates) => {
    for (let i = 2; i < coordinates.length; i++) {
      if (
        slope(coordinates[i - 2], coordinates[i - 1]) !==
        slope(coordinates[i - 1], coordinates[i])
      ) {
        return false;
      }
    }
  
    return true;
  };