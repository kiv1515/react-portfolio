function About() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-6 py-12 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className="relative inline-block rounded-2xl object-cover object-center shadow-lg w-full"
                            alt="Portfolio Image"
                            src="/images/for project.jpg"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-800 font-serif font-bold md:text-4xl mb-6">
                            About Me: Web Developer & Gaming Enthusiast
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                               Hi im Joshua Loller I am trying to become a game devolper. i am trying to learn as much as i can to help me in my dream to make games. I have always wanted to go into this field because i love games and technology and i want to make  a game that people can love just like i love to play games
                            </p>
                            <p>
                                Currently, I'm enrolled in the University of New Hampshire Coding Bootcamp, focusing on Full Stack Development. I'm learning everything from HTML and CSS to Node.js and React, and I'm excited to apply these skills to real-world projects.
                            </p>
                            <p>
                                Looking ahead, I'm eager to explore emerging web technologies, contribute to open-source projects, and develop innovative web applications that solve real-world problems.
                            </p>
                            <p>
                                When I'm not coding, you can find me gaming. and reading mangas. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;