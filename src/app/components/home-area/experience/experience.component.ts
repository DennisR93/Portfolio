import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience-model';
import { Projects } from 'src/app/models/projects-model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  projectList: Projects[] = [
    {
      name: "To-Do List",
      technologies: "HTML, CSS, JavaScript",
      type: "Frontend",
      description: [
        "Simple To-Do list project made with HTML, CSS, JavaScript"
      ]
    },
    {
      name: "Crypto Coins API",
      technologies: "HTML, CSS, jQuery",
      type: "Frontend",
      description: [
        "jQuery project using HTML, CSS, JavaScript and Rest API"
      ]
    },
    {
      name: "Vacation Planner",
      technologies: "React, TypeScript, MySQL, NodeJS",
      type: "MERN Stack",
      description: [
        "React, TypeScript, Redux project using MySQL and NodeJS", "Rest API built with TypeScript and NodeJS using express"
      ]
    },
    {
      name: "Portfolio",
      technologies: "Angular, TypeScript, CSS",
      type: "Frontend",
      description: [
        "Angular, TypeScript, fully responsive portfolio web site for mobile and desktop"
      ]
    },

  ]

  experienceList: Experience[] = [
    {
      role: "Commander, Disciplinary Senior NCO - Air Force - Anti Air Batteries",
      organization: "IDF",
      duration: "08/2015 - 12/2022",
      description: [
        "In charge of major leading base projects",
        "Team management",
        "Working with outsourcing companies"
      ],
      honors: [
        "Lieutenant colonel excellent period 01/17",
        "Brigadier general excellent period 01/20"
      ]
    },
  ]
}
