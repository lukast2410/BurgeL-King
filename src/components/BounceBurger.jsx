import { useEffect, useRef } from 'react'

export default function BounceBurger() {
	const ref = useRef(null)

	useEffect(() => {
		const canvas = ref.current
		const ctx = canvas.getContext('2d')
		let animationFrameId
    let square = {
      w: 45,
      h: 75,
      x: 0,
      y: 0,
      vx: 0.75,
      vy: 0.5
    }
    let image = new Image()
    image.src = '/assets/beef-burger2.png'

		const draw = () => {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			ctx.fillStyle = '#000000'
      ctx.drawImage(image, square.x, square.y, square.w, square.h)
      square.x += square.vx
      square.y += square.vy

      if(square.x + (square.w/2) < 0 || square.x + (square.w/2) >= ctx.canvas.width){
        square.vx *= -1
      }
      if(square.y + (square.h/2) < 0 || square.y + (square.h/2) >= ctx.canvas.height){
        square.vy *= -1
      }
		}

		const render = () => {
			draw()
			animationFrameId = window.requestAnimationFrame(render)
		}
		render()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [])

	return <canvas ref={ref}></canvas>
}
