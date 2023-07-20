import { Database } from '@/types/supabase'
import { get } from 'http';
import type { Prayer } from 'types/supabase-tables';

const prayers = ref<Prayer[]>([]);

export const usePrayerStore = defineStore('prayer', () => {
    const client = useSupabaseClient<Database>();

    async function getPrayers(): Promise<void> {
        let { data: result, error } = await client
            .from('prayer')
            .select()

        if (error) {
            console.error(error.message);
            return;
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
            return;
        }

        getPrayers();
    }

    async function deletePrayer(prayer: Prayer): Promise<void> {
        const { data: result, error } = await client
            .from('prayer')
            .delete()
            .eq('id', prayer.id)
            .select()

        if (error) {
            console.error(error.message);
            return;
        }

        prayers.value = prayers.value.filter(p => p.id !== prayer.id);
    }

    async function searchPrayers(query: string): Promise<Prayer[]> {
        const { data: result, error } = await client
            .from('prayer')
            .select()
            .textSearch('text', `'health'`)

        if (error) {
            console.error(error.message);
            return [];
        }

        return result ?? [];
    }

    return { prayers, getPrayers, upsertPrayer, deletePrayer, searchPrayers };
})