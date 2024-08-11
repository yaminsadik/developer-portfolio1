//import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
// import five from '../assets/svg/projects/five.svg'
// import six from '../assets/svg/projects/six.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'
import custom_one from '../assets/svg/projects/custom_one.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Eco-Watch',
        projectDesc: 'This project aims to build a website that showcase the ECO-WATCH web app',
        tags: ['React', 'CSS', 'HTML', 'Javascript', 'Auth0'],
        code: 'https://github.com/yaminsadik/eco-watch',
        demo: 'https://ecowatch.netlify.app/',
        image: custom_one
    },
    {
        id: 2,
        projectName: 'Illegal Dumping and litter Detection',
        projectDesc: 'Built a custom object detection model using PyTorch and YOLO v8 for detecting illegal dumping from aerial views. Gathered data with a DJI Mini 4 Pro drone, planned automated flights, and trained the model.',
        tags: ['Pytorch', 'YOLO', 'Python'],
        code: 'https://github.com/yaminsadik/ecowatch-yolov8',
        demo: 'https://github.com/yaminsadik/ecowatch-yolov8',
        image: two
    },
    {
        id: 3,
        projectName: 'Eco-Watch Web App',
        projectDesc: 'Developed a webapp using Python and Streamlit to detect object from images and videos live using any custom pytorch model.',
        tags: ['Streamlit', 'Python', 'Pytorch'],
        code: 'https://github.com/yaminsadik/litter-and-dumping-detection-app',
        demo: 'https://ecowatch.streamlit.app/',
        image: three
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/