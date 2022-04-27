import { useEffect, useState } from "react";


function useTypeWriter(text: string, cursor: "|" | "_" | " " = "|", cursorInterval: number = 400, typingInterval: number = 200, delay: number = 0): JSX.Element {
  const [cursorIsOn, setCursorIsOn] = useState<boolean>(false)
  const [currentText, setCurrentText] = useState<string>("")

  useEffect(() => {
    window.setTimeout(setCursorIsOn, cursorInterval, !cursorIsOn)    // blink cursor
  }, [cursorIsOn, setCursorIsOn])

  useEffect(() => {
    for (let i = 0; i < text.length; i++) {
      window.setTimeout(setCurrentText, delay + i * typingInterval, text.slice(0, i + 1))
    }
  }, [setCurrentText])

  return (
    <samp>
      {currentText}{cursorIsOn ? cursor : " "}
    </samp>
  )
}
