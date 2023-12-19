import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Script from 'next/script'


export const metadata = {
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

        {children}
        
<Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></Script>
        
        </body>
    </html>
  )
}
