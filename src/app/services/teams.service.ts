import { MATCHES_STATUSES } from '../../config';
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

export interface TeamSquadItem {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
}

export interface TeamDataResponse {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  squad: TeamSquadItem[];
}

export interface TeamMatchesItemResponse {
  competition: {
    id: number;
    name: string;
  };
  id: number;
  utcDate: string;
  homeTeam: TeamListItemResponse;
  awayTeam: TeamListItemResponse;
}

export interface TeamMatchesListResponse {
  matches: TeamMatchesItemResponse[];
}

export const TeamService = {
  async fetchTeamsList(limit: number, offset: number) {
    return await apiClient.get<TeamListResponse>('teams', {
      params: {
        limit,
        offset,
      },
    });
  },
  async fetchTeam(teamId: number) {
    return await apiClient.get<TeamDataResponse>(`teams/${teamId}`);
  },
  async fetchTeamMatches(
    teamId: number,
    status?: keyof typeof MATCHES_STATUSES,
  ) {
    return await apiClient.get<TeamMatchesListResponse>(
      `teams/${teamId}/matches`,
      {
        params: {
          status,
        },
      },
    );
  },
};
