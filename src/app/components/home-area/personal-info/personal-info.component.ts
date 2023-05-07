import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  personalData: string[][] = [
    ["Name:", "Dennis Rabinovitch"],
    ["DOB:", "14/09/1993"],
    ["Experience:", "Junior"],
    ["Education:", "Diploma"],
    ["Interests:", "Sports"]
  ]

  aboutMe: string[] = [
    "As a Full Stack Web Developer, I thrive on solving complex problems and crafting elegant solutions.",
    "With a passion for both front-end and back-end development, I am committed to delivering high-quality code that is both efficient and effective.",
    "I have a strong understanding of programming languages such as HTML, CSS, JavaScript, TypeScript, and I am always eager to learn and implement new technologies.",
    "Let's work together to create digital experiences that exceed expectations!"
  ]
}
