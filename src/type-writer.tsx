import { useEffect, useState } from "react";


export default function useTypeWriter(text: string, cursor: "|" | "_" | " " = "|", charInterval: number = 200, wordInterval: number = 400, lineInterval: number = 800, cursorInterval: number = 400, delay: number = 0): string {
  const [cursorIsOn, setCursorIsOn] = useState<boolean>(false)
  const [currentText, setCurrentText] = useState<string>("")

  useEffect(() => {
    window.setTimeout(setCursorIsOn, cursorInterval, !cursorIsOn)
  }, [cursorIsOn, setCursorIsOn])

  useEffect(() => {
    let time = delay

    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == "\n") {
        time += lineInterval
      }
      else if (text.charAt(i) == " ") {
        time += wordInterval
      }
      else {
        time += charInterval
      }
      window.setTimeout(setCurrentText, time, text.slice(0, i + 1))
    }
  }, [setCurrentText])

  return currentText + (cursorIsOn ? cursor : " ")
}
