import './index.scss';
import React, {
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

const textList = [
  '回答我的问题',
  '准备好了么',
  '3',
  '2',
  '1',
  '你愿意嫁给我吗？',
];
let timer: number = 0;

const Marry = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [mask, setMask] = useState({ maskX: -500, maskY: -500 });
  const [left, setLeft] = useState('60%');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentTextIndex === textList.length - 1) {
      clearInterval(timer);
    }
  }, [currentTextIndex]);

  const wantButton = currentTextIndex === textList.length - 1;

  const onClickPage = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    switch (currentTextIndex) {
      case 0: {
        setCurrentTextIndex(1);
        break;
      }
      case 1: {
        timer = window.setInterval(() => {
          setCurrentTextIndex((pre: number) => {
            return pre < textList.length - 1 ? pre + 1 : pre;
          });
        }, 1300);
        break;
      }
      default:
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
      onClickPage(e);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.stopPropagation();
    const maskX = e.pageX - (1 / 20) * document.body.clientWidth;
    const maskY = e.pageY - (1 / 20) * document.body.clientWidth;
    setMask({ maskX, maskY });
  };

  const handleMouseEnter = () => {
    const dom = buttonRef.current?.getBoundingClientRect() || { left: 0 };
    setLeft(`${dom.left + 100}px`);
  };

  const maskStyle = {
    WebkitMaskPosition: `${mask.maskX}px ${mask.maskY}px`,
    maskPosition: `${mask.maskX}px ${mask.maskY}px`,
  };

  const noWantStyle = {
    left,
  };
  const HandleWant = () => {
    navigate('/wedding');
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="mask"
      onClick={onClickPage}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
    >
      <div className="text-magic" data-word={textList[currentTextIndex]}>
        {textList[currentTextIndex]}
        <div className="white" />
      </div>
      <div className="mask-block" style={maskStyle}>
        {wantButton && (
          <button
            ref={buttonRef}
            className="no-want"
            style={noWantStyle}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseEnter}
          >
            不愿意
          </button>
        )}
      </div>
      {wantButton && (
        <button className="want" onClick={HandleWant}>
          愿意
        </button>
      )}
    </div>
  );
};

export default Marry;
