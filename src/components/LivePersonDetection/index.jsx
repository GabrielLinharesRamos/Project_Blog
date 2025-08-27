'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import Webcam from 'react-webcam'

export default function LivePersonDetection() {
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const modelRef = useRef(null)
  const animationRef = useRef(null)
  const lastDetectionTime = useRef(0)
  
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  // Reduzir frequência de detecção para 10 FPS (100ms)
  const DETECTION_INTERVAL = 100

  const loadModel = useCallback(async () => {
    if (modelRef.current) return modelRef.current
    
    try {
      setIsLoading(true)
      setError(null)
      
      // Lazy loading dos módulos TensorFlow
      const [cocoSsd, tf] = await Promise.all([
        import('@tensorflow-models/coco-ssd'),
        import('@tensorflow/tfjs')
      ])
      
      // Configurar backend mais leve
      await tf.setBackend('webgl')
      
      const model = await cocoSsd.load({
        base: 'lite_mobilenet_v2' // Modelo mais leve
      })
      
      modelRef.current = model
      return model
    } catch (err) {
      setError('Erro ao carregar modelo de detecção')
      console.error('Erro ao carregar modelo:', err)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  const detect = useCallback(async (model) => {
    const now = Date.now()
    
    // Controlar frequência de detecção
    if (now - lastDetectionTime.current < DETECTION_INTERVAL) {
      animationRef.current = requestAnimationFrame(() => detect(model))
      return
    }
    
    lastDetectionTime.current = now
    
    if (
      !isActive ||
      !webcamRef.current ||
      !webcamRef.current.video ||
      webcamRef.current.video.readyState !== 4
    ) {
      animationRef.current = requestAnimationFrame(() => detect(model))
      return
    }

    try {
      const video = webcamRef.current.video
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const predictions = await model.detect(video)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      predictions.forEach((prediction) => {
        if (prediction.class === 'person' && prediction.score > 0.5) {
          const [x, y, width, height] = prediction.bbox
          ctx.strokeStyle = '#00FF00'
          ctx.lineWidth = 2
          ctx.strokeRect(x, y, width, height)
          
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
    } catch (err) {
      console.error('Erro na detecção:', err)
    }

    if (isActive) {
      animationRef.current = requestAnimationFrame(() => detect(model))
    }
  }, [isActive])

  const startDetection = useCallback(async () => {
    if (isActive) return
    
    const model = await loadModel()
    if (!model) return
    
    setIsActive(true)
    detect(model)
  }, [isActive, loadModel, detect])

  const stopDetection = useCallback(() => {
    setIsActive(false)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
    
    // Limpar canvas
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }
  }, [])

  useEffect(() => {
    return () => {
      stopDetection()
      // Cleanup do modelo
      if (modelRef.current) {
        modelRef.current.dispose?.()
        modelRef.current = null
      }
    }
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
        Real-time person detection
      </div>
    </div>
  )
}
