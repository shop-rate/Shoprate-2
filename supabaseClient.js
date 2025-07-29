import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kahhhvxpscsrplesqwdj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthaGhodnhwc2NzcnBsZXNxd2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwNzkzNjIsImV4cCI6MjA2ODY1NTM2Mn0.gyoN-IQbBTLN9A0QO0y8rO6b3AuYu-tmku5p9dpeNdk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);