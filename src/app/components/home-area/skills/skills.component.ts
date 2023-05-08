import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skills-model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  // Skills Model
  skills: Skill[] = [
    {
      name: "HTML5, CSS3",
      level: "Expert",
      rating: 100
    },
    {
      name: "JavaScript, TypeScript",
      level: "Expert",
      rating: 100
    },
    {
      name: "React + Redux",
      level: "Advanced",
      rating: 80
    },
    {
      name: "Angular + Redux",
      level: "Intermediate",
      rating: 65
    },
    {
      name: "MySQL",
      level: "Advanced",
      rating: 85
    },
    {
      name: "MongoDB",
      level: "Advanced",
      rating: 85
    },
    {
      name: "Git",
      level: "Expert",
      rating: 95
    },
    {
      name: "PHP",
      level: "Intermediate",
      rating: 50
    },
    {
      name: "C#",
      level: "Beginner",
      rating: 25
    },
    {
      name: "Docker",
      level: "Beginner",
      rating: 25
    },
  ]
}
