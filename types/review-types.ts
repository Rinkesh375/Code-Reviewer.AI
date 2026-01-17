export type ReviewStatus = "completed" | "failed" | "pending";

export type ReviewWithRepository = {
  id: string;
  repositoryId: string;
  prNumber: number;
  prTitle: string;
  prUrl: string;
  review: string;
  status: ReviewStatus;
  createdAt: Date;
  updatedAt: Date;

  repository: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    githubId: bigint;
    name: string;
    owner: string;
    url: string;
    fullName: string;
    userId: string;
  };
};
