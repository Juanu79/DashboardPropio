import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dyaurkqswsnqtkpxumak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5YXVya3Fzd3NucXRrcHh1bWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzODI4ODksImV4cCI6MjA3Nzk1ODg4OX0.UIpobYnDm7J7Wl6L3SZ5Bd8PkavEItI3BFA2KBJkRTM';

export const supabase = createClient(supabaseUrl, supabaseKey);
