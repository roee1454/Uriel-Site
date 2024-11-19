import Payment from "@/screens/payment";
import getPackageById from "@/lib/supabase/packages";

export default async function PaymentPage({ params }: { params: Promise<{ packageId: string }> }) {

  const selectedPackage = await getPackageById((await params).packageId);

  return <Payment selectedPackage={selectedPackage} />;
}
