import FlashOnIcon from '@mui/icons-material/FlashOn';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';

export const paperContent = [
  {
    id: 1,
    title: 'Lightning Fast Implementation',
    description: 'Get setup fast. Full team implementation in the span of a few days.',
    icon: <FlashOnIcon sx={{ fontSize: 40, color: '#fff', marginTop: 5 }} />
  },
  {
    id: 2,
    title: 'Data Visualisation',
    description: 'Transform decision making. Intelligently use and visualise the data of your clients.',
    icon: <DataUsageIcon sx={{ fontSize: 40, color: '#fff', marginTop: 5 }} />
  },
  {
    id: 3,
    title: 'Tailored for Accountants',
    description: 'Designed with accountants in mind. Customise the application according to the need of each client.',
    icon: <DoneAllIcon sx={{ fontSize: 40, color: '#fff', marginTop: 5 }} />
  },
  {
    id: 4,
    title: 'Multiplatform',
    description: 'Access the application on multiple devices.',
    icon: <StorageIcon sx={{ fontSize: 40, color: '#fff', marginTop: 5 }} />
  },
  {
    id: 5,
    title: 'Automated Actions',
    description: 'Automate your tasks to recur and renew.',
    icon: <SettingsIcon sx={{ fontSize: 40, color: '#fff', marginTop: 5 }} />
  }
]