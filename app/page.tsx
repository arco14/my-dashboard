import { redirect } from "next/navigation";

export default function HomePage() {
  //? Direccion directo a la pagina del counter
  redirect('/dashboard/counter')  
  return (
    <>
      <h1>Hola mundo</h1>
    </>
  );
}
