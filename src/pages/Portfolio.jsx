import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Duneon Fighter",
      description: "A dnd style character builder",
      image: "public/images/image-for-homework.jpg", 
      deployedUrl: "https://dungeonfighter.onrender.com/#home",
      github: "https://github.com/ITSchleicher/dungeonfighter.git",
      className: "project-2"
    },
    {
      id: 2,
      title: "New Leash",
      description: "A pet adoption website",
      image: "public/images/pet img.avif",
      deployedUrl: "https://syntax-syndicate-project3.onrender.com/",
      github: "https://github.com/MadamLoki/syntax-syndicate-project3",
      className: "project-1"
    },

    {
      id: 3,
      title: "README Generator",
      description: "CLI application to generate README.md files",
      image: "https://github.com/MadamLoki/sara-ryan-portfolio/blob/main/assets/images/creativeproject.png?raw=true",
      deployedUrl: "https://github.com/kiv1515/readme-gen/blob/main/README.md",
      github: "https://github.com/kiv1515/readme-gen",
      className: "project-4"
    },
  ];

  return (
    <div className="bg-gray-100">
      <h2 className="text-4xl pt-8 text-center text-gray-800 font-serif mb-8">Featured Projects</h2>
      <section className="py-12">
        <div className="container mx-auto px-3">
          <div className="flex flex-wrap -mx-4">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;