import HelloWorld from "@/screens/home";
import Options from "@/screens/options";
import { getAllPackages } from "@/lib/supabase/packages";

export default async function Home() {
  const packages = await getAllPackages();
  return (
    <>
      <HelloWorld />
      <Options packages={packages} />
    </>
  );
}
