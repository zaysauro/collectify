import type { ReactNode } from 'react';
export const metadata = {title:'Collectify Pro',description:'Sua coleção, seu universo.'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="pt-BR"><body style={{margin:0,fontFamily:'system-ui',background:'#101321',color:'#f6f7ff'}}>{children}</body></html>}
