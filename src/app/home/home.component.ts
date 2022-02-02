import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { baseURL } from '../shared/baseurl';
import { flyInOut, expand } from '../animations/app.animation';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../shared/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe((dish) => this.dish = dish, dishErrMess => this.dishErrMess = <any>dishErrMess)
    this.promotionservice.getFeaturedPromotion().subscribe((promotion) => this.promotion = promotion);
    this.leaderservice.getFeaturedLeader().subscribe((leader) => this.leader = leader);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  leaderErrMess: string;
  promotionErrMess: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderservice: LeaderService, private authenticationService: AuthenticationService,
    private userService: UserService, @Inject('BaseURL') public BaseURL) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

}
