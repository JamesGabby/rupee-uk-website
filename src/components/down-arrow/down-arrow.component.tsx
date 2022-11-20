import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function DownArrow() {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <KeyboardArrowDownIcon sx={{ fontSize: 40, color: '#fff', marginTop: 10 }} />
    </motion.div>      
  );
}

export default DownArrow;
