import { apiClient } from '../../shared/api';

export interface TeamListItemResponse {
  id: number;
  name: string;
  crest: string;
}

export interface TeamListResponse {
  count: number;
  filters: {
    limit: number;
    offset: number;
  };
  teams: TeamListItemResponse[];
}

export const TeamService = {
  async fetchTeamsList() {
    return await apiClient.get<TeamListResponse>('teams');
  },
};
