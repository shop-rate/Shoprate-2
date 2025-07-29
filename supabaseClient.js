import { createClient } from '@supabase/supabase-js'

// Your actual Supabase project URL and anon key
const supabaseUrl = 'https://tdvlbrzyxdacmqtaswxa.supabase.co'
const supabaseAnonKey = 'CPVrsMK9Ts+7LkdIVGRWOK416Ycv+2QZTRBvF8TeYVsKnpIc85XHQzE9AydKiMcYBhqjmUpEEC9Gr8P2O20Gxw=='

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
