

import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://tnhwvfryhdsjzfawqefg.supabase.co'


const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuaHd2ZnJ5aGRzanpmYXdxZWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0ODQ3ODIsImV4cCI6MjA2NzA2MDc4Mn0.U-BQqdemz4HvrFWG0ybOJXVxb9CQQwvDKRGfUUVgaOU'


export const supabase = createClient(supabaseUrl, supabaseKey)
