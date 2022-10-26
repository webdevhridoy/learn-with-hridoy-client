import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='mx-4 my-5'>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-500">
                    <div className="flex items-center justify-between">
                        <p className="px-2 py-1 font-bold rounded bg-white text-gray-900">CORS</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline text-white">What is CORS</h2>
                        <p className="mt-2 text-white">A cors is a cross-origin resource sharing. It is a way to allow resources to be shared across domains that would not otherwise be able to share data.</p>
                        <p className="mt-2 text-white">CORS are used by browsers, servers and web services to communicate with each other. A browser will send the request for cross-domain access and the server will grant or deny it based on its own configuration.</p>
                    </div>
                    <div className="center mt-5 mb-2">
                        <Link to='/categories' className="underline  text-white">Our Course</Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-5'>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-500">
                    <div className="flex items-center justify-between">
                        <p className="px-2 py-1 font-bold rounded bg-white text-gray-900">Firebase</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline text-white">Why Firebase is Used?</h2>
                        <p className="mt-2 text-white">Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</p>
                        <p className="mt-2 text-white"><strong>Top functionalities are:</strong></p>
                        <p className="mt-2 text-white">
                            <strong>Firebase Database:</strong> used to store users data like chat messages, users details and other metadata <br />
                            <strong>Firebase Cloud Storage:</strong> used to store user-generated content like the profile picture, multimedia messages, etc. <br />
                            <strong>Firebase Cloud Messaging:</strong> used to send notification <br />
                            <strong>Firebase Remote Config:</strong> used to perform A/B testing on the go
                        </p>
                    </div>
                    <div className="center mt-5 mb-2">
                        <Link to='/categories' className="underline  text-white">Our Course</Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-5'>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-500">
                    <div className="flex items-center justify-between">
                        <p className="px-2 py-1 font-bold rounded bg-white text-gray-900">Private Route</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline text-white">How does the private route work?</h2>
                        <p className="mt-2 text-white">Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                    </div>
                    <div className="center mt-5 mb-2">
                        <Link to='/categories' className="underline  text-white">Our Course</Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4 my-5'>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-green-500">
                    <div className="flex items-center justify-between">
                        <p className="px-2 py-1 font-bold rounded bg-white text-gray-900">Node</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline text-white">What is Node? How does Node work?</h2>
                        <p className="mt-2 text-white">JavaScript is one of the most popular programming languages in the world. It powers millions of websites today, and it has attracted droves of developers and designers to build features for the web. If you’re new to programming, JavaScript is easily one of the best programming languages to get under your belt.</p>
                        <p className="mt-2 text-white">Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java.</p>
                        <p className="mt-2 text-white">In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.</p>
                    </div>
                    <div className="center mt-5 mb-2">
                        <Link to='/categories' className="underline  text-white">Our Course</Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;