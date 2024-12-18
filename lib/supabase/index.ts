import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export const getLogo = () => {
  const { data } = supabase.storage.from('logos').getPublicUrl('logo.png');
  return data.publicUrl;
}