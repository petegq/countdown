import type { NextPage } from 'next'
import Head from 'next/head'
import { TimerContainer } from '../components/TimerContainer'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { TimerInput } from '../components/TimerInput'

const Home: NextPage = () => {
  const [newTime, setNewTime] = useState<number>(0)
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

 const timeToDays = time * 60 * 60 * 24 * 1000;

 let countDownDate = new Date().getTime() + timeToDays;

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header message={message} />

      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      <TimerInput
        value={newTime}
        handleClick={handleClick}
        handleChange={handleChange}
      />

      <Footer />
    </div>
  )
}

export default Home
