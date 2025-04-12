import {
  Button,
  IconButton,
  Input,
  OutlinedInput,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  Opacity,
  TextFieldsOutlined,
} from '@mui/icons-material';
import '../styles/control_panel.scss';
import { motion, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
export function ControlPanel() {
  const [scope, animate] = useAnimate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [text, setText] = useState('');
  const totalHintText = 'Describe what you want to make.';
  const [hintTextIndex, setHintTextIndex] = useState(0);
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 10,
      label: '10',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setHintTextIndex((prevIndex) => (prevIndex + 1) % totalHintText.length);
    }, 100);
    return () => clearInterval(interval);
  }, [hintTextIndex]);
  const handleToggle = () => {
    if (isCollapsed) {
      animate(
        scope.current,
        { width: '22rem', opacity: 1 },
        {
          onComplete: () => {
            setIsCollapsed(false);
          },
        },
      );
    } else {
      setIsCollapsed(true);
      animate(
        scope.current,
        { width: '0', opacity: 0 },
        { onComplete: () => {} },
      );
    }
  };
  return (
    <div className="control-panel">
      <div ref={scope} className="panel-content-wrapper">
        <div className={classNames('panel-content')}>
          <TextField
            placeholder={
              !isCollapsed
                ? totalHintText.slice(0, hintTextIndex) +
                  (hintTextIndex % 2 === 0 ? ' _' : '')
                : ''
            }
            inputMode="text"
            multiline
            sx={{
              width: '100%',
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <TextField
            placeholder={!isCollapsed ? 'Your negative prompt is...' : ''}
            inputMode="text"
            multiline
            sx={{
              width: '100%',
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="slider-wrapper">
            <span className="slider-label">Temporary</span>
            <Slider
              defaultValue={6}
              min={0}
              max={10}
              step={1}
              marks={marks}
              valueLabelDisplay="auto"
              aria-labelledby="input-slider"
            />
          </div>
          {/* <div className="spacer"></div> */}
          <Button variant="contained" color="primary">
            Start
          </Button>
        </div>
      </div>
      <div className="panel-collapse">
        <IconButton onClick={handleToggle}>
          {isCollapsed ? (
            <ChevronRight color="primary" />
          ) : (
            <ChevronLeft color="primary" />
          )}
        </IconButton>
      </div>
    </div>
  );
}
