type rectangleMeasurements = {
    width: number;
    height: number;
}

const getRectangleArea = (rectangle: rectangleMeasurements) => {
    return rectangle.width * rectangle.height;
  };
  
  const getRectanglePerimeter = (rectangle: rectangleMeasurements) => {
    return 2 * (rectangle.width + rectangle.height);
  };