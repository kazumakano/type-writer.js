import { useEffect, useState } from "react"


export default function useTypeWriter(text: string, cursor: "|" | "_" | " " = "|", cursorInterval: number = 400, charInterval: number = 100, lineInterval: number = 400, delay: number = 0): string {
  const [cursorIsOn, setCursorIsOn] = useState<boolean>(true)
  const [currentText, setCurrentText] = useState<string>("")

  useEffect(() => {
    if (cursorInterval !== 0) {
      window.setTimeout(setCursorIsOn, cursorInterval, !cursorIsOn)   
    }
  }, [cursorInterval, cursorIsOn, setCursorIsOn])

  useEffect(() => {
    let time = delay

    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === "\n") {
        time += lineInterval
      }
      else {
        time += charInterval
      }
      window.setTimeout(setCurrentText, time, text.slice(0, i + 1))
    }
  }, [charInterval, setCurrentText, delay, lineInterval, text])

  return currentText + (cursorIsOn ? cursor : " ")
}
