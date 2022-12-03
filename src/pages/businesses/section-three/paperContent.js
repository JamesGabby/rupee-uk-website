import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import CloudIcon from '@mui/icons-material/Cloud';

export const paperContent = [
  {
    id: 1,
    title: 'Secure',
    description: 'Store documents and important information in the cloud, ensuring easy access and complete security.',
    icon: <CloudIcon sx={{ fontSize: 50, color: '#44ae44', marginTop: 0 }} />
  },
  {
    id: 2,
    title: "Productivity",
    description: 'Our solution uses algorithms that detect and enable the automation of recurring tasks, saving you time.',
    icon: <DeviceHubIcon sx={{ fontSize: 50, color: '#44ae44', marginTop: 0 }} />
  },
  {
    id: 3,
    title: 'Support',
    description: 'Count on us for any questions or queries you may have. Our team of online experts will be ready to help.',
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: '#44ae44', marginTop: 0 }} />
  }
]