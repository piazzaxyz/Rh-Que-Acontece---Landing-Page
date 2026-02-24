"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollFloatProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  scrollContainerRef?: React.RefObject<HTMLElement>;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  containerClassName = "",
  textClassName = "",
  as: Tag = "h2",
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={`overflow-hidden py-3 ${containerClassName}`}
    >
      <span className={`inline-flex flex-wrap justify-center gap-x-[0.3em] ${textClassName}`}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={
              isInView
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 24, filter: "blur(4px)" }
            }
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 0.08,
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
};

export default ScrollFloat;
