
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  cursorClassName?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = '',
  cursorClassName = 'text-cyber-green animate-text-blink'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  useEffect(() => {
    const currentText = texts[currentIndex % texts.length];
    
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(waitTimer);
    }
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => prev + 1);
        return;
      }
      
      const deleteTimer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(deleteTimer);
    } else {
      if (displayText === currentText) {
        setIsWaiting(true);
        return;
      }
      
      const typeTimer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(typeTimer);
    }
  }, [displayText, currentIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);
  
  return (
    <div className="inline-flex items-center">
      <span className={className}>{displayText}</span>
      <span className={cursorClassName}>|</span>
    </div>
  );
};

export default TypingEffect;
