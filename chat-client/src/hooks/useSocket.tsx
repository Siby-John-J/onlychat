import { useState, useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3000')

function useSocket() {
  const [recv, setRecv] = useState<string[]>([])

  useEffect(() => {
    socket.on('get_message', (msg) => {
      setRecv((prev) => [...prev, msg])
    })
    
    return () => {
      socket.disconnect()
    }
  }, [])
  
  const memer = useMemo(() => recv, [recv])

  console.log(memer)
  
}

export default useSocket