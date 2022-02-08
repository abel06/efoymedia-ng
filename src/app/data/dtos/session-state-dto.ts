export interface SessionStateDTO {
    name: string | null;
    token: string | null;
 }

 export function createInitialState(): SessionStateDTO {
    return {
      name: null,
      token: null
    };
  }