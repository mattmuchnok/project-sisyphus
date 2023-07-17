import { Database } from '@/types/supabase'
import type { Prayer } from 'types/supabase-tables';

export const usePrayerStore = defineStore('prayer', () => {
    const client = useSupabaseClient<Database>();

    const prayers = ref<Prayer[]>([]);

    async function getPrayers(): Promise<void> {
        let { data: result, error } = await client
            .from('prayer')
            .select()

        if (error) {
            console.error(error.message);
        }

        prayers.value = result ?? [];
    }

    async function upsertPrayer(prayer: Prayer): Promise<void> {
        const { data: result, error } = await client
            .from('prayer')
            .upsert(prayer)
            .select()

        if (error) {
            console.error(error.message);
        }

        prayers.value = result ?? [];
    }

    async function deletePrayer(prayer: Prayer): Promise<void> {
        const { data: result, error } = await client
            .from('prayer')
            .delete()
            .eq('id', prayer.id)
            .select()

        if (error) {
            console.error(error.message);
        }

        prayers.value = result ?? [];
    }

    return { prayers, getPrayers, upsertPrayer, deletePrayer };
})