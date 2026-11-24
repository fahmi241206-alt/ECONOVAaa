import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { cream:'#F4EFE5', navy:'#283B70', coral:'#F18C70', sage:'#B9C9A8', butter:'#F5D779', ink:'#252A35' }, fontFamily: { sans:['var(--font-jakarta)','sans-serif'] }, boxShadow: { soft:'0 18px 50px rgba(40,59,112,.10)' } } }, plugins: [] };
export default config;
