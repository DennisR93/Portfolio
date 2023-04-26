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
    "Hi, I'm a Full Stack Web Developer",
    "Served in the army as a commander and Discipline NCO",
    "Always eager to learn new technologies and develop my self",
    "Currently looking for my next challenge as a Developer"
  ]
}
