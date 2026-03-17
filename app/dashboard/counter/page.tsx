import { CarCounter } from '../../components/shoping-cart/components/CarCounter';
export const metadata = {
  title: 'Shoping Cart Page',
  description: 'Contador Next Js'
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span> Productos en el carrito de compras</span>
      <CarCounter  value={ 20 }/>
    </div>
  );
}