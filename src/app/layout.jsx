import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Ceibo'
}
const RootLayout = ({ children }) => {
  return (
    <html>
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
