import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cbnsfhcexqqdwaosvcmm.supabase.co'

// IMPORTANTE: Ve a tu proyecto en supabase.com
// Settings > API > Project API keys > anon (public)
// Pega el valor completo que empieza con "eyJ..."
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNibnNmaGNleHFxZHdhb3N2Y21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5ODY0NzAsImV4cCI6MjA5NTU2MjQ3MH0.IhaGRSLJZWMhSMQaitSqGNiUV1dx4AFxNw78AWMTB_0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
