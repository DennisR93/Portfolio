import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education-model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  // Education Model
  educationList: Education[] = [
    {
      institute: "Etgar College",
      course: "Industrial Management Technician",
      duration: "10/2018 - 03/2021",
      score: "97"
    },
    {
      institute: "John Bryce Academy",
      course: "Full Stack Web",
      duration: "03/2022 - 01/2023",
      score: "95"
    }
  ];

}
