import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions = {
    1: {
      question: '1. Someone who strongly asserts a position is often said to be "putting his" what down?',
      price: '$ 100',
      correct: 2,
      answers: {
        1: {
          answer: 'Head'
        },
        2: {
          answer: 'Foot'
        },
        3: {
          answer: 'Money'
        },
        4: {
          answer: 'VCR Remote'
        }
      }
    },
    2: {
      question: '2. Which of these sports usually takes place on a surface known as an alley?',
      price: '$ 300',
      correct: 1,
      answers: {
        1: {
          answer: 'Bowling'
        },
        2: {
          answer: 'Ice fishing'
        },
        3: {
          answer: 'Boxing'
        },
        4: {
          answer: 'Hockey'
        }
      }
    },
    3: {
      question: '3. The word "grand" is slang for what amount of money?',
      price: '$ 500',
      correct: 3,
      answers: {
        1: {
          answer: '$1'
        },
        2: {
          answer: '$1,000,000'
        },
        3: {
          answer: '$1,000'
        },
        4: {
          answer: '$100'
        }
      }
    },
    4: {
      question: '4. A cranky person is said to have gotten up "on the wrong side of the" what?',
      price: '$ 1000',
      correct: 1,
      answers: {
        1: {
          answer: 'Bed'
        },
        2: {
          answer: 'Law'
        },
        3: {
          answer: 'barn'
        },
        4: {
          answer: 'Fence'
        }
      }
    },
    5: {
      question: '5. Someone who is flexible is often said to be able to "roll with the" what?',
      price: '$ 2000',
      correct: 4,
      answers: {
        1: {
          answer: 'Dice'
        },
        2: {
          answer: 'Wheels'
        },
        3: {
          answer: 'Truckers'
        },
        4: {
          answer: 'Punches'
        }
      }
    }
  };

  constructor() { }

  public getQuestion(id:number){
    return this.questions[id];
  }
}
