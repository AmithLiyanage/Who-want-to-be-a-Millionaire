import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions={
    1:{
      question: "This is a sample question",
      marks: 1,
      correct: 1,
      answers: {
        1: {
          answer: "first"
        },
        2: {
          answer: "second"
        },
        3: {
          answer: "third"
        },
        4: {
          answer: "fourth"
        }
      }
    },
    2:{
      question: "This is a sample question",
      marks: 1,
      correct: 2,
      answers: {
        1: {
          answer: "first"
        },
        2: {
          answer: "second"
        },
        3: {
          answer: "third"
        },
        4: {
          answer: "fourth"
        }
      }
    }
  };

  constructor() { }

  public getQuestion(id:number){
    return this.questions[id];
  }
}
