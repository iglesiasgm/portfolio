import DotGrid from "./DotGrid"


export const TestDotGrid = () => {
  return (
    <div className="relative h-screen">
      <DotGrid />
      <div className="relative z-10 p-20 text-4xl text-[#993399] font-bold">
        Probando el fondo animado
      </div>
    </div>
  )
}
