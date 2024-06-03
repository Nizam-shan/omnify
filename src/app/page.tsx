"use client"

import { redirect } from 'next/navigation'


function Home() {
  redirect('app/waitlist')
}

export default Home