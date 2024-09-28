import React from 'react';
import imgtwo from '../../assets/IMG2.jpg';
import { 
    List,
    ListItem,
    Card,
    Checkbox,
    Typography 
} from '@material-tailwind/react';

const WelcomePage = () => {
  return (
    <>
      <div className='mx-auto mt-4 md:mt-6 lg:mt-0 mb-10 mt-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex-1 md:w-1/2 p-1'>
                <img src={imgtwo} className='w-full h-auto rounded-lg' />
            </div>
            <div className='flex-1 md:w-1/2 rounded-lg p-1 ml-0 md:ml-0 lg:ml-9'>
                <Typography variant="h1" color="gray" className="mt-4 md:mt-2 lg:mt-0 mb-2 uppercase text-left text-2xl md:text-2xl lg:text-2xl font-bold tracking-wide leading-tight">
                    Welcome To Event Genius.
                </Typography>
                <Typography variant="h3" color="blue-gray" className="mb-1 md:mb-2 lg:mb-4 uppercase text-left text-4xl md:text-4xl lg:text-3xl font-bold tracking-wide leading-tight">
                    
                </Typography>
                <Typography color="gray" variant="paragraph" className="mb-2 text-left text-lg md:text-lg lg:text-lg">
                    
                </Typography>
                <div className="w-full flex justify-start p-4">
                    <ul className="">
                        <li className="flex items-center space-x-2">
                        <Checkbox defaultChecked disabled />
                        <Typography variant='paragraph' className='text-lg text-left'>AI chatbot for Doubt solving</Typography>
                        </li>
                        <li className="flex items-center space-x-2">
                        <Checkbox defaultChecked disabled />
                        <Typography variant='paragraph' className='text-lg text-left'>Less PaperWork</Typography>
                        </li>
                        <li className="flex items-center space-x-2 ">
                        <Checkbox defaultChecked disabled />
                        <Typography variant='paragraph' className='text-lg text-left'>Faster Approval</Typography>
                        </li>
                        <li className="flex items-center space-x-2 ">
                        <Checkbox defaultChecked disabled />
                        <Typography variant='paragraph' className='text-lg text-left'>More Efficient</Typography>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
