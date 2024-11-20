import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ygfbucaedbrizmotqyne.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnZmJ1Y2FlZGJyaXptb3RxeW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4ODI5NzAsImV4cCI6MjA0NjQ1ODk3MH0.cK1FNyR0I4_eVMdJNgtxGcYwceZusT0JYH54IjcrJjE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
