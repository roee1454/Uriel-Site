import { Personal } from "@/types";
import { supabase } from ".";

export async function getPersonalTexts(): Promise<Personal[]> {
    const { data, error } = await supabase.from("personal").select("*");

    if (error) {
        console.error('Error fetching personal texts:', error);
        throw new Error('Failed to fetch personal texts');
    }

    return data as Personal[];
}