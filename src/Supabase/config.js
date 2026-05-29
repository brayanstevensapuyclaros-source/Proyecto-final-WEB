import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cbnsfhcexqqdwaosvcmm.supabase.co'

// IMPORTANTE: Ve a tu proyecto en supabase.com
// Settings > API > Project API keys > anon (public)
// Pega el valor completo que empieza con "eyJ..."
const supabaseAnonKey = 'sb_publishable_4fY3DqiiXEt6rKJEn4tZdQ_d3AN1AP2'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
