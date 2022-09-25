export interface IQuestion {
  prompt: string;
  answer: string;
  isBonus?: boolean;
  isValid?: boolean;
}

export interface IRound {
  questions: Array<IQuestion>;
  theme?: string;
  completed?: boolean;
}

export interface IGame {
  id?: string;
  config: {
    rounds: number;
  };
  rounds: Array<IRound>;
  teams: {
    [phoneNumber: string]: {
      name?: string;
    };
  };
}

export interface IDatabase {
  games: {
    [date: string]: IGame;
  };
}
