"use client"

import React from "react"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export function AnimatedSection({ 
  children, 
  className, 
  delay = 0,
  direction = "up" 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const directionClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    fade: ""
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible 
          ? "opacity-100 translate-x-0 translate-y-0" 
          : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
    >
      {children}
    </div>
  )
}

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "",
  className 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className, glowColor = "primary" }: GlowCardProps) {
  return (
    <div className={cn(
      "relative group",
      className
    )}>
      <div className={cn(
        "absolute -inset-0.5 rounded-xl opacity-0 blur transition-all duration-500",
        "group-hover:opacity-75",
        glowColor === "primary" && "bg-primary/50",
        glowColor === "accent" && "bg-accent/50",
        glowColor === "gold" && "bg-gold/50"
      )} />
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

interface ShimmerButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function ShimmerButton({ children, className, onClick }: ShimmerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground",
        "transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
        "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "hover:before:animate-shimmer",
        className
      )}
    >
      {children}
    </button>
  )
}

interface PulseIconProps {
  children: ReactNode
  className?: string
}

export function PulseIcon({ children, className }: PulseIconProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--stagger-delay": `${staggerDelay}s` } as React.CSSProperties}
      data-visible={isVisible}
    >
      {children}
    </div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  index?: number
}

export function StaggerItem({ children, className, index = 0 }: StaggerItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </div>
  )
}
