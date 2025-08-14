'use client'

import React, { useRef, useEffect } from 'react'
import * as cocoSsd from '@tensorflow-models/coco-ssd'
import '@tensorflow/tfjs'
import Webcam from 'react-webcam'

export default function LivePersonDetection() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const runDetection = async () => {
      const net = await cocoSsd.load()
      const detect = async () => {
        if (
          webcamRef.current &&
          webcamRef.current.video.readyState === 4
        ) {
          const video = webcamRef.current.video
          const canvas = canvasRef.current
          const ctx = canvas.getContext('2d')

          canvas.width = video.videoWidth
          canvas.height = video.videoHeight

          const predictions = await net.detect(video)

          ctx.clearRect(0, 0, canvas.width, canvas.height)

          predictions.forEach((prediction) => {
            if (prediction.class === 'person') {
              const [x, y, width, height] = prediction.bbox
              ctx.strokeStyle = '#00FF00'
              ctx.lineWidth = 2
              ctx.strokeRect(x, y, width, height)
              // Ajuste responsivo do tamanho da fonte baseado na largura do canvas
              const fontSize = canvas.width < 400 ? 14 : 18
              ctx.font = `${fontSize}px Arial`
              ctx.fillStyle = '#00FF00'
              ctx.fillText(
                `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                x,
                y > 10 ? y - 5 : 10
              )
            }
          })
        }
        requestAnimationFrame(detect)
      }
      detect()
    }

    runDetection()
  }, [])

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <Webcam
        ref={webcamRef}
        audio={false}
        style={{
          width: '100%',
          height: 'auto',
        }}
        className="rounded-lg"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-10"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs md:text-sm p-2 text-center">
        Detecção de pessoas em tempo real
      </div>
    </div>
  )
}
