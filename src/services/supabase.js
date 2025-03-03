import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ygfbucaedbrizmotqyne.supabase.co';
const supabaseKey =
  'this_key_is_hidden_by_author';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
