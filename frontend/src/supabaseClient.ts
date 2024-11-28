import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = import.meta.env.REACT_APP_SUPABASE_ANON_KEY

// Create a single supabase client for interacting with your database
const supabase = createClient( supabaseUrl, supabaseAnonKey)


export default supabase;