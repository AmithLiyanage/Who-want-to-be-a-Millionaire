import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  isCorrected: boolean;
  question: any;
  id: string;
  answerClasses = {
    1: '',
    2: '',
    3: '',
    4: ''
  };

  constructor(private qService:QuestionsService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id');
    // console.log("id"+this.id)
    // tslint:disable-next-line: radix
    this.question = this.qService.getQuestion(parseInt(this.id));
    console.log(this.question);
  }

  checkAnswer(id: number){
    if (this.question.correct == id) {
      this.isCorrected = true;
      this.answerClasses[id] = 'btnGreen';
      console.log('correct answer');
    } else {
      this.isCorrected = false;
      this.answerClasses[id] = 'btnError';
      this.answerClasses[this.question.correct] = 'btnGreen';
      console.log('wrong answer');
    }
  }

  gotonext() {
    const nextQuestionId = parseInt(this.id) + 1;
    if (this.isCorrected) {
      this.route.navigate(['/question/' + nextQuestionId]);
    } else {
      this.route.navigate(['/question/1']);
    }
  }

}
