import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend.class';


@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  tblHdStyle: string="text-primary fst-italic";

  friends: Friend[] = [
    new Friend(1, "Ryan", 15 ),
    new Friend(2, "Michael", 14),
    new Friend(3, "Tyler", 22),
    new Friend(4, "Jon", 2),
    new Friend(5, "Chance", 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
