import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default async function getPackageById(packageId: string) {
  if (!packageId) {
    throw new Error('Package ID is required');
  }

  const { data, error } = await supabase.from('packages').select('*').eq('id', packageId).single();
  
  if (error) {
    console.error('Error fetching package:', error);
    throw new Error('Failed to fetch package');
  }
  
  if (!data) {
    throw new Error('Package not found');
  }
  
  return data;
}

export async function getAllPackages() {

  
  const { data, error } = await supabase
  .from('packages')
  .select('*')
          
  
  if (error) {
    console.error('Error fetching packages:', error);
    throw new Error('Failed to fetch packages');
  }

  console.log(data);
  
  return data;
}
