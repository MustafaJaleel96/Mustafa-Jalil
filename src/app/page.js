import { From } from "@/components/Form/form";
import { Header } from "@/components/Header/header";
import { ProductsTable } from "@/components/ProductsTable/productsTable";

export default function Home() {

  return (
    <main>
      <Header />
      
      <ProductsTable />
      <From/>
    </main>
  );
}
