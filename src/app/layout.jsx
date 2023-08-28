import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Shop'
}
export const dynamic = 'force-dynamic'

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' integrity='sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==' crossorigin='anonymous' referrerpolicy='no-referrer' />
      </head>
      <body className='min-h-screen overflow-hidden'>
        <div className='flex w-full'>
          <Navbar />
          <div className='bg-blue-50 w-full p-10'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
