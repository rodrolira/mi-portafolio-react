import { useEffect, useState } from 'react'

const useProgressAnimation = (ref) => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (!ref.current || animated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true)
            const progressBars = entry.target.querySelectorAll('.progress')
            progressBars.forEach((bar) => {
              const level = bar.getAttribute('data-level')
              if (level) {
                setTimeout(() => {
                  bar.style.width = `${level}%`
                }, 100)
              }
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, animated])

  return animated
}

export default useProgressAnimation