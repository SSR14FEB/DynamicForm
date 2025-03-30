const cssComponets = [
  {
    name: "Heading",
    element: () => (
      <div className=" h-full w-full flex flex-col justify-start item-center">
        {" "}
        <label htmlFor="Label">Heading</label>
        <input className="border pl-2" type="text" id="Label" />
      </div>
    ),
  },
  {
    name: "Text-Color",
    element: () => (
      <div className=" h-full w-full flex flex-col justify-start item-center">
        {" "}
        <label htmlFor="color">Text colour</label>
        <input className="border  h-7" type="color"  id="color" />
      </div>
    ),
  },
  {
    name: "Font",
    element: () => (
      <div className=" h-full w-full flex flex-col justify-start item-center">
        {" "}
        <label htmlFor="Font">Font width</label>
        <input className="border pl-2" type="text" id="font" />
      </div>
    ),
  },
  {
    name: "Height",
    element: () => (
      <div className=" h-full w-full flex flex-col justify-start item-center">
        <label htmlFor="Height">Height</label>
        <input className=" border pl-2" type="number" id="height" />
      </div>
    ),
  },
  {
    name: "width",
    element: () => (
      <div className=" h-full w-full flex flex-col justify-start item-center">
        <label htmlFor="Width">Width</label>
        <input className="border pl-2" type="number" id="Width" />
      </div>
    ),
  },
];

export default cssComponets;
