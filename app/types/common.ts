export type Team = {
  name: string;
  memberList: Member[];
  totalScore: number;
};

export type Member = {
  name: string;
  organization: string;
  level: string;
  gender: "BOY" | "GIRL";
  leaderFlag: boolean;
  scores: {
    GREEN?: number;
    BLUE?: number;
    NAVY?: number;
    PURPLE?: number;
    BROWN?: number;
    BLACK?: number;
  };
  totalScore: number;
};

export type CommonApiResponse = {
  header: {
    resultCode: number;
    resultMessage: string;
    successful: boolean;
  };
};
