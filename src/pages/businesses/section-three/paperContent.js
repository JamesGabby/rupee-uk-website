import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import CloudIcon from '@mui/icons-material/Cloud';

export const paperContent = [
  {
    id: 1,
    title: 'Access all information securely.',
    description: 'Store documents and important information in the cloud, ensuring easy access and complete security.',
    icon: <CloudIcon sx={{ fontSize: 50, color: '#44ae44', marginTop: 0 }} />
  },
  {
    id: 2,
    title: "Increase your team's productivity.",
    description: 'Our solution uses algorithms that detect and enable the automation of recurring tasks, saving you time.',
    icon: <DeviceHubIcon sx={{ fontSize: 50, color: '#44ae44', marginTop: 0 }} />
  },
  {
    id: 3,
    title: 'On-line Support',
    description: 'Count on us for any questions. Our team of experts will be ready to help.',
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: '#44ae44', marginBottom: 0 }} />
  }
]