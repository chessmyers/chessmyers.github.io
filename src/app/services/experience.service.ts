import { Injectable } from '@angular/core';
import {ExperienceModel} from '../models/Experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experiences: ExperienceModel[] = [
    {
      id: 0,
      name: 'SourceOne, Inc',
      role: "Full-stack developer",
      dates: 'January 2020 - May 2020',
      location: 'Boston, MA',
      logo: 'assets/sourceone.png',
      description: 'SourceOne, Inc is an energy consulting firm based in Boston, MA. The SourceOne EmSys portal is a web-based client energy portal for viewing a plethora of statistics about usage. It is built using Angular on the frontend, .NET Core on the backend, a Microsoft SQL Server Database, and tools such as Entity Framework, RxJS and LINQ.\n' +
        'As a full-stack software developer I worked alongside the team to develop many in-demand features, including a fluid viewer for utility invoice data and bug hotfixes.\n',
      color: '#EB2226',
      siteLink: 'https://www.sourceone.veolianorthamerica.com/'
    },
    {
      id: 1,
      name: 'Backerkit',
      role: "Software development intern",
      dates: 'January 2021 - May 2021',
      location: 'San Francisco, CA',
      logo: 'assets/backerkit.png',
      description: 'BackerKit is committed to helping creators running crowdfunding campaigns achieve success. Through the Backerkit platform they are able to control every aspect of their crowdfunding journey, from building hype around the product to shipping orders. As an intern on the product team, I worked closely alongside the rest of the team doing daily pair programming and test-driven development (TDD) to contribute to the development of the BackerKit platform.',
      color: '#FFCD55',
      siteLink: 'https://www.backerkit.com/'
    },
    {
      id: 2,
      name: 'Zoog',
      role: "Mobile development intern",
      dates: 'June 2021 - August 2021',
      location: 'Tel Aviv, IL',
      logo: 'assets/zoog.png',
      description: "Zoog's mission is to connect families through the power of storytelling, no matter the distance between them. The Zoog mobile app allows users to put themselves inside story books, melding the traditional experience of reading a bedtime story to a loved one with modern augmented reality (AR) technology. As a mobile development intern on the Zoog team, I worked alongside the founders to further development of Zoog mobile app. I added many key features including new account signup options, mobile video comments and profile management.",
      color: '#7696fc',
      siteLink: 'https://www.getzoog.com/'
    }
  ];

  getExperiences(): ExperienceModel[] {
    return this.experiences;
  }

  getExperience(id: number): ExperienceModel {
    return this.getExperiences().find(exp => exp.id === id);
  }

}
