import { Tournament } from "@/modules/tournaments/tournaments.slice";

export function tournamentAliasing(alias: string, data: Tournament[]): number | undefined {
    const tournament = data.find(tournament => tournament.tournament_name === alias);
    return tournament ? tournament.id : undefined;
}