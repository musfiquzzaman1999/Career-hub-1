import React from 'react';
import JobCtg from './JobCtg';
import FeaturedJob from './FeaturedJob';

const Hero = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:ml-20 ">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">One Step Closer  
				<span className="text-sky-500">  To Your Dream </span> Job
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<p className=''>turpis pulvinar, est scelerisque ligula sem</p>
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-cyan-500 text-white dark:text-gray-900">Get Started</a>
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8">
			<img src="https://img.freepik.com/free-photo/businessman-presenting-something-isolated-white-background_1368-6049.jpg?w=740&t=st=1681057133~exp=1681057733~hmac=6b4d505f46ae82ccc8a91dc3e14e4deac122a2f9d35a69240758b9a844e7b348" />
		</div>
	</div>
</section>
<JobCtg></JobCtg>
<FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Hero;