import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-2 ml-32 mb-16 gap-10 mt-8'>
            <div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	<article>
		<h2 className="text-xl font-bold">When shouldn  you use the context API?</h2>
		<p className="mt-4 dark:text-gray-400">The Context API in React should be used to share data or state between components that are not directly related, such as global data or deeply nested components. However, it should be used sparingly to avoid unnecessary complexity in the code.</p>
		
	</article>
</div>
            </div>
            <div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	<article>
		<h2 className="text-xl font-bold">what is custom hooks in react?</h2>
		<p className="mt-4 dark:text-gray-400">Custom hooks in React are reusable functions that encapsulate common logic to be shared across multiple components. They allow for abstraction and separation of concerns, enabling easier testing, code reuse, and cleaner code. Custom hooks begin with the prefix "use" and follow the rules of React hooks.</p>
		
	</article>
</div>
            </div>

            <div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	<article>
		<h2 className="text-xl font-bold">what is use ref in react?</h2>
		<p className="mt-4 dark:text-gray-400">The useRef hook in React is used to create a mutable reference that persists across re-renders. It's often used to reference a DOM element or to store mutable values that don't cause a re-render. It returns an object with a current property to access and modify the stored value.</p>
		
	</article>
</div>
            </div>
            <div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	<article>
		<h2 className="text-xl font-bold">What is useMemo in React?</h2>
		<p className="mt-4 dark:text-gray-400">In React, useMemo is a hook that memoizes the result of a function and returns a cached value when the dependencies remain the same. It's used to optimize expensive calculations and prevent unnecessary re-renders by avoiding recalculation of the function result when the inputs don't change.</p>
		
	</article>
</div>
            </div>
        </div>
       
    );
};

export default Blog;