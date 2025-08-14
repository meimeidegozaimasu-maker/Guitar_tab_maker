export const clientToSvg = (svg: SVGSVGElement, clientX: number, clientY: number) => {
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  return pt.matrixTransform(svg.getScreenCTM()?.inverse());
};

export const quantize = (value: number, grid: number) => Math.round(value / grid) * grid;
