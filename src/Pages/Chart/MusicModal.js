import { useState } from 'react';

const MusicModal = () => {

  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
  
};

export default  MusicModal;
