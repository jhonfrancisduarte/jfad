import React, { Suspense, useState, useRef, useEffect } from 'react';

const skillsData = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack developer proficient in both frontend and backend technologies. Experienced in creating responsive websites with WordPress and developing web applications using Laravel, Livewire, Tailwind CSS, and Alpine.js. Skilled in backend development with MySQL for database management.'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Experienced in creating user-friendly interfaces that enhance user experience. Focused on designing intuitive layouts and interactions that allow users to easily understand and navigate application functionalities, resulting in improved user satisfaction and engagement.'
    },
    {
      id: 3,
      title: 'React Development',
      description: 'Specialized in building dynamic and interactive web applications using React. Proficient in creating reusable components, managing state, and implementing modern React patterns to develop efficient and scalable front-end solutions.'
    },
    {
      id: 4,
      title: 'Project Management',
      description: 'Played a crucial role in project management and version control. Experienced in utilizing Git with GitHub for efficient collaboration. Responsible for managing the master branch, overseeing version control, and handling branch merging to ensure smooth project progression and code integrity.'
    }
];
  

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        startCarousel();
        return () => stopCarousel();
    }, []);

    const startCarousel = () => {
        if (intervalRef.current !== null) return;
        intervalRef.current = setInterval(() => {
        if (!isPaused) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
        }
        }, 15000);
    };

    const stopCarousel = () => {
        if (intervalRef.current === null) return;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
    };

    return (
        <div 
        className="relative w-full max-w-md mx-auto parentCarousel" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="p-6 bg-white h-64">
            <h3 className="text-xl font-semibold mb-2">{skillsData[currentIndex].title}</h3>
            <p className="text-gray-600 text-sm">{skillsData[currentIndex].description}</p>
            </div>
        </div>
        <div className="flex justify-center mt-4">
            {skillsData.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
        <button
            onClick={goToNextSlide}
            className="sideCarret"
            aria-label="Next slide"
        >
            ›
        </button>
        </div>
    );
};

const About2 = () => {

  
    return (
      <div className='about2-content'>
        <div className='about2-left'>
          <img src="images/Me.png" alt="Me" className='me'/>
        </div>
        <div className='about2-left'>
            <div className='aboutHeader1'>
                <h2>What I do <span className='highLight'>best</span>.</h2>
                <div className='spacer'></div>
            </div>

            <div className='skillCarousel'>
                <Carousel />
            </div>
        </div>
      </div>
    );
  }
  
  export default About2;
  