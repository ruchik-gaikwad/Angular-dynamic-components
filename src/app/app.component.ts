import { Component, OnInit } from '@angular/core';
import { AdItem } from './model/ad-item';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobComponent } from './hero-job/hero-job.component'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dynamicComponentsPoc';

  ads: AdItem[];

  constructor() {}

  ngOnInit() {
    this.ads = this.getData();
  }

  getData() {
    return [
      new AdItem(HeroProfileComponent, {name: 'superman', bio: 'I have Super Powers'}),
      new AdItem(HeroProfileComponent, {name: 'batman', bio: 'I have bat powers'}),
      new AdItem(HeroJobComponent, { headline: 'opening for several positions', body: 'submit your resume !'}),
      new AdItem(HeroJobComponent, { headline: 'openning for UI/UX developer', body: 'should have handon experience in the Adobe XD'})
    ]
  }
}
 