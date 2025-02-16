import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard, CardData } from "@/pages/Projectcard";
import "./Homepage.css";

export default function Home() {
  // Dummy data for featured projects
  const featuredProjects: CardData[] = [
    {
      title: "Project 1",
      description:
        "A brief overview of project 1 showcasing its main features.",
      imageurl: "https://www.w3schools.com/images/w3schools_green.jpg",
      imgalt: "Project 1 Image",
      content: "Project 1 is an innovative solution for ...",
    },
    {
      title: "Project 2",
      description:
        "Insights into the development and challenges faced in project 2.",
      imageurl: "https://via.placeholder.com/300",
      imgalt: "Project 2 Image",
      content: "Project 2 explores cutting-edge technology in ...",
    },
    {
      title: "Project 3",
      description:
        "An in-depth look at project 3 including its design process and key takeaways.",
      imageurl: "",
      imgalt: "Project 3 Image",
      content: "Project 3 is a comprehensive project that ...",
    },
  ];

  // Dummy data for latest blogs
  const latestBlogs = [
    {
      id: "1",
      title: "My Journey in Aerospace Engineering",
      excerpt: "A glimpse into my experiences in aerospace and coding.",
    },
    {
      id: "2",
      title: "Building Scalable MERN Stack Applications",
      excerpt: "Sharing insights and best practices on full-stack development.",
    },
    {
      id: "3",
      title: "Cricket and Coding: My Two Passions",
      excerpt: "How I balance my love for cricket with software development.",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Vivek</h1>
          <p className="text-xl md:text-2xl mb-8">
            Full-Stack Developer | Aerospace Engineer | Tech Enthusiast
          </p>
          <Link to="/about">
            <Button variant={"secondary"} className="px-8 py-3">
              Learn More About Me
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Projects
          </h2>
          <div className="projects-grid grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} carddata={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="default">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="latest-blogs py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Latest Blog Posts
          </h2>
          <div className="blogs-list space-y-4 max-w-2xl mx-auto">
            {latestBlogs.map((blog) => (
              <div key={blog.id} className="p-4 bg-white shadow rounded">
                <h3 className="text-2xl font-semibold">{blog.title}</h3>
                <p className="text-gray-600">{blog.excerpt}</p>
                <Link to={`/blog/${blog.id}`}>
                  <Button variant="default" className="mt-2">
                    Read More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button variant="default">View All Blogs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8">
            Interested in collaborating or have any questions? Feel free to
            reach out!
          </p>
          <Link to="/contact">
            <Button variant={"default"} className="px-8 py-3">
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
