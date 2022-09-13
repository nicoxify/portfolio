import Project from "./Project"
import fullstackTodolist from "../public/fullstack-todolist.png"
import mkReinigung from "../public/mk-reinigung.png"
import onlineShop from "../public/online-shop.png"
import sortingAlgorithmVisualizer from "../public/sorting-algorithm-visualizer.png"
import portfolio from "../public/portfolio.png"
import bookstore from "../public/bookstore.png"
import degenz from "../public/degenz.png"

const Projects = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold py-10">MY PROJECTS</h2>
      <div className="grid lg:grid-cols-2 gap-7 md:gap-10 pb-10">
        <Project
          description="Startup where we connect the blockchain with Discord mainly using Typescript"
          websiteLink="https://whitepaper.degenlabz.io/"
          img={degenz}
          imgAlt="degen-labz"
        />
        <Project
          description="Fullstack online shop created with React, Bootstrap, Redux, Nodejs, Express and MongoDB"
          websiteLink="https://proshopnico.herokuapp.com/"
          codeLink="https://github.com/nicoxify/mern-online-shop"
          img={onlineShop}
          imgAlt="online shop"
        />
        <Project
          description="Bookstore-management-system created with Nextjs, Tailwindcss, TypeScript, Nodejs, Express and MongoDB"
          websiteLink="https://bookstore-management-system.vercel.app/"
          codeLink="https://github.com/nicoxify/bookstore-manager"
          img={bookstore}
          imgAlt="bookstore-management-system"
        />
        <Project
          description="Cleaning Service Website created with Nextjs and Tailwindcss."
          websiteLink="https://mk-reinigung.vercel.app/"
          codeLink="https://github.com/nicoxify/mk-reinigung"
          img={mkReinigung}
          imgAlt="cleaning service website"
        />
        <Project
          description="This portfolio created with Nextjs, Tailwindcss and TypeScript"
          codeLink="https://github.com/nicoxify/portfolio"
          img={portfolio}
          imgAlt="my portfolio"
        />
        <Project
          description="Fullstack Todolist created with Nextjs, Tailwindcss, node.js, express and MongoDB"
          websiteLink="https://mern-todo-next-typescript.vercel.app/"
          codeLink="https://github.com/nicoxify/mern-todo-next-typescript"
          img={fullstackTodolist}
          imgAlt="fullstack todolist"
        />
        <Project
          description="Visualize the merge-sort algorithm created with Nextjs, Tailwindcss and TypeScript"
          websiteLink="https://sorting-algorithm-visualizer-black.vercel.app/"
          codeLink="https://github.com/nicoxify/sorting-algorithm-visualizer"
          img={sortingAlgorithmVisualizer}
          imgAlt="sorting algorithm visualizer"
        />
      </div>
    </>
  )
}

export default Projects
