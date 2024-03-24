import './Menu.scss';
import { motion } from 'framer-motion';
import menuItems from './menuItems.json';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <div className={'menu-container'}>
      <motion.div className={'menu'}
                  onMouseEnter={() => setIsMenuExpanded(true)}
                  onMouseLeave={() => setIsMenuExpanded(false)}
                  onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                  animate={isMenuExpanded ?
                    { width: '100%' } :
                    { width: '3rem', height: '3rem' }}
                  transition={isMenuExpanded ?
                    { duration: 0.5 } :
                    { duration: 0.5, delay: 0.1 }}>
        <motion.div className={'icon-container'}
                    animate={isMenuExpanded ?
                      { rotate: 0 } :
                      { rotate: 180 }}>
          <FontAwesomeIcon icon={faChevronUp}/>
        </motion.div>
        <div className={'menu-items'}>
          {menuItems.map((item, index) => (
            <motion.div className={'menu-item'}
                        whileTap={{ scale: 0.9 }}>
              <motion.button className={'menu-button'}
                             key={index}
                             animate={isMenuExpanded ?
                               { opacity: 1 } :
                               { opacity: 0, display: 'none' }}
                             transition={isMenuExpanded ?
                               { duration: 0.5, delay: 0.5 } :
                               { duration: 0.2, delay: 0.1 }}>
                {item}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}