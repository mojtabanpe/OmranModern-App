import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketer-intro',
  templateUrl: './marketer-intro.component.html',
  styleUrls: ['./marketer-intro.component.css']
})
export class MarketerIntroComponent implements OnInit {
  marketer = {
    logo: '../../../../assets/img/logo/chomchibegam.png',
    name: 'عمران مدرن',
    location: 'تهران منطقه۱۲۰',
    phone: '88324211',
    site: 'www.omranmodern.com',
    address: 'خیابان حسینعلی جنب کوچه جونشاهی',
    beginWorkingTime: 8,
    endWorkingTime: 17
  };
  marketerRating = {
    stars: 4,
    score: 4.2,
    votes: 12330,
    satisfaction: 88
  };
  activityFields = ['سبزی خورد کنی', 'آشپزی', 'چم چی بگم', 'کثاافت کاری'];

  constructor() { }

  ngOnInit(): void {
  }

  public generateRowIndexes(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }
}
