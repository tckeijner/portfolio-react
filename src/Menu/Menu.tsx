import './Menu.scss';
import { motion } from 'framer-motion';
import menuItems from './menuItems.json';
import { useState } from 'react';

export default function Menu() {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
        >
          <motion.div
            className="li-text"
            whileHover={{
              scale: 1.2,
          }}>
            {item}
          </motion.div>
          <motion.div className="h-line"
                      animate={{ scaleX: hoverIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.5 }}>
          </motion.div>
          <motion.div className="v-line"
                      animate={{ scaleY: hoverIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: hoverIndex === index ? 0.5 : 0 }}>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}