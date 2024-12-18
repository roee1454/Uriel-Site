import HelloWorld from "@/screens/home";
import Options from "@/screens/options";
import { getAllPackages } from "@/lib/supabase/packages";
import { getPersonalTexts } from "@/lib/supabase/personal";
import { getLogo } from "@/lib/supabase";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Home() {
  const packages = await getAllPackages();
  const personalTexts = await getPersonalTexts();
  const logo = getLogo();
  return (
    <>
      <HelloWorld personalTexts={personalTexts} logo={logo || ''} />
      <Options packages={packages} />
    </>
  );
}
