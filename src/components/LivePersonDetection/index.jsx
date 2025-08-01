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
              ctx.font = '18px Arial'
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
    <div className="relative w-full max-w-xl mx-auto">
      <Webcam
        ref={webcamRef}
        audio={false}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 z-10"
      />
    </div>
  )
}
