import BlurOnIcon from '@mui/icons-material/BlurOn';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SpeedIcon from '@mui/icons-material/Speed';

export const paperContent = [
  {
    id: 1,
    title: 'Organise',
    description: 'Sort your obligations, store documents and issue reports for a streamlined decision making process.',
    icon: <LibraryBooksIcon sx={{ fontSize: 50, color: '#44ae44', marginTop: 10 }} />
  },
  {
    id: 2,
    title: 'Transparency',
    description: 'Full transparency of all tasks. Management has the ability to monitor all changes to tasks and documents.',
    icon: <BlurOnIcon sx={{ fontSize: 50, color: '#44ae44', marginTop: 10 }} />
  },
  {
    id: 3,
    title: 'Save Time',
    description: 'The ability to automate recurring tasks saves you up to 312 hours per year.',
    icon: <SpeedIcon sx={{ fontSize: 50, color: '#44ae44', marginTop: 10 }} />
  }
]