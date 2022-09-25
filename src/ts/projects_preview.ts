import { experiment_icon } from './icons'

interface Project {
  name: string,
  description: string,
  url: string,
  type: string
  icon: string
}

function project_previewer (project: Project) {
  return project
}

export const projects_preview = [
  project_previewer({
    name: 'Portafolio',
    description: 'My personal portafolio, made according to Lighthouse evaluations',
    url: 'https://nelson-ricaurte.vercel.app/',
    type: 'experiment',
    icon: experiment_icon
  }),
  project_previewer({
    name: 'Magic navbar clone',
    description: 'A magic navbar clone made with Tailwind CSS',
    url: 'https://magic-navbar-clone-with-tailwind.vercel.app/',
    type: 'experiment',
    icon: experiment_icon
  })
]