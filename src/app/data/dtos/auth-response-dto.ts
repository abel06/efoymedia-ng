export interface AuthResponseDTO {
    accessToken: string | null;
    email: string | null;
    refreshToken: string | null;
    username: string | null;
}

export function createInitial__AuthResponseDTO__State(): AuthResponseDTO {
    return {
        accessToken: null,
        email: null,
        refreshToken: null,
        username: null
    };
}