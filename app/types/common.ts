export type Team = {
  name: string;
  memberList: Member[];
  totalScore: number;
};

export type Member = {
  name: string;
  organization: string;
  level: string;
  leaderFlag: boolean;
  scores: unknown;
};

export type CommonApiResponse = {
  header: {
    resultCode: number;
    resultMessage: string;
    successful: boolean;
  };
};
