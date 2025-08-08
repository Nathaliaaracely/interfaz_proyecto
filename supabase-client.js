// supabase-client.js

// Reemplaza 'TU_CLAVE_ANON_PUBLICA' con la clave que copiaste de tu panel de Supabase.
const SUPABASE_URL = 'https://djegnrgjqwxekwqvlcil.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZWducmdqcXd4ZWt3cXZsY2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNTk3ODgsImV4cCI6MjA2OTgzNTc4OH0.8WWVpoCiR9YUDCS5yHVCBN44dmSicQ6BRZcpP6hjThw';

// Crea y exporta el cliente de Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Hacemos que esté disponible globalmente para los otros scripts
window.supabaseClient = supabaseClient;

console.log('Cliente de Supabase inicializado.');