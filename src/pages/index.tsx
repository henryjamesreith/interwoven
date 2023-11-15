import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header/>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(60vh - 80px)', // assuming the Header height is 60px
      }}>
<p style={{ textAlign: 'center' }}>
  interwoven is an open source project, <br />
  removing bias in the news through sentiment topic modeling
</p>        <button style={{
  border: '1px solid white',
  borderRadius: '5px',
  padding: '10px',
  marginTop: '20px' // Add some space between the text and the button
}} onClick={() => window.location.href = "mailto:arlo@interwoven.com?subject=Joining the Waitlist"}>
  join the waitlist
</button>
      </div>
    </main>
  )
}