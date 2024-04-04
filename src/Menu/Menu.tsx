import './Menu.scss';
import { motion } from 'framer-motion';
import { contentPages } from '../ContentContainer/contentPage';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { navigateByIndex } from '../state/navSlice';

export default function Menu() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const dispatch = useDispatch();

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
          <FontAwesomeIcon icon={faChevronDown}/>
        </motion.div>
        <div className={'menu-items'}>
          {contentPages.map((page, index) => (
            <motion.div key={index}
                        className={'menu-item'}
                        whileTap={{ scale: 0.9 }}>
              <motion.button className={'menu-button'}
                             key={index}
                             onClick={() => dispatch(navigateByIndex(index))}
                             animate={isMenuExpanded ?
                               { opacity: 1 } :
                               { opacity: 0, display: 'none' }}
                             transition={isMenuExpanded ?
                               { duration: 0.5, delay: 0.5 } :
                               { duration: 0.2, delay: 0.1 }}>
                {page.title}
              </motion.button>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}